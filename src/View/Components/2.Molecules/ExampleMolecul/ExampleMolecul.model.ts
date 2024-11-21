import { IComponent } from "./index";

function ExampleMoleculModel(props: IComponent) {
	const { onClick } = props;

	function handleClick() {
		onClick?.();
	}

	return { handleClick };
}

export default ExampleMoleculModel;
