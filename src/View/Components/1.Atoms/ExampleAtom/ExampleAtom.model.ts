import { IComponent } from "./index";

function ExampleAtomModel(props: IComponent) {
	const { text } = props;

	const changedText = text + "123";

	return { changedText };
}

export default ExampleAtomModel;
