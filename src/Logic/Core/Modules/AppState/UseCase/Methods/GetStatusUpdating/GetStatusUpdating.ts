import { AppStatusInterfaces } from "../../../AppStatus.interfaces";

export class GetStatusUpdating {
	static execute(module: AppStatusInterfaces.IModules) {
		return function (): AppStatusInterfaces.TStatusUpdate[] {
			const store = module.service.store.getStore();

			return module.domain.getStatusUpdating(store);
		};
	}
}
