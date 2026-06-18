"use strict";
import StartView from "./view/startView.js";
import TextView from "./view/textView.js";
import * as model from "./model.js";
import startView from "./view/startView.js";
import textView from "./view/textView.js";

const startTimer = function () {
  model.decreaseTime();
  startView.updateTime(model.state.timer);
  const timerId = setInterval(function () {
    model.decreaseTime();
    startView.updateTime(model.state.timer);
    if (model.state.timer === 0) {
      clearInterval(timerId);
    }
  }, 1000);
};

const controlStart = function (difficulty) {
  startTimer();
  model.loadText(difficulty);
  TextView.render(model.state.textArr);
  StartView.addCharCursor(model.state.currIdx);
  TextView._charsEl = StartView._charsEl;
};

const controlRestart = function () {
  model.resetTypingStates();
  TextView.render(model.state.textArr, model.state.charsEl);
  textView.addCharCursor(model.state.currIdx);
};

const controlTyping = function (key) {
  if (model.state.textArr.length < model.state.currIdx + 1) {
    return;
  }
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
  model.state.currIdx !== model.state.textArr.length &&
    TextView.addCharCursor(model.state.currIdx);
};

const controlDifficulty = function (difficulty) {
  model.loadText(difficulty);
  model.resetTypingStates();
  TextView.render(model.state.textArr);
  StartView.addCharCursor(model.state.currIdx);
  TextView._charsEl = StartView._charsEl;
};

const init = function () {
  StartView.addStartHandler(controlStart);
  StartView.addRestartHanlder(controlRestart);
  StartView.addDifficultyHandler(controlDifficulty);
  TextView.addTypingHandler(controlTyping);
};
init();
