import { LanguageUseCase } from "./Language/UseCase/Language.useCase";
import { RoutesUseCase } from "./Routes/UseCase/Routes.useCase";
import { StylesUseCase } from "./Styles/UseCase/Styles.useCase";
import { UserUseCase } from "./Users/UseCase/UserUseCase";
import { AppStatusUseCase } from "./AppState/UseCase/AppStatus.useCase";

export class Modules {
	user: UserUseCase;
	style: StylesUseCase;
	router: RoutesUseCase;
	language: LanguageUseCase;
	appStatus: AppStatusUseCase;

	constructor() {
		this.user = new UserUseCase();
		this.style = new StylesUseCase();
		this.router = new RoutesUseCase();
		this.language = new LanguageUseCase();
		this.appStatus = new AppStatusUseCase();
	}
}
