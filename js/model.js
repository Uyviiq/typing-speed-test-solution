import textData from "./data.js";
import { randomNumber } from "./helpers.js";

export const state = {
  textArr: [],
  correctCharsTyped: 0,
  incorrectCharsTyped: 0,
  currChar: "",
  currIdx: 0,
};

export const splitText = function (attrName) {
  let text =
    textData[attrName][randomNumber(textData[attrName].length - 1, 0)].text;
  state.textArr = text.split("");
};
