import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";
import "Assets/fonts/Montserrat/Montserrat.scss";

enum Family {
	Montserrat = "Montserrat",
}

enum Weight {
	ExtraBold = 800,
	Bold = 700,
	SemiBold = 600,
	Medium = 500,
	Regular = 400,
}

// 1-ксо 2-роснефть 3-башнефть
export const FontList: StylesInterface.TFont = {
	Mont_M_36: createFont(62, 78, Family.Montserrat, Weight.Medium),
};

function createFont(fontSize: number, lineHeight: number, fontFamily: Family, fontWeight: Weight) {
	return { fontSize: `${fontSize}px`, lineHeight: `${lineHeight}px`, fontFamily, fontWeight };
}
