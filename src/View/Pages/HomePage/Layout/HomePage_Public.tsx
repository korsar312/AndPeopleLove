import styles from "./HomePage_Public.styles";
import { NFC } from "Logic/Libs/Util/TypesUtils";
import HomePageModel from "../HomePage.model";
import { LanguageInterface } from "../../../../Logic/Core/Modules/Language/Language.interface";
import AtomButtonMain from "../../../Components/1.Atoms/AtomButton/Variables/AtomButtonMain";

const HomePage_Public: NFC<typeof HomePageModel> = (props) => {
	const { handleClick } = props;

	return (
		<div css={styles.wrapper} onClick={handleClick}>
			<AtomButtonMain text={LanguageInterface.EWord.PAGES} />
			<AtomButtonMain text={LanguageInterface.EWord.PAGES} />
			<AtomButtonMain text={LanguageInterface.EWord.PAGES} />
			<AtomButtonMain text={LanguageInterface.EWord.PAGES} />
		</div>
	);
};

export default HomePage_Public;
