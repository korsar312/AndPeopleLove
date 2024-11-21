import { RouteInterfaces } from "../../../Route.interfaces";
import { NavigateFunction } from "react-router-dom";

export class SetNavigateFunc {
	static execute(module: RouteInterfaces.IModules) {
		return function (navFunction: NavigateFunction): void {
			const storeNavigate = module.service.store.getStore();
			const newStore = module.domain.setNavigateFunc(storeNavigate, navFunction);

			module.service.store.setStore(newStore);
		};
	}
}
