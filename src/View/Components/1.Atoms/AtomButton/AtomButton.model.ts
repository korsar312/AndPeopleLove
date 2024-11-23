import { IComponent } from "./index";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";

function AtomButtonModel(props: IComponent) {
	const { options, textVars, color } = props;

	const textChanged = textVars.map((el) => {
		return { ...el, color: el.color || getColorText() };
	});

	function getColorText(): StylesInterface.EColor {
		switch (color) {
			case StylesInterface.EColor.BLACK_1:
				return StylesInterface.EColor.WHITE_1;
			default:
				return StylesInterface.EColor.BLACK_1;
		}
	}

	return { options, textChanged, color };
}

export default AtomButtonModel;
