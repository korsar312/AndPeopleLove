import { Styles } from "Styles/Styles";
import { CSSObject } from "@emotion/react";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";

class Text_PublicStyles extends Styles {
	public wrapper: CSSObject = {
		textAlign: "center",
		transition: this.variables.transition,
		whiteSpace: "pre-line",
	};

	public color(color?: StylesInterface.TColorChoice, opacity?: number) {
		return {
			color: this.getColors(color, opacity),
		};
	}

	public font(font: StylesInterface.EFont) {
		return { ...this.getFonts(font) };
	}
}

export default new Text_PublicStyles();
