import { TransformLangToArr } from "./Methods/TransformLangToArr/TransformLangToArr";
import { GetUserLanguage } from "./Methods/GetUserLanguage/GetUserLanguage";
import { CreateLanguageObj } from "./Methods/CreateLanguageObj/CreateLanguageObj";
import { GetDictionary } from "./Methods/GetDictionary/GetDictionary";
import { Store } from "./Methods/Store/Store";
import { GetTransfer } from "./Methods/GetTransfer/GetTransfer";
import { GetModifer } from "./Methods/GetModifer/GetModifer";

export class LanguageService {
	public store = new Store().execute();
	public getDictionary = GetDictionary.execute();
	public getTransfer = GetTransfer.execute();
	public getModifer = GetModifer.execute();
	public createLanguageObj = CreateLanguageObj.execute();
	public getUserLanguage = GetUserLanguage.execute();
	public transformLangToArr = TransformLangToArr.execute();
}
