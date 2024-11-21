import StoreCreator from "./Variables/FactoryStore";
import ModulesCreator from "./Variables/FactoryModules";
import factory from "./Factory";
import { LanguageInterface } from "Logic/Core/Modules/Language/Language.interface";
import { RouteInterfaces } from "Logic/Core/Modules/Routes/Route.interfaces";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";
import { UserInterface } from "Logic/Core/Modules/Users/User.interface";
import { AppStatusInterfaces } from "Logic/Core/Modules/AppState/AppStatus.interfaces";

export type TStoreFactory = {
	UserStore: StoreCreator<UserInterface.TUserObj>;
	LanguageStore: StoreCreator<LanguageInterface.TObj>;
	RouterStore: StoreCreator<RouteInterfaces.TObj>;
	StyleStore: StoreCreator<StylesInterface.TObj>;
	AppStatusStore: StoreCreator<AppStatusInterfaces.TObj>;
};

export type TTypeModule = {
	UserModule: UserInterface.IModules;
	LanguageModule: LanguageInterface.IModules;
	RouterModule: RouteInterfaces.IModules;
	StyleModule: StylesInterface.IModules;
	AppStatusModule: AppStatusInterfaces.IModules;
};

export type TModuleFactory = {
	[key in keyof TTypeModule]: ModulesCreator<TTypeModule[key]>;
};

export type TFactoryCreators = TStoreFactory & TModuleFactory;

export function registerModules() {
	factory.register("UserModule", new ModulesCreator());
	factory.register("UserStore", new StoreCreator());

	factory.register("LanguageModule", new ModulesCreator());
	factory.register("LanguageStore", new StoreCreator());

	factory.register("RouterModule", new ModulesCreator());
	factory.register("RouterStore", new StoreCreator());

	factory.register("StyleModule", new ModulesCreator());
	factory.register("StyleStore", new StoreCreator());

	factory.register("AppStatusModule", new ModulesCreator());
	factory.register("AppStatusStore", new StoreCreator());
}
