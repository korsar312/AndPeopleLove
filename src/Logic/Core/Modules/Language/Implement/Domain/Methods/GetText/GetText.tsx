import { LanguageInterface } from "../../../../Language.interface";
import { createElement, Fragment, ReactElement, ReactNode } from "react";
import { CSSObject } from "@emotion/react";
import { v4 as id } from "uuid";

export class GetText {
	static execute() {
		return function (
			languageDictionary: LanguageInterface.TLanguage,
			wordKey: LanguageInterface.TAllWord,
			langModel: LanguageInterface.ELanguageType,
			notTranslate?: boolean,
			caseWord?: LanguageInterface.TTextCaseWord,
			addon?: LanguageInterface.TAddon,
			adding?: LanguageInterface.TAdding[],
		): string | (string | ReactElement)[] {
			if (wordKey === null || wordKey === "") return "";
			if (typeof wordKey === "number") return String(wordKey);
			if (!wordKey) return LanguageInterface.EWord.ERROR;

			const findWord = notTranslate
				? String(wordKey)
				: languageDictionary?.[wordKey as LanguageInterface.TAllTranslateWord]?.[langModel] || String(wordKey);

			const transArr = addon?.trans?.[wordKey as LanguageInterface.EWord]?.[langModel];
			const modifyArr = addon?.modify?.[wordKey as LanguageInterface.EWord]?.[langModel];

			const trueWord = caseShift(findWord, caseWord);

			let word;

			if (transArr) word = Transform(trueWord, transArr).join(" ");
			if (modifyArr) word = Modify(word || trueWord, modifyArr, adding);

			return word ? word : trueWord;
		};
	}
}

function Modify(text: string, valArr: Array<[number, number]>, adding?: LanguageInterface.TAdding[]): (string | ReactElement)[] {
	const textArr = text.split(" ");

	return valArr.reduce(
		(prev: { count: number; arr: (string | ReactElement)[] }, [start, end], i) => {
			const beforeSegment = textArr.slice(prev.count, start);
			const modifiedSegment = textArr.slice(start, end);
			const afterSegment = textArr.slice(end);

			beforeSegment.length && prev.arr.push(createFragment(`${beforeSegment.join(" ")}`));
			prev.arr.push(createJSX(` ${modifiedSegment.join(" ")} ${adding?.[i]?.content ?? ""} `, adding?.[i]?.styles));
			if (i === valArr.length - 1) afterSegment.length && prev.arr.push(createFragment(afterSegment.join(" ")));
			prev.count = end;

			return prev;
		},
		{ count: 0, arr: [] },
	).arr;
}

function Transform(text: string, transArr: number[]) {
	return text.split(" ").map((value, index) => (transArr.includes(index) ? `\n${value}` : value));
}

function createJSX(children?: ReactNode, css?: CSSObject) {
	return createElement("span", { children, style: css, key: id() });
}

function createFragment(children?: ReactNode) {
	return createElement(Fragment, { children, key: id() });
}

function caseShift(text: string, caseWord?: LanguageInterface.TTextCaseWord) {
	switch (caseWord) {
		case "CAPITAL":
			return text.toUpperCase();
		case "SMALL":
			return text.toLowerCase();
		case "NORMAL":
		default:
			return text;
	}
}
