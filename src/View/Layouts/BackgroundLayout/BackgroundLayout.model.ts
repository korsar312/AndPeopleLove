import { IComponent } from "./index";
import bg from "Assets/Images/Background.png";

function BackgroundLayoutModel(props: IComponent) {
	const {} = props;

	const bgPath = bg;

	return { bgPath };
}

export default BackgroundLayoutModel;
