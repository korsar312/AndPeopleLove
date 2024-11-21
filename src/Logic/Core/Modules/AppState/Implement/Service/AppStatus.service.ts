import { Store } from "./Methods/Store/Store";

export class AppStatusService {
	public store = new Store().execute();
}
