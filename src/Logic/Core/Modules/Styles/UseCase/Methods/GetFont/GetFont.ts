import { StylesInterface } from "../../../Styles.interface";
import { CSSObject } from "@emotion/react";

export class GetFont {
	static execute(module: StylesInterface.IModules) {
		return function (font: StylesInterface.EFont): CSSObject {
			const store = module.service.store.getStore();

			return module.domain.getFont(store, font);
		};
	}
}
