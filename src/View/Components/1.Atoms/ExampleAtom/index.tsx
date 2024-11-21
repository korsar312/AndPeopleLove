import { FC } from "react";
import ExampleAtomModel from "./ExampleAtom.model";
import ExampleAtom_Public from "./Layout/ExampleAtom_Public";
import { LanguageInterface } from "Logic/Core/Modules/Language/Language.interface";

export interface IComponent {
	text: LanguageInterface.EWord;
}

const Index: FC<IComponent> = (props) => {
	const model = ExampleAtomModel(props);
	return <ExampleAtom_Public {...model} />;
};

export default Index;
