import { HashRouter } from "react-router-dom";
import PagesLayout from "./Layouts/PagesLayout";
import BackgroundLayout from "./Layouts/BackgroundLayout";
import InitC from "./InitC";

const App = () => {
	return (
		<HashRouter>
			<InitC />
			<BackgroundLayout />
			<PagesLayout />
		</HashRouter>
	);
};

export default App;
