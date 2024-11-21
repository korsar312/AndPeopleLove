import { AppStatusDomain } from "./Domain/AppStatus.domain";
import { AppStatusService } from "./Service/AppStatus.service";
import Creators from "../../../Helpers/Creators/Creators";

const Modules = () =>
	Creators.createModule("AppStatusModule", {
		domain: new AppStatusDomain(),
		service: new AppStatusService(),
	});

export default Modules();
