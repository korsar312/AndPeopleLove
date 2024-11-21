import UseCases from "../../../UseCases";
import API from "../../../../API/API";

export class WebsocketIsConnect {
	static execute(moduleChoicer: typeof UseCases) {
		return async function () {
			return API.ws("getSuccessStatus");
		};
	}
}
