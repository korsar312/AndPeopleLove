import DevToolsModel, { TDevToolsContent } from "../DevTools.model";
import { NFC } from "Logic/Libs/Util/TypesUtils";
import styles from "./DevTools_Public.styles";
import { LanguageInterface } from "Logic/Core/Modules/Language/Language.interface";
import { ReactElement } from "react";
import Text from "View/Components/0.Cores/Text";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";
import { RouteInterfaces } from "Logic/Core/Modules/Routes/Route.interfaces";

const DevTools_Public: NFC<typeof DevToolsModel> = (props) => {
	const { setChosenContent, chosenContent, controlFn, PathName } = props;

	const { switchTheme, goLink, switchLang } = controlFn;

	const stateContent = {
		BUTTON() {
			return (
				<>
					<button onClick={switchTheme} />
					<button onClick={switchLang} />
				</>
			);
		},
		PAGES() {
			return <div css={styles.pages}>{rowPages("Остальное", PathName)}</div>;
		},
	} satisfies Record<TDevToolsContent, () => ReactElement>;

	function rowPages(title: LanguageInterface.TAllWord, pageArr: RouteInterfaces.EPathName[]) {
		return (
			<>
				<Text text={title} font={StylesInterface.EFont.Mont_M_36} color={StylesInterface.EColor.BLACK_1} />

				<div css={styles.btnList}>
					{pageArr.map((el) => (
						<button onClick={() => goLink(el as RouteInterfaces.EPathName)}>{el}</button>
					))}
				</div>
			</>
		);
	}

	function changeContentBrn(title: TDevToolsContent) {
		return (
			<button key={title} onClick={() => setChosenContent(title)}>
				{title}
			</button>
		);
	}

	return (
		<div css={styles.body}>
			<div css={styles.menu}>{Object.keys(stateContent).map((el) => changeContentBrn(el as TDevToolsContent))}</div>

			<div css={styles.scroll}>{stateContent[chosenContent]()}</div>
		</div>
	);
};

export default DevTools_Public;
