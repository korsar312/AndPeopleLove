import UseCases from "Logic/Core/UseCases/UseCases";
import { v4 } from "uuid";
import { useEffect, useRef } from "react";
import { observer } from "mobx-react";
import { useUpdating } from "Logic/Libs/Hooks/useUpdating/useUpdating";
import { useDidUpdate } from "Logic/Libs/Hooks/useDidUpdate/useDidUpdate";
import { APIInterface } from "Logic/Core/API/API.interface";
import { WebsocketInterface } from "../Logic/Core/API/Websocket/Websocket.interface";
import { AppStatusInterfaces } from "../Logic/Core/Modules/AppState/AppStatus.interfaces";

type TOptions = {
	timeout?: number | (() => number);
	catchFn?: () => void;
};

const InitC = () => {
	const authData = () => UseCases.interactor("user", "getAuth") || undefined;
	const timeRenewToken = () => (authData()?.expiresInJwt || 10) * 0.5 * 1000;
	const isInitDone = UseCases.interactor("appStatus", "isInitDone");
	const WsIsDisabled = UseCases.interactor("appStatus", "websocketIsDisabled");
	const reTokenTimer = useRef<ReturnType<typeof setTimeout>>();
	const longPool = useRef<Record<string, () => Promise<unknown>>>({});

	const { enabledUpdating, disabledUpdating } = useUpdating();

	useEffect(() => {
		if (!isInitDone) {
			StartFront();
			init();
		}
	}, []);

	useDidUpdate(() => {
		// Мягкая реакция на падение бека
		if (!WsIsDisabled && isInitDone) init();
	}, [WsIsDisabled]);

	useDidUpdate(() => {
		clearReToken();
		if (authData()?.userUniqId) reToken();
	}, [authData()?.userUniqId]);

	function StartFront() {
		document.body.addEventListener("contextmenu", (e) => e.preventDefault());
	}

	async function init() {
		enabledUpdating();
		clearInfinRequest();
		clearWsEmit();

		//await requestOne(requestWSIsConnect);
		//await requestOne(isInitDone ? frontLogReConnect : frontLogStart);

		//await initChoiceMode();

		initDone();
	}

	function initChoiceMode() {
		return initMode();
	}

	async function initMode() {
		initEmittersMode();
		await initSettingMode();
		longPoolMode();
	}

	function initEmittersMode() {
		createEmit(WebsocketInterface.EMethodNameInternal.ExampleInternal, internalExample);
	}

	function initSettingMode() {
		return Promise.all([requestOne(requestExample), requestOne(requestExample2)]);
	}

	function longPoolMode() {
		requestInfin(requestLongPool);
		requestInfin(requestLongPool2, { timeout: 5000 });
	}

	function initDone() {
		UseCases.interactor("appStatus", "initDone");
		disabledUpdating();

		//frontLogFinish();
	}

	function reToken() {
		reTokenTimer.current = setTimeout(() => requestRenewToken().finally(reToken), timeRenewToken());
	}

	function clearReToken() {
		clearTimeout(reTokenTimer.current);
	}

	function requestInfin(request: () => Promise<unknown>, options?: TOptions) {
		const id = String(v4());
		longPool.current[id] = request;

		infin(id, options);

		function infin(name: string, options?: TOptions) {
			const time = (typeof options?.timeout === "number" ? options?.timeout : options?.timeout?.()) ?? 10;

			const recursive = () => infin(name, options);
			const standardLoop = (actionFn: () => void) => setTimeout(() => actionFn(), time);

			const thanLoop = () => standardLoop(recursive);
			const catchLoop = () => setTimeout(() => standardLoop(options?.catchFn || recursive), 5000);

			const requestGo = longPool.current[name];

			requestGo?.().then(thanLoop).catch(catchLoop);
		}
	}

	function clearInfinRequest() {
		longPool.current = {};
	}

	function clearWsEmit() {
		removeEmit(WebsocketInterface.EMethodNameInternal.ExampleInternal, internalExample);
	}

	return null;
};

function requestOne(request: () => Promise<unknown>) {
	function loopFn(request: () => Promise<unknown>, endCircle: (value: any) => void) {
		request()
			.then((res) => endCircle(res))
			.catch(() => setTimeout(() => loopFn(request, endCircle), 1000));
	}

	return new Promise((resolve) => loopFn(request, resolve));
}

export default observer(InitC);

const createEmit = UseCases.public.websocketEmit;
const removeEmit = UseCases.public.websocketEmitRemove;

const requestWSIsConnect = () => UseCases.public.websocketIsConnect();

const requestLogAction = (action: APIInterface.ELogEvent) => UseCases.public.logAction({ action });
const frontLogStart = () => requestLogAction(APIInterface.ELogEvent.startFront);
const frontLogReConnect = () => requestLogAction(APIInterface.ELogEvent.reConnect);
const frontLogFinish = () => requestLogAction(APIInterface.ELogEvent.finishInit);

const requestRenewToken = () => UseCases.interactor("user", "renewToken");

const requestExample = () => new Promise((res) => setTimeout(res, 2000));
const requestExample2 = () => new Promise((res) => setTimeout(res, 1000));
const requestLongPool = () => new Promise((res) => setTimeout(res, 2000));
const requestLongPool2 = () => new Promise((res) => setTimeout(res, 1000));
const internalExample = (el: AppStatusInterfaces.TErrorData) => console.log(el);
