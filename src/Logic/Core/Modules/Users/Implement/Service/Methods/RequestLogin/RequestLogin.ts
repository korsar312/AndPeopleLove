import APIRequest from "Logic/Core/API/API";

export class RequestLogin {
	static execute() {
		return function (login: string, password: string) {
			return APIRequest.ws("LOGIN", login, password);
		};
	}
}
