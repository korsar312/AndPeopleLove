import { CSSObject } from "@emotion/react";
import { Styles } from "Styles/Styles";

class BackgroundLayout_PublicStyles extends Styles {
	public background(path: string): CSSObject {
		return {
			...this.mixins.absolute,
			background: `url(${path})`,
			backgroundSize: "cover",
			backgroundPosition: "center",
		};
	}
}

export default new BackgroundLayout_PublicStyles();
