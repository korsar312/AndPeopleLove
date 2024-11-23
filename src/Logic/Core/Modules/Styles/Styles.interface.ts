import { StylesDomain } from "./Implement/Domain/Styles.domain";
import { StylesService } from "./Implement/Service/Styles.service";
import { CSSObject } from "@emotion/react";

export namespace StylesInterface {
	export type TColorRGBFormat = `rgba(${string},${number})`;
	export type TColorHEXFormat = `#${string}`;

	export enum EColor {
		WHITE_1 = "WHITE_1",
		BLACK_1 = "BLACK_1",
		RED_1 = "RED_1",
		YELLOW_1 = "YELLOW_1",
		GREEN_1 = "GREEN_1",
		BLUE_1 = "BLUE_1",
	}

	export type TColor = Record<EColor, TColorHEXFormat>;

	export enum EFont {
		Mont_B_10 = "Mont_B_10",
		Mont_M_10 = "Mont_M_10",
		Mont_M_14 = "Mont_M_14",
		Mont_M_36 = "Mont_M_36",
	}

	export type TFont = Record<keyof typeof EFont, CSSObject>;

	/**
	 * Выбор цвета
	 */
	export type TColorChoice = EColor | undefined | "null" | false;

	/**
	 * Основной стилевой объект
	 */
	export type TObj = {
		color: TColor;
		font: TFont;
	};

	/**
	 * Домен и сервис
	 */
	export interface IModules {
		domain: StylesDomain;
		service: StylesService;
	}
}
