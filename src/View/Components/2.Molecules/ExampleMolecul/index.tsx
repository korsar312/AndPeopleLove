import { FC } from "react";
import ExampleMoleculModel from "./ExampleMolecul.model";
import ExampleMolecul_Public from "./Layout/ExampleMolecul_Public";

export interface IComponent {
	onClick?: () => void;
}

const Index: FC<IComponent> = (props) => {
	const model = ExampleMoleculModel(props);
	return <ExampleMolecul_Public {...model} />;
};

export default Index;
