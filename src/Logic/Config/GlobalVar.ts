const env = import.meta.env;

const hostName = env.VITE_REACT_APP_API_URL || window.location.hostname;

export const GlobalVar = {
	API_URL: window.location.protocol + "//" + hostName + ":8000" + "/api-v01/",
	IMAGE_URL: "",
	WEBSOCKET_URL: "ws://" + hostName + ":5010/WS_Server",

	/** Режим разработки */
	IS_DEV: env.DEV,
};
