import { FC } from "react";
import DevTools_Public from "./Layout/DevTools_Public";
import DevToolsModel from "./DevTools.model";

export interface IComponent {}

const Index: FC<IComponent> = (props) => {
	const model = DevToolsModel(props);
	return <DevTools_Public {...model} />;
};

export default Index;
