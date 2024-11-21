import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { RouteActivator } from "./RouteActivator";

const Index = () => {
	return (
		<Fragment>
			<RouteActivator />
			<Outlet />
		</Fragment>
	);
};

export default Index;
