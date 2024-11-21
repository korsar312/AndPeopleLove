import { UserInterface } from "../../../../User.interface";

export class GetAuth {
	static execute() {
		return function (userObj: UserInterface.TUserObj): UserInterface.IAuth | undefined {
			return userObj.userInform?.auth;
		};
	}
}
