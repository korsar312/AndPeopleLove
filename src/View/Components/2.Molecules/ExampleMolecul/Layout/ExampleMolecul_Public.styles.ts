import { Styles } from "Styles/Styles";
import { CSSObject } from "@emotion/react";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";

class ExampleMolecul_PublicStyles extends Styles {
	public wrapper: CSSObject = {
		...this.mixins.flexCenter,
		background: this.getColors(StylesInterface.EColor.GREEN_1),
	};
}

export default new ExampleMolecul_PublicStyles();
