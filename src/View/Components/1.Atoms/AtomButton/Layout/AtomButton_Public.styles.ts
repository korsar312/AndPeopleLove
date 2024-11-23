import { Styles } from "Styles/Styles";
import { CSSObject } from "@emotion/react";
import { StylesInterface } from "../../../../../Logic/Core/Modules/Styles/Styles.interface";

class AtomButton_PublicStyles extends Styles {
	public wrapper: CSSObject = {};

	public color(color?: StylesInterface.EColor): CSSObject {
		return {
			background: this.getColors(color),
		};
	}
}

export default new AtomButton_PublicStyles();
