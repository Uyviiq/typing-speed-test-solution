"use strict";
import StartView from "./view/startView.js";
import TextView from "./view/textView.js";
import * as model from "./model.js";

const controlStart = function (difficulty) {
  model.loadText(difficulty);
  TextView.render(model.state.textArr, model.state.charsEl);
  StartView.addCharCursor(model.state.currIdx);
  TextView._charsEl = StartView._charsEl;
};

const controlTyping = function (key) {
  if (model.state.textArr.length === model.state.currIdx + 1) return;
  if (key === "Backspace") {
    if (model.state.currIdx === 0) return;
    model.handleBackSpace();
    TextView.removeAllClasses(TextView._charsEl.at(model.state.currIdx));
    TextView.addCharCursor(model.state.currIdx);
    return;
  }
  const valid = model.ValidateChar(key);
  valid
    ? TextView.setCorrectChar(model.state.currIdx - 1)
    : TextView.setWrongChar(model.state.currIdx - 1);
  TextView.addCharCursor(model.state.currIdx);
};
const init = function () {
  StartView.addStartHandler(controlStart);
  TextView.addTypingHandler(controlTyping);
};
init();
