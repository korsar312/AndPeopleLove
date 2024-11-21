import Polyfills from "./Logic/Config/Polyfills";
import ReactDOM from "react-dom/client";
import App from "View/App";
import "Styles/Normalize.css";

Polyfills.checker();
export const rootElement = document.querySelector("#root") || document.body;

ReactDOM.createRoot(rootElement).render(<App />);
