import { RouteInterfaces } from "../../../Route.interfaces";

export class GoHomePage {
	static execute(module: RouteInterfaces.IModules) {
		return function (): void {
			const store = module.service.store.getStore();
			const navigateFunc = module.domain.getNavigateFunc(store);

			module.domain.routerGo(navigateFunc, "HOME_PAGE");
		};
	}
}
