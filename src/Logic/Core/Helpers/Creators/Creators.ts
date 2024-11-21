import { TModuleFactory, TStoreFactory, TTypeModule } from "Logic/Core/Helpers/Creators/Factory/Factory.enam";
import factory from "Logic/Core/Helpers/Creators/Factory/Factory";

type TStores = {
	[key in keyof TStoreFactory]: TStoreFactory[key];
};

type TModules = {
	[key in keyof TModuleFactory]: TModuleFactory[key];
};

class Creators {
	private stores: TStores = {
		UserStore: factory.create("UserStore"),
		LanguageStore: factory.create("LanguageStore"),
		RouterStore: factory.create("RouterStore"),
		StyleStore: factory.create("StyleStore"),
		AppStatusStore: factory.create("AppStatusStore"),
	};

	private modules: TModules = {
		UserModule: factory.create("UserModule"),
		LanguageModule: factory.create("LanguageModule"),
		RouterModule: factory.create("RouterModule"),
		StyleModule: factory.create("StyleModule"),
		AppStatusModule: factory.create("AppStatusModule"),
	};

	public createStore<T extends keyof TStoreFactory>(store: T): ReturnType<TStoreFactory[T]["factoryMethod"]> {
		return this.stores[store].factoryMethod() as ReturnType<TStoreFactory[T]["factoryMethod"]>;
	}

	public createModule<T extends keyof TModuleFactory, K>(module: T, imp: TTypeModule[T]): ReturnType<TModuleFactory[T]["factoryMethod"]> {
		return this.modules[module].factoryMethod(imp) as ReturnType<TModuleFactory[T]["factoryMethod"]>;
	}
}

export default new Creators();
