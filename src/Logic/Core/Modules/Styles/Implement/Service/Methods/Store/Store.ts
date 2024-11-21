import { StylesInterface } from "../../../../Styles.interface";
import { IStore } from "Logic/Core/Helpers/Creators/Factory/Variables/FactoryStore";
import Creators from "Logic/Core/Helpers/Creators/Creators";

export class Store {
	private readonly store;

	constructor() {
		this.store = Creators.createStore("StyleStore");
	}

	/**
	 * Возвращает стор
	 */
	public execute(): IStore<StylesInterface.TObj> {
		return this.store;
	}
}
