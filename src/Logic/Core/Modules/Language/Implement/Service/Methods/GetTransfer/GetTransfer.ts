import { LanguageInterface } from "../../../../Language.interface";
import { WordTransferList } from "../../../../../../../Config/ConfigLists/WordTransferList";

export class GetTransfer {
	static execute() {
		return function (): LanguageInterface.TWordTransferList {
			return WordTransferList;
		};
	}
}
