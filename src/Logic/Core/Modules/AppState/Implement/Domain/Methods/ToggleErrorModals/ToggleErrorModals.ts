import { AppStatusInterfaces } from "../../../../AppStatus.interfaces";

export class ToggleErrorModals {
	static execute() {
		return function (appObj: AppStatusInterfaces.TObj, modal?: AppStatusInterfaces.TErrorData): AppStatusInterfaces.TObj {
			return { ...appObj, modalError: modal || null };
		};
	}
}
