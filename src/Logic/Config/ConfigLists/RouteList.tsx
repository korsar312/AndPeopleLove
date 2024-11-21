import { RouteInterfaces } from "Logic/Core/Modules/Routes/Route.interfaces";
import { RouteObject } from "react-router-dom";
import { lazy } from "react";

const RouteLayout = lazy(() => import("View/Layouts/RouteLayout"));
const HomePage = lazy(() => import("View/Pages/HomePage"));

const { PathName } = RouteInterfaces;

export const MailList: RouteObject[] = [
	{
		path: PathName.HOME_PAGE,
		element: <HomePage />,
	},
];

export const RouteList: RouteObject[] = [
	{
		path: "/*",
		element: <RouteLayout />,
		children: MailList,
	},
];
