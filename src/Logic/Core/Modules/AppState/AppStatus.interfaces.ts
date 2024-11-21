import { AppStatusDomain } from "./Implement/Domain/AppStatus.domain";
import { AppStatusService } from "./Implement/Service/AppStatus.service";
import { LanguageInterface } from "../Language/Language.interface";

export namespace AppStatusInterfaces {
	/**
	 * Основной объект настроек
	 */
	export type TObj = {
		isAwaitRequest: boolean;
		websocketIsDisabled: boolean;
		isDone: boolean;
		modalError: TErrorData | null;
		updating: TStatusUpdate[];
	};

	export type TErrorData = {
		name: EErrorModalList;
		data?: unknown;
	};

	export enum EErrorModalList {
		errorAny = "errorAny",
	}

	export type TStatusUpdate = {
		id: string;
		title: LanguageInterface.TAllWord;
	};

	/**
	 * Домен и сервис
	 */
	export interface IModules {
		domain: AppStatusDomain;
		service: AppStatusService;
	}
}
