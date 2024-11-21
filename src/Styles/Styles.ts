import UseCases from "Logic/Core/UseCases/UseCases";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";
import Mixins from "./Mixins/Mixins";
import Variables from "./Variables/Variables";
import StyleP from "./StyleP/StyleP";

export class Styles {
	public pub = StyleP;

	protected mixins = Mixins;
	protected variables = Variables;

	protected getColors(color?: StylesInterface.TColorChoice, opacity?: number) {
		return UseCases.interactor("style", "getColor", color, opacity);
	}

	protected getFonts(font: StylesInterface.EFont) {
		return UseCases.interactor("style", "getFont", font);
	}
}

export default Styles;
