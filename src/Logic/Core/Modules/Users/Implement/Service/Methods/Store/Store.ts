import { UserInterface } from "../../../../User.interface";
import { IStore } from "Logic/Core/Helpers/Creators/Factory/Variables/FactoryStore";
import Creators from "../../../../../../Helpers/Creators/Creators";

export class Store {
	private readonly store;

	constructor() {
		this.store = Creators.createStore("UserStore");
	}

	/**
	 * Возвращает стор
	 */
	public execute(): IStore<UserInterface.TUserObj> {
		return this.store;
	}
}
