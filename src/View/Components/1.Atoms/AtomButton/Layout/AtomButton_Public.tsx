import styles from "./AtomButton_Public.styles";
import AtomButtonModel from "../AtomButton.model";
import { NFC } from "Logic/Libs/Util/TypesUtils";
import { Button } from "@mui/material";
import Text from "../../../0.Cores/Text";

const AtomButton_Public: NFC<typeof AtomButtonModel> = (props) => {
	const { options, textChanged, color } = props;

	return (
		<Button {...options} css={[styles.wrapper, styles.color(color)]}>
			{textChanged.map((el) => (
				<Text {...el} />
			))}
		</Button>
	);
};

export default AtomButton_Public;
