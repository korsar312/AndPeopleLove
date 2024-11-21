import UseCases from "../../../UseCases";
import API from "../../../../API/API";
import { WebsocketInterface } from "../../../../API/Websocket/Websocket.interface";

export class WebsocketEmit {
	static execute(moduleChoicer: typeof UseCases) {
		return async function (emitType: WebsocketInterface.EMethodNameInternal, event: WebsocketInterface.TMethodEmitterFn) {
			return API.ws("addMethodEmitter", emitType, event);
		};
	}
}
