import {AppStatusInterfaces} from "../../../AppStatus.interfaces";
import {v4 as id} from "uuid";

export class AddStatusUpdating {
	static execute(module: AppStatusInterfaces.IModules) {
		return function (addingStatus?: string): string {
			const store = module.service.store.getStore();
			const uniqueId = id();
			const newStatus = module.domain.createStatusUpdatingObj(uniqueId, addingStatus);
			const newStore = module.domain.addStatusUpdating(store, newStatus);

			module.service.store.setStore(newStore);

			return uniqueId;
		};
	}
}
