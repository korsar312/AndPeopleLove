import { InitStore } from "./Methods/InitStore/InitStore";
import { GetColor } from "./Methods/GetColor/GetColor";
import Modules from "../Implement/Modules";
import { GetFont } from "./Methods/GetFont/GetFont";

export class StylesUseCase {
	private module = Modules.invoker();
	private initStore = InitStore.execute(this.module);

	constructor() {
		this.initStore();
	}

	public getColor = GetColor.execute(this.module);
	public getFont = GetFont.execute(this.module);
}
