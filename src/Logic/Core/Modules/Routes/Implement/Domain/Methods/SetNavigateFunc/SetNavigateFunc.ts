import { RouteInterfaces } from "../../../../Route.interfaces";
import { NavigateFunction } from "react-router-dom";

export class SetNavigateFunc {
	static execute() {
		/**
		 * Устанавливает функцию навигации
		 * @param navigateObj - навигационный объект
		 * @param navigate - устанавлимая функция
		 */
		return function (navigateObj: RouteInterfaces.TObj, navigate: NavigateFunction): RouteInterfaces.TObj {
			return { ...navigateObj, navigateFunc: navigate };
		};
	}
}
