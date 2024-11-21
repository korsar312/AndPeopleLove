import { LanguageInterface } from "../../../../Language.interface";
import { WordModifyList } from "../../../../../../../Config/ConfigLists/WordModifyList";

export class GetModifer {
	static execute() {
		return function (): LanguageInterface.TWordModifyList {
			return WordModifyList;
		};
	}
}
