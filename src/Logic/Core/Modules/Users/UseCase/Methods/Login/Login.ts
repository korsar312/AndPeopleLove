import { UserInterface } from "../../../User.interface";

export class Login {
	static execute(module: UserInterface.IModules) {
		return function (login: string = "", password: string = "") {
			return module.service.requestLogin(login, password).then((data) => {
				const store = module.service.store.getStore();
				const newAuth = module.domain.setAuth(store, data.auth);

				module.service.store.setStore(newAuth);
			});
		};
	}
}
