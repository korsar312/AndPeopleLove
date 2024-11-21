import { FC } from "react";

export type NFC<T extends (...args: any[]) => any> = FC<ReturnType<T>>;

export namespace typesUtils {
	export type TDeepTypeObject<T> = typesUtils.RecursiveArray<T | undefined | false> | T;

	/**
	 * Тип для неограниченного по вложенности массива
	 */
	export type RecursiveArray<type> = {
		[index: number]: RecursiveArray<type> | type;
		length: number;
	};
}
