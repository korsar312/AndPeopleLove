import { AppStatusInterfaces } from "../../../AppStatus.interfaces";

export class ToggleErrorModals {
	static execute(module: AppStatusInterfaces.IModules) {
		return function (modals?: AppStatusInterfaces.TErrorData): void {
			const store = module.service.store.getStore();
			const newStore = module.domain.toggleErrorModals(store, modals);

			module.service.store.setStore(newStore);
		};
	}
}
