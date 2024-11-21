import { LanguageDomain } from "./Implement/Domain/Language.domain";
import { LanguageService } from "./Implement/Service/Language.service";
import { CSSObject } from "@emotion/react";
import { ReactNode } from "react";

export namespace LanguageInterface {
	/**
	 * Список языков
	 */
	export enum ELanguageType {
		RU = "RU",
		EN = "EN",
	}

	/**
	 * Список слов
	 */
	export enum EWord {
		PAGES = "PAGES",
		BUTTON = "BUTTON",
		ERROR = "ERROR",
	}

	/**
	 * Список слов из смежных доменов
	 */
	const EOtherDomainWord = {};

	/**
	 * Список всех слов
	 */
	export const allLanguageWord = {
		...EWord,
		...EOtherDomainWord,
	};

	export type TAllTranslateWord = keyof typeof allLanguageWord;
	export type TAllWord = TAllTranslateWord | string | number | undefined | null;

	/**
	 * Список языков для словаря
	 */
	type TWord = {
		[key in ELanguageType]: string;
	};

	/**
	 * Список слов для словаря
	 */
	export type TLanguage = {
		[key in TAllTranslateWord]: TWord;
	};

	type TOptWord<T> = Partial<Record<TAllTranslateWord, T>>;
	type TOptLang<T> = Partial<Record<ELanguageType, T>>;

	export type TWordTransferList = TOptWord<TOptLang<number[]>>;
	export type TWordModifyList = TOptWord<TOptLang<Array<[number, number]>>>;

	export type TAddon = {
		trans?: LanguageInterface.TWordTransferList;
		modify?: LanguageInterface.TWordModifyList;
	};

	export type TAdding = {
		styles?: CSSObject;
		content?: ReactNode;
	};

	export type TTextCaseWord = "CAPITAL" | "SMALL" | "NORMAL";

	/**
	 * Основной языковой объект
	 */
	export type TObj = {
		model: ELanguageType;
	};

	/**
	 * Домен и сервис
	 */
	export interface IModules {
		domain: LanguageDomain;
		service: LanguageService;
	}
}
