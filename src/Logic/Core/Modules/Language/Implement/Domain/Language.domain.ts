import { GetText } from "./Methods/GetText/GetText";
import { SetCurrentLanguage } from "./Methods/SetCurrentLanguage/SetCurrentLanguage";
import { GetCurrentLanguage } from "./Methods/GetCurrentLanguage/GetCurrentLanguage";
import { CheckUserLanguage } from "./Methods/CheckUserLanguage/CheckUserLanguage";
import { SwitchCurrentLanguage } from "./Methods/SwitchCurrentLanguage/SwitchCurrentLanguage";

export class LanguageDomain {
	public getText = GetText.execute();
	public checkUserLanguage = CheckUserLanguage.execute();
	public setCurrentLanguage = SetCurrentLanguage.execute();
	public getCurrentLanguage = GetCurrentLanguage.execute();
	public switchCurrentLanguage = SwitchCurrentLanguage.execute();
}
