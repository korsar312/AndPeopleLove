import { IComponent } from "./index";
import UseCases from "Logic/Core/UseCases/UseCases";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";

function TextModel(props: IComponent) {
	const {
		text,
		color = StylesInterface.EColor.WHITE_1,
		caseWord,
		extStyle,
		postfix = "",
		prefix = "",
		dontTranslate,
		font,
		opacity,
		addContent,
		isHidden,
		dontTransfer,
	} = props;

	const textFind = UseCases.interactor("language", "getText", text, {
		caseWord,
		dontTranslate,
		dontTransfer,
		add: addContent,
	});

	return { textFind, color, extStyle, font, opacity, postfix, prefix, isHidden };
}

export default TextModel;
