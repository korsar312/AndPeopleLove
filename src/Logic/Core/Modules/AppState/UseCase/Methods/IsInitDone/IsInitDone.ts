import { AppStatusInterfaces } from "../../../AppStatus.interfaces";

export class IsInitDone {
	static execute(module: AppStatusInterfaces.IModules) {
		return function (): boolean {
			const store = module.service.store.getStore();

			return module.domain.isInitDone(store);
		};
	}
}
