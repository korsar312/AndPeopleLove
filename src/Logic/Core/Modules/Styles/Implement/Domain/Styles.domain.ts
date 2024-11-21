import { GetColor } from "./Methods/GetColor/GetColor";
import { Hex2rgba } from "./Methods/Hex2rgba/Hex2rgba";
import { GetFont } from "./Methods/GetFont/GetFont";

export class StylesDomain {
	public getColor = GetColor.execute();
	public getFont = GetFont.execute();
	public hex2rgba = Hex2rgba.execute();
}
