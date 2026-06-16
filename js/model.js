import textData from "./data.js";
import { randomNumber } from "./helpers.js";

export const state = {
  textArr: [],
  correctCharsTyped: 0,
  incorrectCharsTyped: 0,
  currIdx: 0,
};

export const loadText = function (attrName) {
  let text =
    textData[attrName][randomNumber(textData[attrName].length - 1, 0)].text;
  state.textArr = text.split("");
};

export const ValidateChar = function (char) {
  const isCorrect = state.textArr.at(state.currIdx) === char;
  isCorrect ? state.correctCharsTyped++ : state.incorrectCharsTyped++;
  state.currIdx++;
  return isCorrect;
};
export const handleBackSpace = () => state.currIdx--;
