import { AppStatusInterfaces } from "../../../../AppStatus.interfaces";

export class WebsocketIsDisabled {
	static execute() {
		return function (appObj: AppStatusInterfaces.TObj): boolean {
			return appObj.websocketIsDisabled;
		};
	}
}
