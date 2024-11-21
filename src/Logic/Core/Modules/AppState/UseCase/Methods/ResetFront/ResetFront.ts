import { AppStatusInterfaces } from "../../../AppStatus.interfaces";

export class ResetFront {
	static execute(module: AppStatusInterfaces.IModules) {
		return function () {
			return module.domain.resetFront();
		};
	}
}
