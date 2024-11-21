import { LanguageInterface } from "../../../../Language.interface";

export class GetCurrentLanguage {
	static execute() {
		/**
		 * Возвращает текущую языковую модель
		 * @param languageObj - языковой объект
		 */
		return function (languageObj: LanguageInterface.TObj): LanguageInterface.ELanguageType {
			return languageObj.model;
		};
	}
}
