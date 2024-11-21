import { LanguageInterface } from "../../../../Language.interface";

export class GetUserLanguage {
	static execute() {
		/**
		 * Возвращает языковую модель пользователя
		 */
		return function (): string {
			const language = window.navigator
				? window.navigator.language || window.navigator.systemLanguage || window.navigator.userLanguage
				: LanguageInterface.ELanguageType.EN;

			return language.slice(0, 2).toUpperCase();
		};
	}
}
