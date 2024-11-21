import { LanguageDomain } from "./Domain/Language.domain";
import { LanguageService } from "./Service/Language.service";
import Creators from "../../../Helpers/Creators/Creators";

const Modules = () =>
	Creators.createModule("LanguageModule", {
		domain: new LanguageDomain(),
		service: new LanguageService(),
	});

export default Modules();
