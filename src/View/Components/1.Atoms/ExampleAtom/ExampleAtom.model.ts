import { IComponent } from "./index";

function ExampleAtomModel(props: IComponent) {
	const { text } = props;

	const changedText = text;

	return { changedText };
}

export default ExampleAtomModel;
