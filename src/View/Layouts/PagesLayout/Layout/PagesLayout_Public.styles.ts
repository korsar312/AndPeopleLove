import { Styles } from "Styles/Styles";
import { CSSObject } from "@emotion/react/dist/emotion-react.cjs";

class PagesLayout_PublicStyles extends Styles {
	public pages: CSSObject = {
		position: "relative",
		height: `100vh`,
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
	};
}

export default new PagesLayout_PublicStyles();
