import { FC } from "react";
import TestPageModel from "./TestPage.model";
import { observer } from "mobx-react";
import TestPage_Public from "./Layout/TestPage_Public";

export interface IComponent {}

const Index: FC<IComponent> = (props) => {
	const model = TestPageModel(props);
	return <TestPage_Public {...model} />;
};

export default observer(Index);
