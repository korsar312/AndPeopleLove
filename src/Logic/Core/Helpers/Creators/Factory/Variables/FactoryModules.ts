import { ICreator } from "../Factory";

interface IStore<TImpl> {
	invoker: () => TImpl;
}

class ModulesProduct<TImpl> implements IStore<TImpl> {
	private readonly modules: TImpl;

	constructor(props: TImpl) {
		this.modules = props;
	}

	/**
	 * Возвращает инициализированные модули
	 */
	public invoker(): TImpl {
		return this.modules;
	}
}

class ModulesCreator<TImpl> implements ICreator<ModulesProduct<TImpl>, TImpl> {
	public factoryMethod(props: TImpl): ModulesProduct<TImpl> {
		return new ModulesProduct(props);
	}
}

export default ModulesCreator;
