import { UserDomain } from "./Implement/Domain/User.domain";
import { UserService } from "./Implement/Service/User.service";

export namespace UserInterface {
	/**
	 * Основной объект юзера
	 */
	export type TUserObj = {
		userInform: IUserInform | null;
		userCooperator: IUser | null;
	};

	export interface IUserInform {
		user?: IUser;
		auth?: IAuth;
	}

	export interface IUser {
		id: string;
		name: string;
		surname: string;
		sex: string;
	}

	export interface IAuth {
		accessToken: string;
		refreshToken: string;
		expiresInJwt: number;
		userUniqId: string;
		userSid: string;
		controllerUniqueId: string;
	}

	export type TAuthReToken = Pick<IAuth, "userUniqId" | "controllerUniqueId" | "refreshToken">;

	/**
	 * Домен и сервис
	 */
	export interface IModules {
		domain: UserDomain;
		service: UserService;
	}
}
