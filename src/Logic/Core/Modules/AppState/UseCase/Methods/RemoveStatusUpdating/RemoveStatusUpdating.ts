import { AppStatusInterfaces } from "../../../AppStatus.interfaces";

export class RemoveStatusUpdating {
	static execute(module: AppStatusInterfaces.IModules) {
		return function (removingId: string): void {
			const store = module.service.store.getStore();
			const newStore = module.domain.removeStatusUpdating(store, removingId);

			module.service.store.setStore(newStore);
		};
	}
}
