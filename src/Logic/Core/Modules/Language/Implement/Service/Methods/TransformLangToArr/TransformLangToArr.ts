import { LanguageInterface } from "../../../../Language.interface";

export class TransformLangToArr {
	static execute() {
		/**
		 * Перевод языков в массив
		 */
		return function (): Array<LanguageInterface.ELanguageType> {
			return Object.values(LanguageInterface.ELanguageType);
		};
	}
}
