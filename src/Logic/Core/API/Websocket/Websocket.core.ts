import { v4 } from "uuid";
import { WebsocketInterface } from "./Websocket.interface";
import { UserInterface } from "../../Modules/Users/User.interface";

export interface IWebsocketCoreInit {
	getUrl: () => string;
	setConnectSuccess: (status: boolean) => void;
	removeUpdate: (removeId: string) => void;
	getConnectSuccess: () => boolean;
	addUpdate: () => string;
	getAuth: () => UserInterface.IAuth | undefined;
}

export class WebsocketCore {
	private props: IWebsocketCoreInit;

	private preloaderId: string = "";
	private socket: WebSocket | undefined;

	private methodEmitter: WebsocketInterface.TMethodEmitter = Object.keys(WebsocketInterface.EMethodNameInternal).reduce((prev, cur) => {
		prev[cur as WebsocketInterface.EMethodNameInternal] = [];
		return prev;
	}, {} as WebsocketInterface.TMethodEmitter);

	constructor(init: IWebsocketCoreInit) {
		this.props = init;

		this.init();
	}

	private init() {
		this.openWebSocket().then(() => {
			if (this.socket) {
				this.props.setConnectSuccess(false);
				this.props.removeUpdate(this.preloaderId);

				this.socket.onclose = () => this.closeHandler();
				this.socket.onmessage = (e) => this.massageHandler.call(this, e);
			}
		});
	}

	private openWebSocket() {
		return new Promise((resolve) => {
			const loop = () => {
				this.socket = new WebSocket(this.props.getUrl());

				const removeEvent = () => {
					this.socket?.removeEventListener("open", onOpen);
					this.socket?.removeEventListener("error", onError);
				};

				const onOpen = () => {
					removeEvent();
					resolve("");
				};

				const onError = () => {
					removeEvent();
					loop();
				};

				this.socket.addEventListener("open", onOpen);
				this.socket.addEventListener("error", onError);
			};

			loop();
		});
	}

	private closeHandler = () => {
		this.props.setConnectSuccess(true);
		this.preloaderId = this.props.addUpdate();
		this.init();
	};

	private massageHandler(e: MessageEvent) {
		const res = JSON.parse(String(e.data)) as WebsocketInterface.TRPC<any>;
		const method = res.method;
		const isNoRequest = res.id === "internal";

		method && isNoRequest && this.methodEmitter[method].forEach((el) => el(res.result));
	}

	private getResponse<RES>(id: string): Promise<RES> {
		return new Promise((resolve, reject) => {
			if (!this.props.getConnectSuccess()) return reject();

			const removeListeners = () => {
				this.socket?.removeEventListener("message", success);
				this.socket?.removeEventListener("close", rej);
			};

			const success = (e: MessageEvent) => {
				const res = JSON.parse(String(e.data)) as WebsocketInterface.TRPC<RES>;
				const { ERROR } = WebsocketInterface.EResponseWsResult;

				if (res.id === id) {
					removeListeners();

					if ((res.result as WebsocketInterface.TResponseWs<RES>)?.ActionResult === ERROR || res.ActionResult === ERROR) {
						return reject(res.result);
					}

					return resolve(res.result);
				}
			};

			const rej = () => {
				removeListeners();
				reject();
			};

			this.socket?.addEventListener("message", success);
			this.socket?.addEventListener("close", rej);
		});
	}

	private createWsResponse<RES>(data: Partial<WebsocketInterface.TRPC<RES>>, id: string) {
		const result: Partial<WebsocketInterface.TRPC<RES>> = {
			id,
			...data,
		};

		return result;
	}

	private simulateResponse<RES>(data: Partial<WebsocketInterface.TRPC<RES>>) {
		const simulatedResponse = new MessageEvent("message", { data: JSON.stringify(data) });
		this.socket?.onmessage?.(simulatedResponse);
	}

	protected request<RES, EMULATE = any>(
		method: string,
		data?: Record<string, any>,
		emulate?: { data: Partial<WebsocketInterface.TRPC<EMULATE>>; isInternal: boolean },
	): Promise<RES> {
		const auth = this.props.getAuth();
		const id = v4();

		const publicData = {
			id,
			jsonrpc: "2.0",
			method: method,
			params: {
				sid: auth?.userSid,
				value: data,
			},
		};

		return new Promise((resolve, reject) => {
			const request = () => {
				if (emulate) {
					const res = this.createWsResponse(emulate.data, id);

					if (emulate.isInternal) {
						resolve(this.responseMorph(res as RES));
					} else {
						response();
					}

					emulate && this.simulateResponse(emulate.data);
				} else {
					this.socket?.send(JSON.stringify(publicData));
					response();
				}
			};

			const response = () => {
				this.getResponse(id)
					.then((e) => resolve(this.responseMorph(e as RES)))
					.catch((e) => reject(this.responseMorph(e as RES)));
			};

			request();
		});
	}

	protected responseMorph<T>(res: WebsocketInterface.TResponseWs<T> | T) {
		if (res && typeof res === "object" && "Info" in res) {
			return res.Info;
		}

		return res;
	}

	protected addMethodEmitter(emitType: WebsocketInterface.EMethodNameInternal, event: WebsocketInterface.TMethodEmitterFn) {
		const emit = this.methodEmitter[emitType];
		emit.includes(event) || emit.push(event);
	}

	protected removeMethodEmitter(emitType: WebsocketInterface.EMethodNameInternal, event: WebsocketInterface.TMethodEmitterFn) {
		const emit = this.methodEmitter[emitType];

		const index = emit.indexOf(event);
		index !== -1 && emit.splice(index, 1);
	}

	protected getSuccessStatus() {
		return new Promise((resolve) => {
			const renew = () => void (this.props.getConnectSuccess() ? resolve(void 0) : setTimeout(renew, 200));
			renew();
		});
	}
}
