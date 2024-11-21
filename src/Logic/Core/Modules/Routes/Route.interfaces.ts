import { NavigateFunction, Params } from "react-router-dom";
import { RoutesDomain } from "./Implement/Domain/Routes.domain";
import { RoutesService } from "./Implement/Service/Routes.service";

export namespace RouteInterfaces {
	export type EPathName = keyof typeof PathName;

	/**
	 * Имя пути и путь роута
	 */
	export const PathName = {
		HOME_PAGE: ``,
		TEST_PAGE: `test`,
		ERROR_PAGE: `*`,
	} as const;

	/**
	 * Основной навигационный объект
	 */
	export type TObj = {
		navigateFunc: NavigateFunction | null;
	};

	export type THistory = {
		pathName: EPathName;
		params: Params;
	};

	/**
	 * Домен и сервис
	 */
	export interface IModules {
		domain: RoutesDomain;
		service: RoutesService;
	}
}
