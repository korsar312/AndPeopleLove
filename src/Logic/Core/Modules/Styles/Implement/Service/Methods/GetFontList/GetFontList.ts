import { StylesInterface } from "../../../../Styles.interface";
import { FontList } from "Logic/Config/ConfigLists/FontList";

export class GetFontList {
	static execute() {
		/**
		 * Возвращает список цветов
		 */
		return function (): StylesInterface.TFont {
			return FontList;
		};
	}
}
