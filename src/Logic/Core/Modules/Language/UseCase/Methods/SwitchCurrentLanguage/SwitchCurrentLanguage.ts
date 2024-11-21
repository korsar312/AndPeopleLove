import { LanguageInterface } from "../../../Language.interface";

export class SwitchCurrentLanguage {
	static execute(module: LanguageInterface.IModules) {
		return function () {
			const store = module.service.store.getStore();
			const currentLanguage = module.domain.getCurrentLanguage(store);
			const newStore = module.domain.switchCurrentLanguage(store, currentLanguage);

			module.service.store.setStore(newStore);
		};
	}
}
