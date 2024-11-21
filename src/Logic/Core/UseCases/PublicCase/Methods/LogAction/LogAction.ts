import UseCases from "../../../UseCases";
import API from "../../../../API/API";
import { APIInterface } from "../../../../API/API.interface";

export class LogAction {
	static execute(moduleChoicer: typeof UseCases) {
		return function (data: APIInterface.TLogParam) {
			return API.ws("EMULATE_EXAMPLE"); //newData);
		};
	}
}
