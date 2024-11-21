import { RouteInterfaces } from "../../../Route.interfaces";
import { Params } from "react-router-dom";

export class GoLink {
	static execute(module: RouteInterfaces.IModules) {
		return function (path: RouteInterfaces.EPathName, params?: Params): void {
			const store = module.service.store.getStore();
			const navigateFunc = module.domain.getNavigateFunc(store);

			module.domain.routerGo(navigateFunc, path, params);
		};
	}
}
