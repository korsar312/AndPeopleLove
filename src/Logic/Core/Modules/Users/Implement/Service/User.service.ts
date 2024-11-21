import { Store } from "./Methods/Store/Store";
import { RequestLogin } from "./Methods/RequestLogin/RequestLogin";
import { RequestLogoff } from "./Methods/RequestLogoff/RequestLogoff";
import { RequestRenewToken } from "./Methods/RequestRenewToken/RequestRenewToken";

export class UserService {
	public store = new Store().execute();
	public requestLogin = RequestLogin.execute();
	public requestLogoff = RequestLogoff.execute();
	public requestRenewToken = RequestRenewToken.execute();
}
