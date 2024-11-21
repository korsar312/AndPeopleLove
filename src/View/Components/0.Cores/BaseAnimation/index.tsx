import { FC, ReactNode } from "react";
import BaseAnimation_Public from "./Layout/BaseAnimation_Public";
import BaseAnimationModel from "./BaseAnimation.model";
import { observer } from "mobx-react";
import { TDeepCSSObject } from "../../../ViewUtils";
import { AnimatePresenceProps } from "framer-motion";

export interface IComponent extends Pick<AnimatePresenceProps, "mode"> {
	children: ReactNode;
	type?: TBaseAnimationType;
	deps?: any;
	extStyle?: TDeepCSSObject;
}

export type TBaseAnimationType = "slice";

const Index: FC<IComponent> = (props) => {
	const model = BaseAnimationModel(props);
	return <BaseAnimation_Public {...model} />;
};

export default observer(Index);
