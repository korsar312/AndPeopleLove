import { SetAuth } from "./Methods/SetAuths/SetAuth";
import { GetAuth } from "./Methods/GetAuth/GetAuth";
import { GetAuthFromReToken } from "./Methods/GetAuthFromReToken/GetAuthFromReToken";

export class UserDomain {
	public getAuth = GetAuth.execute();
	public setAuth = SetAuth.execute();
	public getAuthFromReToken = GetAuthFromReToken.execute();
}
