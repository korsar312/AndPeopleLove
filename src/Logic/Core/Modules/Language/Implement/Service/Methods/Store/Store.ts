import { IStore } from "Logic/Core/Helpers/Creators/Factory/Variables/FactoryStore";
import { LanguageInterface } from "../../../../Language.interface";
import Creators from "Logic/Core/Helpers/Creators/Creators";

export class Store {
	private readonly store;

	constructor() {
		this.store = Creators.createStore("LanguageStore");
	}

	/**
	 * Возвращает стор
	 */
	public execute(): IStore<LanguageInterface.TObj> {
		return this.store;
	}
}
