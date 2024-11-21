import { UserDomain } from "./Domain/User.domain";
import { UserService } from "./Service/User.service";
import Creators from "../../../Helpers/Creators/Creators";

const Modules = () =>
	Creators.createModule("UserModule", {
		domain: new UserDomain(),
		service: new UserService(),
	});

export default Modules();
