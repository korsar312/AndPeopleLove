import UseCases from "../UseCases";
import { SiteNotWork } from "./Methods/SiteNotWork/SiteNotWork";
import { WebsocketIsConnect } from "./Methods/WebsocketIsConnect/WebsocketIsConnect";
import { LogAction } from "./Methods/LogAction/LogAction";
import { WebsocketEmit } from "./Methods/WebsocketEmit/WebsocketEmit";
import { WebsocketEmitRemove } from "./Methods/WebsocketEmitRemove/WebsocketEmitRemove";

export class PublicCase {
	public logAction;
	public siteNotWork;
	public websocketEmit;
	public websocketIsConnect;
	public websocketEmitRemove;

	constructor(useCases: typeof UseCases) {
		this.logAction = LogAction.execute(useCases);
		this.siteNotWork = SiteNotWork.execute(useCases);
		this.websocketEmit = WebsocketEmit.execute(useCases);
		this.websocketIsConnect = WebsocketIsConnect.execute(useCases);
		this.websocketEmitRemove = WebsocketEmitRemove.execute(useCases);
	}
}
