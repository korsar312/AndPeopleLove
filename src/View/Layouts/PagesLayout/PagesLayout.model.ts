import { IComponent } from "./index";
import { RouteObject, useLocation, useRoutes } from "react-router-dom";
import { RouteList } from "Logic/Config/ConfigLists/RouteList";
import { useEffect, useState } from "react";
import UseCases from "Logic/Core/UseCases/UseCases";

function PagesLayoutModel(props: IComponent) {
	const {} = props;

	const isInitDone = UseCases.interactor("appStatus", "isInitDone");
	const [page, setPage] = useState<RouteObject[]>([]);
	const Pages = useRoutes(page);
	const location = useLocation();

	useEffect(() => {
		if (isInitDone) setPage(RouteList);
	}, [isInitDone]);

	return { Pages, location };
}

export default PagesLayoutModel;
