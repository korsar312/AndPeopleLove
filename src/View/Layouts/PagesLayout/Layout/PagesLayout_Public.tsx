import { Suspense } from "react";
import styles from "./PagesLayout_Public.styles";
import { NFC } from "Logic/Libs/Util/TypesUtils";
import PagesLayoutModel from "../PagesLayout.model";
import BaseAnimation from "View/Components/0.Cores/BaseAnimation";

const PagesLayout_Public: NFC<typeof PagesLayoutModel> = (props) => {
	const { Pages, location } = props;

	return (
		<Suspense>
			<BaseAnimation type={"slice"} deps={location.pathname} extStyle={styles.pages}>
				{Pages}
			</BaseAnimation>
		</Suspense>
	);
};

export default PagesLayout_Public;
