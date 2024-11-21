import { IComponent } from "./index";
import { ComponentProps } from "react";
import { motion } from "framer-motion";

function BaseAnimationModel(props: IComponent) {
	const { deps, children, type, extStyle, mode } = props;

	const stylesType = (function (): ComponentProps<typeof motion.div> {
		switch (type) {
			case "slice": {
				return {
					initial: { opacity: 0, position: "absolute" },
					exit: { opacity: 0, position: "absolute" },
					animate: { opacity: 1, position: "absolute" },
					transition: { duration: 0.25 },
				};
			}

			default:
				return {
					initial: { opacity: 0, position: "absolute" },
					exit: { opacity: 0, position: "absolute" },
					animate: { opacity: 1, position: "absolute" },
					transition: { duration: 0.25 },
				};
		}
	})();

	return { deps, children, stylesType, extStyle, mode };
}

export default BaseAnimationModel;
