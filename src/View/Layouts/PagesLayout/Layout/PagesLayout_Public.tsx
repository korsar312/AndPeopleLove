import { Suspense } from "react";
import styles from "./PagesLayout_Public.styles";
import { NFC } from "Logic/Libs/Util/TypesUtils";
import PagesLayoutModel from "../PagesLayout.model";

const PagesLayout_Public: NFC<typeof PagesLayoutModel> = (props) => {
	const { Pages } = props;

	return (
		<div css={styles.pages}>
			<Suspense>{Pages}</Suspense>
		</div>
	);
};

export default PagesLayout_Public;
