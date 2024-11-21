import { StylesInterface } from "../../../../Styles.interface";

export class GetColor {
	static execute() {
		return function (colorObj: StylesInterface.TObj, color: StylesInterface.EColor): StylesInterface.TColorHEXFormat {
			return colorObj.color[color];
		};
	}
}
