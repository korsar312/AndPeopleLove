import {LanguageInterface} from "../../../../Language.interface";

export class CheckUserLanguage {
	static execute() {
		/**
		 * Проверка на возможную языковую модель
		 * @param languageUser - язык пользователя
		 * @param languageArr - доступные языки
		 */
		return function (languageUser: string, languageArr: LanguageInterface.ELanguageType[]): LanguageInterface.ELanguageType {
			const findModel = languageArr.find((l) => l === languageUser);

			return findModel || LanguageInterface.ELanguageType.EN;
		};
	}
}
