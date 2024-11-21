import { LanguageInterface } from "../../../Language.interface";

export class SetCurrentLanguage {
	static execute(module: LanguageInterface.IModules) {
		return function (languageType: LanguageInterface.ELanguageType) {
			const storeLanguage = module.service.store.getStore();
			const newStore = module.domain.setCurrentLanguage(storeLanguage, languageType);

			module.service.store.setStore(newStore);
		};
	}
}
