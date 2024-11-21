import { StylesInterface } from "../../../../Styles.interface";
import { ColorList } from "Logic/Config/ConfigLists/ColorList";

export class GetColorList {
	static execute() {
		/**
		 * Возвращает список цветов
		 */
		return function (): StylesInterface.TColor {
			return ColorList;
		};
	}
}
