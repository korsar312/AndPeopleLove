import { RouteInterfaces } from "../../../../Route.interfaces";
import { NavigateFunction } from "react-router-dom";

export class GetNavigateFunc {
	static execute() {
		/**
		 * Возвращает функцию навигации
		 * @param navigateObj - навигационный объект
		 */
		return function (navigateObj: RouteInterfaces.TObj): NavigateFunction | null {
			return navigateObj.navigateFunc;
		};
	}
}
