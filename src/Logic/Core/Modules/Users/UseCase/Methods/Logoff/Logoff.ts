import { UserInterface } from "../../../User.interface";

export class Logoff {
	static execute(module: UserInterface.IModules) {
		return function () {
			return module.service.requestLogoff().then(() => {
				const store = module.service.store.getStore();
				const newAuth = module.domain.setAuth(store, undefined);

				module.service.store.setStore(newAuth);
			});
		};
	}
}
