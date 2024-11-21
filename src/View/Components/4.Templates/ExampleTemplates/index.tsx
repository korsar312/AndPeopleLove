import { FC } from "react";
import { default as ExampleSubstances, IComponent as IExampleSubstances } from "../../3.Substances/ExampleSubstances";

export interface IComponent {}

const Index: FC<IComponent> = (props) => {
	const {} = props;

	const propsComponent: IExampleSubstances = {
		onClickOne: () => alert(1),
		onClickTwo: () => alert(2),
	};

	return <ExampleSubstances {...propsComponent} />;
};

export default Index;
