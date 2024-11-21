import { Styles } from "Styles/Styles";
import { CSSObject } from "@emotion/react";

class BaseAnimation_PublicStyles extends Styles {
	public wrapper: CSSObject = {
		width: "100%",
		height: "100%",
	};
}

export default new BaseAnimation_PublicStyles();
