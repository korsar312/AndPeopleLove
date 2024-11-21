import { IStore } from "Logic/Core/Helpers/Creators/Factory/Variables/FactoryStore";
import { AppStatusInterfaces } from "../../../../AppStatus.interfaces";
import Creators from "../../../../../../Helpers/Creators/Creators";

export class Store {
	private readonly store;

	constructor() {
		this.store = Creators.createStore("AppStatusStore");
	}

	/**
	 * Возвращает стор
	 */
	public execute(): IStore<AppStatusInterfaces.TObj> {
		return this.store;
	}
}
