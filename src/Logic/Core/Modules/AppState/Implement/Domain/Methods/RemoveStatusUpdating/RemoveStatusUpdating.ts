import { AppStatusInterfaces } from "../../../../AppStatus.interfaces";

export class RemoveStatusUpdating {
	static execute() {
		return function (deviceObj: AppStatusInterfaces.TObj, removingId: string): AppStatusInterfaces.TObj {
			return { ...deviceObj, updating: deviceObj.updating.filter((e) => e.id !== removingId) };
		};
	}
}
