import { StylesInterface } from "../../../../Styles.interface";
import { CSSObject } from "@emotion/react";

export class GetFont {
	static execute() {
		return function (styleObj: StylesInterface.TObj, font: StylesInterface.EFont): CSSObject {
			return styleObj.font[font];
		};
	}
}
