import { FC } from "react";
import ExampleSubstancesModel from "./ExampleSubstances.model";
import ExampleSubstances_Public from "./Layout/ExampleSubstances_Public";

export interface IComponent {
	onClickOne?: () => void;
	onClickTwo?: () => void;
}

const Index: FC<IComponent> = (props) => {
	const model = ExampleSubstancesModel(props);
	return <ExampleSubstances_Public {...model} />;
};

export default Index;
