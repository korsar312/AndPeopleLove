import UseCases from "../../../Core/UseCases/UseCases";
import { LanguageInterface } from "../../../Core/Modules/Language/Language.interface";
import { useRef } from "react";

/**
 * Хук прелоадера
 *
 * isUpdating - Есть ли прелоадер на экране
 * enabledUpdating - Добавидь прелоадер
 * disabledUpdating - Убрать прелоадер
 */
export const useUpdating = () => {
	const id = useRef<string | null>(null);

	const isUpdating = Boolean(UseCases.interactor("appStatus", "getStatusUpdating").length);

	function enabledUpdating(text?: LanguageInterface.EWord) {
		if (id.current === null) {
			id.current = UseCases.interactor("appStatus", "addStatusUpdating", text);
		}
	}

	function disabledUpdating() {
		if (id.current !== null) {
			UseCases.interactor("appStatus", "removeStatusUpdating", id.current);
			id.current = null;
		}
	}

	return { isUpdating, enabledUpdating, disabledUpdating };
};
