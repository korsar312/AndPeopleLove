import { AppStatusInterfaces } from "../../../../AppStatus.interfaces";

export class GetStatusUpdating {
	static execute() {
		return function (deviceObj: AppStatusInterfaces.TObj): AppStatusInterfaces.TStatusUpdate[] {
			return deviceObj.updating;
		};
	}
}
