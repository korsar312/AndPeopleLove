import { UserInterface } from "../../../../User.interface";

export class GetAuthFromReToken {
	static execute() {
		return function (auth?: UserInterface.IAuth): UserInterface.TAuthReToken {
			return {
				refreshToken: auth?.refreshToken || "",
				controllerUniqueId: auth?.controllerUniqueId || "",
				userUniqId: auth?.userUniqId || "",
			};
		};
	}
}
