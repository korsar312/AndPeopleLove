import { IStore } from "Logic/Core/Helpers/Creators/Factory/Variables/FactoryStore";
import { RouteInterfaces } from "Logic/Core/Modules/Routes/Route.interfaces";
import Creators from "Logic/Core/Helpers/Creators/Creators";

export class Store {
	private readonly store;

	constructor() {
		this.store = Creators.createStore("RouterStore");
	}

	/**
	 * Возвращает стор
	 */
	public execute(): IStore<RouteInterfaces.TObj> {
		return this.store;
	}
}
