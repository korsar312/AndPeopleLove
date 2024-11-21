import {StylesInterface} from "../../../../Styles.interface";

export class CreateStyleObj {
	static execute() {
		/**
		 * Создает стилевой объект
		 */
		return function (color: StylesInterface.TColor, font: StylesInterface.TFont): StylesInterface.TObj {
			return { color, font };
		};
	}
}
