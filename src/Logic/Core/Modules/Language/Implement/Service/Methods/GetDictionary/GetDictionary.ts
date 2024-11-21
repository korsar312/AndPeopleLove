import { LanguageInterface } from "../../../../Language.interface";
import { DictionaryList } from "Logic/Config/ConfigLists/DictionaryList";

export class GetDictionary {
	static execute() {
		/**
		 * Возвращает словарь
		 */
		return function (): LanguageInterface.TLanguage {
			return DictionaryList;
		};
	}
}
