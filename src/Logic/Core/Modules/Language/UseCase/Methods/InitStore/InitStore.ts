import { LanguageInterface } from "../../../Language.interface";

export class InitStore {
	static execute(module: LanguageInterface.IModules) {
		return function (): void {
			const userLang = module.service.getUserLanguage();
			const langArr = module.service.transformLangToArr();
			const sysLang = module.domain.checkUserLanguage(userLang, langArr);
			const languageObj = module.service.createLanguageObj(sysLang);

			module.service.store.setStore(languageObj);
		};
	}
}
