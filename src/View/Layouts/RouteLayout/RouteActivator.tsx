import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import UseCases from "Logic/Core/UseCases/UseCases";

export const RouteActivator = () => {
	const navigate = useNavigate();

	useEffect(() => {
		UseCases.interactor("router", "setNavigateFunc", navigate);
	}, []);

	return null;
};
