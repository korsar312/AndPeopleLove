import { IComponent } from "./index";
import UseCases from "Logic/Core/UseCases/UseCases";
import { useState } from "react";
import { LanguageInterface } from "Logic/Core/Modules/Language/Language.interface";
import { RouteInterfaces } from "Logic/Core/Modules/Routes/Route.interfaces";

export type TDevToolsContent = LanguageInterface.EWord.BUTTON | LanguageInterface.EWord.PAGES;

function DevToolsModel(props: IComponent) {
	const {} = props;

	const [chosenContent, setChosenContent] = useState<TDevToolsContent>(LanguageInterface.EWord.BUTTON);

	const PathName = Object.keys(RouteInterfaces.PathName) as RouteInterfaces.EPathName[];

	const controlFn = {
		switchTheme,
		goLink,
		switchLang,
	};

	function switchLang() {
		UseCases.interactor("language", "switchCurrentLanguage");
	}

	function goLink(link: RouteInterfaces.EPathName) {
		UseCases.interactor("router", "goLink", link);
	}

	function switchTheme() {}

	return {
		setChosenContent,
		chosenContent,
		controlFn,
		PathName,
	};
}

export default DevToolsModel;
