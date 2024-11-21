import { UserInterface } from "../../../User.interface";

export class GetAuth {
	static execute(module: UserInterface.IModules) {
		return function (): UserInterface.IAuth | undefined {
			const store = module.service.store.getStore();

			return module.domain.getAuth(store);
		};
	}
}
