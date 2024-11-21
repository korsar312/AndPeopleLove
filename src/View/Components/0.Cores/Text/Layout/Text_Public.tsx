import styles from "./Text_Public.styles";
import { observer } from "mobx-react";
import { NFC } from "Logic/Libs/Util/TypesUtils";
import TextModel from "../Text.model";
import Util from "Logic/Libs/Util";

const Text: NFC<typeof TextModel> = (props) => {
	const { textFind, color, extStyle, font, opacity, postfix, prefix, isHidden } = props;

	return (
		<span css={[styles.wrapper, styles.font(font), styles.color(color, isHidden ? 0 : opacity), ...Util.getArray(extStyle)]}>
			{prefix}
			{textFind}
			{postfix}
		</span>
	);
};

export default observer(Text);
