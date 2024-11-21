import styles from "./HomePage_Public.styles";
import { NFC } from "Logic/Libs/Util/TypesUtils";
import HomePageModel from "../HomePage.model";
import ExampleTemplates from "View/Components/4.Templates/ExampleTemplates";

const HomePage_Public: NFC<typeof HomePageModel> = (props) => {
	const { handleClick } = props;

	return (
		<div css={styles.wrapper} onClick={handleClick}>
			<ExampleTemplates />
			<ExampleTemplates />
			<ExampleTemplates />
			<ExampleTemplates />
		</div>
	);
};

export default HomePage_Public;
