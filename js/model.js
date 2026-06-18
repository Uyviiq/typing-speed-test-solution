import textData from "./data.js";
import { randomNumber } from "./helpers.js";

export let state = {
  textArr: [],
  correctCharsTyped: 0,
  incorrectCharsTyped: 0,
  currIdx: 0,
  timer: 60,
  mode: "timer",
};

export const resetTypingStates = function () {
  state = {
    ...state,
    currIdx: 0,
    timer: 60,
    correctCharsTyped: 0,
    incorrectCharsTyped: 0,
  };
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
export const decreaseTime = () => state.timer--;

export const handleBackSpace = () => state.currIdx--;
