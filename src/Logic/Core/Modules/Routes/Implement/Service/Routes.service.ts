import { Store } from "./Methods/Store/Store";
import { CreateNavigateObj } from "./Methods/CreateNavigateObj/CreateNavigateObj";

export class RoutesService {
	public createNavigateObj = CreateNavigateObj.execute();
	public store = new Store().execute();
}
