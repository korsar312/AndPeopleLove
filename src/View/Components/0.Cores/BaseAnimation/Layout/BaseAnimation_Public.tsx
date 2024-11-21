import BaseAnimationModel from "../BaseAnimation.model";
import { NFC } from "Logic/Libs/Util/TypesUtils";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./BaseAnimation_Public.styles";

const BaseAnimation_Public: NFC<typeof BaseAnimationModel> = (props) => {
	const { deps, children, stylesType, extStyle, mode } = props;

	return (
		<AnimatePresence mode={mode}>
			<motion.div key={deps} css={[styles.wrapper, extStyle]} {...stylesType}>
				{children}
			</motion.div>
		</AnimatePresence>
	);
};

export default BaseAnimation_Public;
