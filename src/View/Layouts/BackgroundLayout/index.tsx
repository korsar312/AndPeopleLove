import { FC } from "react";
import BackgroundLayout_Public from "./Layout/BackgroundLayout_Public";
import BackgroundLayoutModel from "./BackgroundLayout.model";
import { observer } from "mobx-react";

export interface IComponent {}

const Index: FC<IComponent> = (props) => {
	const model = BackgroundLayoutModel(props);
	return <BackgroundLayout_Public {...model} />;
};

export default observer(Index);
