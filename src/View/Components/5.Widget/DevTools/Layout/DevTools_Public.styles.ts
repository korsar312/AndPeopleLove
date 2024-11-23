import { Styles } from "Styles/Styles";
import { CSSObject } from "@emotion/react";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";

class DevTools_PublicStyles extends Styles {
	public body: CSSObject = {
		...this.mixins.absolute,
		background: this.getColors(StylesInterface.EColor.WHITE_1),
		width: 1000,
		height: 1100,
		zIndex: 1000000,
		opacity: 0.8,
		gap: 20,
	};

	public menu: CSSObject = {
		...this.mixins.flexCenter,
		gap: 20,
		padding: 20,
	};

	public scroll: CSSObject = {
		display: "flex",
		justifyContent: "center",
		flexDirection: "column",
		height: 700,
		gap: 30,
	};

	public pages: CSSObject = {
		display: "flex",
		flexDirection: "column",
		height: "100%",
		gap: 20,
	};

	public btnList: CSSObject = {
		...this.mixins.flexCenter,
		flexWrap: "wrap",
		gap: 10,
	};
}

export default new DevTools_PublicStyles();
