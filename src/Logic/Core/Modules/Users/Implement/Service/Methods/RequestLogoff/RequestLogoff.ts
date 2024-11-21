import APIRequest from "../../../../../../API/API";

export class RequestLogoff {
	static execute() {
		return function () {
			return APIRequest.ws("LOGOFF");
		};
	}
}
