import { Store } from "./Methods/Store/Store";
import { CreateStyleObj } from "./Methods/CreateStyleObj/CreateStyleObj";
import { GetColorList } from "./Methods/GetColorList/GetColorList";
import { GetFontList } from "./Methods/GetFontList/GetFontList";

export class StylesService {
	public store = new Store().execute();
	public getColorList = GetColorList.execute();
	public getFontList = GetFontList.execute();
	public createStyleObj = CreateStyleObj.execute();
}
