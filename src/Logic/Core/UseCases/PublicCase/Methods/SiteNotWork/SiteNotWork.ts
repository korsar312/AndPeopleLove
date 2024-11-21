import UseCases from "../../../UseCases";
import { LanguageInterface } from "../../../../Modules/Language/Language.interface";

type TReason = {
	isError: boolean;
	text?: LanguageInterface.TAllWord;
};

export class SiteNotWork {
	static execute(moduleChoicer: typeof UseCases) {
		return function (): TReason {
			return { isError: false };
		};
	}
}
