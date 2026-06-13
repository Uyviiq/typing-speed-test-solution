"use strict";
import StartView from "./view/startView.js";
import TextView from "./view/textView.js";
import * as model from "./model.js";

const controlStart = function (difficulty) {
  model.splitText(difficulty);
  TextView.render(model.state.textArr);
};

const init = function () {
  StartView.addStartHandler(controlStart);
};
init();
