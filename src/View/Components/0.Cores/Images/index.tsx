import { FC } from "react";
import ImagesModel from "./Images.model";
import { TDeepCSSObject } from "View/ViewUtils";
import SVGWrapperPublic from "./Layout/Images_Public";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";
import { EImages } from "./ImageList/ImageList";

export interface IComponent {
	extStyle?: TDeepCSSObject;
	img: TImageComponent;
	color?: StylesInterface.TColorChoice;
	imageError?: string;
	isDisable?: boolean;
	noCatch?: boolean;
}

export type TImageComponent = EImages | string | undefined;

/**
 * Обертка для SVG изображений
 */
const Index: FC<IComponent> = (props) => {
	const model = ImagesModel(props);
	return <SVGWrapperPublic {...model} />;
};

export default Index;
