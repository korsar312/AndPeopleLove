import { AppStatusInterfaces } from "../../../../AppStatus.interfaces";

export class SetWebsocketStatus {
	static execute() {
		return function (appObj: AppStatusInterfaces.TObj, isDisabled: boolean): AppStatusInterfaces.TObj {
			return { ...appObj, websocketIsDisabled: isDisabled };
		};
	}
}
