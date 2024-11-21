import { IComponent } from "./index";
import { SyntheticEvent, useEffect, useState } from "react";
import IconError from "Assets/Images/error.svg";
import { GlobalVar } from "Logic/Config/GlobalVar";
import getImage from "./ImageList/ImageList";

function ImagesModel(props: IComponent) {
	const { img, color, extStyle, imageError, isDisable, noCatch } = props;

	useEffect(() => {
		setIsShow(true);
	}, [img]);

	const [isShow, setIsShow] = useState(true);

	const imageIcon = img && getImage(img);

	function handleErrorImage(e: SyntheticEvent<HTMLImageElement, Event>) {
		if (noCatch) setIsShow(false);

		const target = e.target as HTMLImageElement;
		target.onerror = null;
		target.src = imageError ? GlobalVar.IMAGE_URL + imageError : IconError;
	}

	return { imageIcon, img, color, extStyle, handleErrorImage, isDisable, isShow };
}

export default ImagesModel;
