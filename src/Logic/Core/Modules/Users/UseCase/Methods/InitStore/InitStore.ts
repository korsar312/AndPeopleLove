import { UserInterface } from "../../../User.interface";

export class InitStore {
	static execute(module: UserInterface.IModules) {
		return function (): void {
			module.service.store.setStore({
				userInform: null,
				userCooperator: null,
			});
		};
	}
}
