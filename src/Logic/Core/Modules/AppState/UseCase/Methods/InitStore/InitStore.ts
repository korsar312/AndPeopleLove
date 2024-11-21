import { AppStatusInterfaces } from "../../../AppStatus.interfaces";

export class InitStore {
	static execute(module: AppStatusInterfaces.IModules) {
		return function (): void {
			module.service.store.setStore({
				updating: [],
				modalError: null,
				websocketIsDisabled: true,
				isAwaitRequest: false,
				isDone: false,
			});
		};
	}
}
