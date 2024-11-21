import { Styles } from "Styles/Styles";
import { CSSObject } from "@emotion/react";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";

class ExampleAtom_PublicStyles extends Styles {
	public wrapper: CSSObject = {
		display: "flex",
		background: this.getColors(StylesInterface.EColor.RED_1),
		height: 101,
		width: 101,
	};
}

export default new ExampleAtom_PublicStyles();
