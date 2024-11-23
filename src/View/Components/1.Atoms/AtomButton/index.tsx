import { FC } from "react";
import AtomButtonModel from "./AtomButton.model";
import AtomButton_Public from "./Layout/AtomButton_Public";
import { ButtonOwnProps } from "@mui/material/Button/Button";
import { IComponent as IText } from "View/Components/0.Cores/Text";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";

export interface IComponent {
	options?: Pick<ButtonOwnProps, "variant">;
	textVars: IText[];
	color?: StylesInterface.EColor;
	isDisable?: boolean;
}

const Index: FC<IComponent> = (props) => {
	const model = AtomButtonModel(props);
	return <AtomButton_Public {...model} />;
};

export default Index;
