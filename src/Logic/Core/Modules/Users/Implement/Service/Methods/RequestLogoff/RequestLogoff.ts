import APIRequest from "Logic/Core/API/API";

export class RequestLogoff {
	static execute() {
		return function () {
			return APIRequest.ws("LOGOFF");
		};
	}
}
