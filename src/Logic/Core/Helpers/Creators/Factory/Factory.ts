import {registerModules, TFactoryCreators} from "./Factory.enam";

type TFac = TFactoryCreators;
type KTFac = keyof TFac;

export interface ICreator<CLASS, PROPS> {
	factoryMethod(props?: PROPS): CLASS;
}

class Factory {
	private creators: Map<KTFac, TFac[KTFac]> = new Map();

	/**
	 * Регестрация класса создания экземпляра
	 * @param key - ключ для класса создания экземпляра
	 * @param creator - класс создания экземпляра
	 */
	public register<T extends KTFac>(key: T, creator: TFac[T]): void {
		this.creators.set(key, creator);
	}

	/**
	 * Возвращает класс создания экземпляра
	 * @param key - ключ для класса создания экземпляра
	 */
	public create<T extends KTFac>(key: T): TFac[T] {
		const creator = this.creators.get(key);
		if (!creator) {
			throw new Error(`${key} не зарегестрирован.`);
		}
		// @ts-ignore
		return creator;
	}
}

export default new Factory();

registerModules();
