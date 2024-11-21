import { IComponent } from "./index";

function ExampleSubstancesModel(props: IComponent) {
	const { onClickOne, onClickTwo } = props;

	return { onClickOne, onClickTwo };
}

export default ExampleSubstancesModel;
