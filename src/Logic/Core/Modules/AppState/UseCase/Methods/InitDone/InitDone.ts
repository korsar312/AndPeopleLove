import { AppStatusInterfaces } from "../../../AppStatus.interfaces";

export class InitDone {
	static execute(module: AppStatusInterfaces.IModules) {
		return function (): void {
			const store = module.service.store.getStore();
			const newStore = module.domain.initDone(store);

			module.service.store.setStore(newStore);
		};
	}
}
