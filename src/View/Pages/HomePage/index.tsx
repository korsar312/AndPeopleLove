import { FC } from "react";
import HomePageModel from "./HomePage.model";
import { observer } from "mobx-react";
import HomePage_Public from "./Layout/HomePage_Public";

export interface IComponent {}

const Index: FC<IComponent> = (props) => {
	const model = HomePageModel(props);
	return <HomePage_Public {...model} />;
};

export default observer(Index);
