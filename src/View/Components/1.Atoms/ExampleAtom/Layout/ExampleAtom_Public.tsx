import styles from "./ExampleAtom_Public.styles";
import ExampleAtomModel from "../ExampleAtom.model";
import { NFC } from "Logic/Libs/Util/TypesUtils";
import Text from "View/Components/0.Cores/Text";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";

const ExampleAtom_Public: NFC<typeof ExampleAtomModel> = (props) => {
	const { changedText } = props;

	return (
		<div css={styles.wrapper}>
			<Text text={changedText} font={StylesInterface.EFont.Mont_M_36} />
		</div>
	);
};

export default ExampleAtom_Public;
