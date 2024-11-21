import { LanguageInterface } from "../../../Language.interface";

export class GetText {
	static execute(module: LanguageInterface.IModules) {
		return function (
			wordKey: LanguageInterface.TAllWord,
			options?: {
				caseWord?: LanguageInterface.TTextCaseWord;
				dontTranslate?: boolean;
				dontTransfer?: boolean;
				add?: LanguageInterface.TAdding[];
			},
		) {
			const dict = module.service.getDictionary();
			const transfer = module.service.getTransfer();
			const modifer = module.service.getModifer();
			const storeLanguage = module.service.store.getStore();
			const curLang = module.domain.getCurrentLanguage(storeLanguage);

			const addon: LanguageInterface.TAddon = {
				modify: modifer,
				trans: options?.dontTransfer ? undefined : transfer,
			};

			return module.domain.getText(
				dict,
				wordKey,
				curLang,
				options?.dontTranslate,
				options?.caseWord,
				addon,
				options?.add,
			) as LanguageInterface.TAllWord;
		};
	}
}
