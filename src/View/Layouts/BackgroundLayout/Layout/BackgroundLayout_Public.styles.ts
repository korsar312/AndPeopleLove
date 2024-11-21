import { CSSObject } from "@emotion/react";
import { Styles } from "Styles/Styles";

class BackgroundLayout_PublicStyles extends Styles {
	public background: CSSObject = {
		...this.mixins.absolute,
	};
}

export default new BackgroundLayout_PublicStyles();
