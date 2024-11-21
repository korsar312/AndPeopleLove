export namespace WebsocketInterface {
	export type EName = typeof Name;

	const NameWs = {
		LOGIN: "Login",
		RENEW_TOKEN: "RenewToken",
		LOGOFF: "LogOff",
	};

	enum NameWsEmulate {
		EMULATE_EXAMPLE = "EMULATE_EXAMPLE",
	}

	export const Name = { ...NameWs, ...NameWsEmulate };

	export type TRPC<T> = {
		ActionResult?: EResponseWsResult;
		AnswerTime: string;
		id: string | "internal";
		method?: EMethodNameInternal;
		result: T;
	};

	export type TResponseWs<T> = {
		ActionResult: EResponseWsResult;
		Info: T;
	};

	export enum EResponseWsResult {
		ERROR = "ERROR",
		OK = "OK",
	}

	export type TMethodEmitterFn = (el: any) => void;
	export type TMethodEmitter = Record<EMethodNameInternal, Array<TMethodEmitterFn>>;

	/**
	 * Имена методов без прямых вызовов
	 */
	export enum EMethodNameInternal {
		ExampleInternal = "ExampleInternal",
	}

	export type TWSRequest = {
		[key in keyof EName]: (...args: any[]) => Promise<any>;
	};
}
