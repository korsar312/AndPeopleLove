import { AppStatusInterfaces } from "../../../../AppStatus.interfaces";

export class InitDone {
	static execute() {
		return function (deviceObj: AppStatusInterfaces.TObj): AppStatusInterfaces.TObj {
			return { ...deviceObj, isDone: true };
		};
	}
}
