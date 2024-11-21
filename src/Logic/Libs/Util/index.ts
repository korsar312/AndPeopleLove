import { GetArray } from "./GetArray/GetArray";
import { Polymorph } from "./Polymorph/Polymorph";
import { ToMoney } from "./ToMoney/ToMoney";
import { ValidData } from "./ValidData/ValidData";

class Index {
	/** Возвращает массив */
	public getArray = GetArray.execute();

	/** Возвращает необходимый тип */
	public polymorph = Polymorph.execute();

	/** В денежный формат */
	public toMoney = ToMoney.execute();

	/** Проверка валидности */
	public validData = ValidData.execute();
}

export default new Index();
