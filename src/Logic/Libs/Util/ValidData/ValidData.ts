/**
 *
 */
type TVarData = "email" | "tel";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const numberRegex = /^\d{10}$/;

export class ValidData {
	static execute() {
		return function (variables: TVarData, validate: string): boolean {
			const valid = (reg: RegExp) => reg.test(validate);

			switch (variables) {
				case "email":
					return valid(emailRegex);
				case "tel":
					return valid(numberRegex);
			}
		};
	}
}
