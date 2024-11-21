import styles from "./BackgroundLayout_Public.styles";
import { NFC } from "Logic/Libs/Util/TypesUtils";
import BackgroundLayoutModel from "../BackgroundLayout.model";

const BackgroundLayout_Public: NFC<typeof BackgroundLayoutModel> = (props) => {
	const {} = props;

	return <div css={styles.background} />;
};

export default BackgroundLayout_Public;
