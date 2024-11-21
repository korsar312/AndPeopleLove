import APIRequest from "Logic/Core/API/API";
import { UserInterface } from "../../../../User.interface";

export class RequestRenewToken {
	static execute() {
		return function (dataAuth: UserInterface.TAuthReToken) {
			return APIRequest.ws("RENEW_TOKEN", dataAuth);
		};
	}
}
