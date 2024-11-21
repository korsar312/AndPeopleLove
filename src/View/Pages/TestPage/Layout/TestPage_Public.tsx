import styles from "./TestPage_Public.styles";
import { NFC } from "Logic/Libs/Util/TypesUtils";
import TestPageModel from "../TestPage.model";
import ExampleTemplates from "View/Components/4.Templates/ExampleTemplates";

const TestPage_Public: NFC<typeof TestPageModel> = (props) => {
	const { handleClick } = props;

	return (
		<div css={styles.wrapper} onClick={handleClick}>
			<ExampleTemplates />
			<ExampleTemplates />
		</div>
	);
};

export default TestPage_Public;
