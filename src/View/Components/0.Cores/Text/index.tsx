import { FC, ReactNode } from "react";
import TextPublic from "./Layout/Text_Public";
import { LanguageInterface } from "Logic/Core/Modules/Language/Language.interface";
import TextModel from "./Text.model";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";
import { TDeepCSSObject } from "View/ViewUtils";

/**
 *
 */
export interface IComponent {
	text: LanguageInterface.TAllWord;
	font: StylesInterface.EFont;
	caseWord?: LanguageInterface.TTextCaseWord;
	color?: StylesInterface.TColorChoice;
	opacity?: number;
	extStyle?: TDeepCSSObject;
	postfix?: ReactNode;
	prefix?: ReactNode;
	dontTranslate?: boolean;
	dontTransfer?: boolean;
	addContent?: LanguageInterface.TAdding[];
	isHidden?: boolean;
}

/**
 * Основной компонент для текста
 */
const Index: FC<IComponent> = (props) => {
	const model = TextModel(props);
	return <TextPublic {...model} />;
};

export default Index;
