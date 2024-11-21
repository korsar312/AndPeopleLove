import { StylesInterface } from "../../../../Styles.interface";

export class Hex2rgba {
	static execute() {
		/**
		 * Преобразование HEX формата в RGBa
		 * @param hex - формат цвета HEX
		 * @param opacity - прозрачность
		 */
		return function (hex: StylesInterface.TColorHEXFormat, opacity: number): StylesInterface.TColorRGBFormat {
			const RGB = hex.match(/\w\w/g)?.map((x) => parseInt(x, 16));
			return `rgba(${RGB},${opacity})`;
		};
	}
}
