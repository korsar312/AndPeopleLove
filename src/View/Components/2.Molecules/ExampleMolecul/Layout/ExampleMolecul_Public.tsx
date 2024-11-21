import styles from "./ExampleMolecul_Public.styles";
import ExampleMoleculModel from "../ExampleMolecul.model";
import { NFC } from "Logic/Libs/Util/TypesUtils";
import ExampleAtom from "View/Components/1.Atoms/ExampleAtom";
import { LanguageInterface } from "Logic/Core/Modules/Language/Language.interface";

const ExampleMolecul_Public: NFC<typeof ExampleMoleculModel> = (props) => {
	const { handleClick } = props;

	return (
		<div css={styles.wrapper} onClick={handleClick}>
			<ExampleAtom text={LanguageInterface.EWord.ERROR} />
		</div>
	);
};

export default ExampleMolecul_Public;
