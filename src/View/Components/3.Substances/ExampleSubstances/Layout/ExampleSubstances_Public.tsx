import styles from "./ExampleSubstances_Public.styles";
import ExampleSubstancesModel from "../ExampleSubstances.model";
import { NFC } from "Logic/Libs/Util/TypesUtils";
import ExampleMolecul from "View/Components/2.Molecules/ExampleMolecul";

const ExampleSubstances_Public: NFC<typeof ExampleSubstancesModel> = (props) => {
	const { onClickOne, onClickTwo } = props;

	return (
		<div css={styles.wrapper}>
			<ExampleMolecul onClick={onClickOne} />
			<ExampleMolecul onClick={onClickTwo} />
		</div>
	);
};

export default ExampleSubstances_Public;
