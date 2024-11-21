import { LanguageInterface } from "../../../../Language.interface";
import { WordTransferList } from "Logic/Config/ConfigLists/WordTransferList";

export class GetTransfer {
	static execute() {
		return function (): LanguageInterface.TWordTransferList {
			return WordTransferList;
		};
	}
}
