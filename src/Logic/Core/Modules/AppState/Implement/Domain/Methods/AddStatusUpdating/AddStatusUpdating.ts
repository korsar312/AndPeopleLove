import {AppStatusInterfaces} from "../../../../AppStatus.interfaces";

export class AddStatusUpdating {
	static execute() {
		return function (
			deviceObj: AppStatusInterfaces.TObj,
			addingStatus: AppStatusInterfaces.TStatusUpdate,
		): AppStatusInterfaces.TObj {
			return { ...deviceObj, updating: [...deviceObj.updating, addingStatus] };
		};
	}
}
