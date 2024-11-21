import { AppStatusInterfaces } from "../../../../AppStatus.interfaces";

export class IsInitDone {
	static execute() {
		return function (deviceObj: AppStatusInterfaces.TObj): boolean {
			return deviceObj.isDone;
		};
	}
}
