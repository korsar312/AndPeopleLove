import { UserInterface } from "../../../../User.interface";

export class SetAuth {
	static execute() {
		return function (userObj: UserInterface.TUserObj, auth?: UserInterface.IAuth): UserInterface.TUserObj {
			const oldUserInform = userObj.userInform;

			const userInform = oldUserInform ? { ...oldUserInform, auth } : { auth };

			return { ...userObj, userInform };
		};
	}
}
