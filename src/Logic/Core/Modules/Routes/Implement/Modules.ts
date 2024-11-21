import { RoutesDomain } from "./Domain/Routes.domain";
import { RoutesService } from "./Service/Routes.service";
import Creators from "Logic/Core/Helpers/Creators/Creators";

const Modules = () =>
	Creators.createModule("RouterModule", {
		domain: new RoutesDomain(),
		service: new RoutesService(),
	});

export default Modules();
