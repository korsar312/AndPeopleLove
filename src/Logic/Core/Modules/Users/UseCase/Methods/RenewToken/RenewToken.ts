import { UserInterface } from "../../../User.interface";

export class RenewToken {
	static execute(module: UserInterface.IModules) {
		return function () {
			const store = module.service.store.getStore();
			const authData = module.domain.getAuth(store) || undefined;
			const authReToken = module.domain.getAuthFromReToken(authData);

			return module.service.requestRenewToken(authReToken).then((data) => {
				const newAuth = module.domain.setAuth(store, data);

				module.service.store.setStore(newAuth);
			});
		};
	}
}
