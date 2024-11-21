/**
 * Возвращает значение в зависимости от типа
 */
export class Polymorph {
	static execute() {
		return function (value: unknown, bind: unknown, ...args: unknown[]) {
			switch (typeof value) {
				case "function":
					return value.call(bind, ...args);

				default:
					return value;
			}
		};
	}
}
