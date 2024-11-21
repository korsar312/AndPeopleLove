import { RouteInterfaces } from "../../../Route.interfaces";

export class InitStore {
	static execute(module: RouteInterfaces.IModules) {
		return function (): void {
			const styleObj = module.service.createNavigateObj();

			module.service.store.setStore(styleObj);
		};
	}
}
