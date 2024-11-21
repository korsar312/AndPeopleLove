import { RouteInterfaces } from "../../../../Route.interfaces";
import { generatePath, NavigateFunction, Params } from "react-router-dom";

export class RouterGo {
	static execute() {
		/**
		 * Программный переход на страницы
		 * @params navigate - функция навигации
		 * @params path - имя роута
		 * @params params - параметры, что передаются в URL
		 * @params state - параметры, что не передаются в URL
		 */
		return function (
			navigate: NavigateFunction | null,
			path: RouteInterfaces.EPathName,
			params?: Params,
			state?: Record<string, any>,
		): void {
			if (!navigate) return;

			navigate(generatePath(String(RouteInterfaces.PathName[path]), params), { replace: false, state });
		};
	}
}
