import {AppStatusInterfaces} from "../../../../AppStatus.interfaces";
import {LanguageInterface} from "../../../../../Language/Language.interface";

export class CreateStatusUpdatingObj {
	static execute() {
		return function (id: string, title?: LanguageInterface.TAllWord): AppStatusInterfaces.TStatusUpdate {
			return {
				id,
				title,
			};
		};
	}
}
