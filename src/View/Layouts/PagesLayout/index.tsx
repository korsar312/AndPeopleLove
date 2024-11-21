import { FC } from "react";
import PagesLayoutModel from "./PagesLayout.model";
import PagesLayout_Public from "./Layout/PagesLayout_Public";
import { observer } from "mobx-react";

export interface IComponent {}

const Index: FC<IComponent> = (props) => {
	const model = PagesLayoutModel(props);
	return <PagesLayout_Public {...model} />;
};

export default observer(Index);
