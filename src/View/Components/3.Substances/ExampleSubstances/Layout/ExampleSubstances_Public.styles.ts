import { Styles } from "Styles/Styles";
import { CSSObject } from "@emotion/react";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";

class ExampleSubstances_PublicStyles extends Styles {
	public wrapper: CSSObject = {
		...this.mixins.flexCenter,
		flexDirection: "column",
		padding: 10,
		background: this.getColors(StylesInterface.EColor.GREEN_1),
	};
}

export default new ExampleSubstances_PublicStyles();
