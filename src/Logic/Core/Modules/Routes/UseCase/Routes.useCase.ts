import Modules from "../Implement/Modules";
import { SetNavigateFunc } from "./Methods/SetNavigateFunc/SetNavigateFunc";
import { InitStore } from "./Methods/InitStore/InitStore";
import { GoHomePage } from "./Methods/GoHomePage/GoHomePage";
import { GoLink } from "./Methods/GoLink/GoLink";

export class RoutesUseCase {
	private module = Modules.invoker();
	private initStore = InitStore.execute(this.module);

	constructor() {
		this.initStore();
	}

	public goHomePage = GoHomePage.execute(this.module);
	public goLink = GoLink.execute(this.module);
	public setNavigateFunc = SetNavigateFunc.execute(this.module);
}
