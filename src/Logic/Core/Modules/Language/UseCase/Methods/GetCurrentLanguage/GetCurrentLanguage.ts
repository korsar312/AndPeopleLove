import { LanguageInterface } from "../../../Language.interface";

export class GetCurrentLanguage {
	static execute(module: LanguageInterface.IModules) {
		return function (): LanguageInterface.ELanguageType {
			const storeLanguage = module.service.store.getStore();

			return module.domain.getCurrentLanguage(storeLanguage);
		};
	}
}
