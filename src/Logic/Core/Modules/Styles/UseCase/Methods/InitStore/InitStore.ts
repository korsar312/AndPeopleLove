import { StylesInterface } from "../../../Styles.interface";

export class InitStore {
	static execute(module: StylesInterface.IModules) {
		return function (): void {
			const colorList = module.service.getColorList();
			const fontList = module.service.getFontList();

			const styleObj = module.service.createStyleObj(colorList, fontList);

			module.service.store.setStore(styleObj);
		};
	}
}
