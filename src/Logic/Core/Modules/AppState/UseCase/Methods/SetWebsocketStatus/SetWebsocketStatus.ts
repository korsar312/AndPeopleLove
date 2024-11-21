import { AppStatusInterfaces } from "../../../AppStatus.interfaces";

export class SetWebsocketStatus {
	static execute(module: AppStatusInterfaces.IModules) {
		return function (isDisabled: boolean) {
			const store = module.service.store.getStore();
			const newStore = module.domain.setWebsocketStatus(store, isDisabled);

			module.service.store.setStore(newStore);
		};
	}
}
