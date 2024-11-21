import { LanguageInterface } from "../../../../Language.interface";

const { RU, EN } = LanguageInterface.ELanguageType;

export class SwitchCurrentLanguage {
	static execute() {
		return function (
			languageObj: LanguageInterface.TObj,
			currentLang: LanguageInterface.ELanguageType,
		): LanguageInterface.TObj {
			const lang = currentLang === RU ? EN : RU;

			return { ...languageObj, model: lang };
		};
	}
}
