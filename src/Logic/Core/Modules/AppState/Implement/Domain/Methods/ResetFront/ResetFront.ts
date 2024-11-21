export class ResetFront {
	static execute() {
		return function () {
			window.location.href = "/";
		};
	}
}
