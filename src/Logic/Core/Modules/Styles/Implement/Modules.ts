import { StylesDomain } from "./Domain/Styles.domain";
import { StylesService } from "./Service/Styles.service";
import Creators from "Logic/Core/Helpers/Creators/Creators";

const Modules = () =>
	Creators.createModule("StyleModule", {
		domain: new StylesDomain(),
		service: new StylesService(),
	});

export default Modules();
