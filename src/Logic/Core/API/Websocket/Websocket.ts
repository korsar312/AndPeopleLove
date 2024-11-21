import { WebsocketInterface } from "./Websocket.interface";
import { WebsocketCore } from "./Websocket.core";
import { AppStatusInterfaces } from "../../Modules/AppState/AppStatus.interfaces";
import { UserInterface } from "../../Modules/Users/User.interface";

const link = WebsocketInterface.Name;

export class Websocket extends WebsocketCore implements WebsocketInterface.TWSRequest {
	public addMethodEmitter(emitType: WebsocketInterface.EMethodNameInternal, event: WebsocketInterface.TMethodEmitterFn) {
		super.addMethodEmitter(emitType, event);
	}

	public removeMethodEmitter(emitType: WebsocketInterface.EMethodNameInternal, event: WebsocketInterface.TMethodEmitterFn) {
		super.removeMethodEmitter(emitType, event);
	}

	public getSuccessStatus() {
		return super.getSuccessStatus();
	}

	public EMULATE_EXAMPLE() {
		return this.request<void, AppStatusInterfaces.TErrorData>(link.EMULATE_EXAMPLE, undefined, {
			isInternal: true,
			data: {
				ActionResult: WebsocketInterface.EResponseWsResult.OK,
				result: { name: AppStatusInterfaces.EErrorModalList.errorAny },
				id: "internal",
				method: WebsocketInterface.EMethodNameInternal.ExampleInternal,
			},
		});
	}

	public LOGIN(login: string, password: string) {
		return this.request<UserInterface.IUserInform>(link.LOGIN, { login, password });
	}

	public LOGOFF() {
		return this.request(link.LOGOFF);
	}

	public RENEW_TOKEN(data: UserInterface.TAuthReToken) {
		return this.request<UserInterface.IAuth>(link.RENEW_TOKEN, data);
	}
}
