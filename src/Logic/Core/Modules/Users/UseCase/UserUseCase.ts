import Modules from "../Implement/Modules";
import { InitStore } from "./Methods/InitStore/InitStore";
import { Login } from "./Methods/Login/Login";
import { Logoff } from "./Methods/Logoff/Logoff";
import { GetAuth } from "./Methods/GetAuth/GetAuth";
import { RenewToken } from "./Methods/RenewToken/RenewToken";

export class UserUseCase {
	private module = Modules.invoker();
	private initStore = InitStore.execute(this.module);

	constructor() {
		this.initStore();
	}

	public login = Login.execute(this.module);
	public logoff = Logoff.execute(this.module);
	public getAuth = GetAuth.execute(this.module);
	public renewToken = RenewToken.execute(this.module);
}
