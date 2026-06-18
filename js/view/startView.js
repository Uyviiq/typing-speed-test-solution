import View from "./view.js";

class StartView extends View {
  _btnStart = document.querySelector(".start-overlay__btn");
  _parentEl = document.querySelector(".text-box p");
  _restartBtn = document.querySelector(".restart");
  addStartHandler(handler) {
    document.addEventListener(
      "click",
      function (e) {
        const target =
          e.target.closest(".start-overlay__btn") ||
          e.target.closest(".text-box p");
        const textShowen = this._parentEl.classList.contains("text--blur");
        if (!target || !textShowen) return;
        this._startGameUI();
        handler(this._getDifficulty());
      }.bind(this),
    );
  }
  _startGameUI() {
    const accuracyEl = document.querySelector(".typing-info__accuracy-value");
    const timeEl = document.querySelector(".typing-info__time-value");
    accuracyEl.classList.add("accuracy--started");
    timeEl.classList.add("time--started");
    this._parentEl.classList.remove("text--blur");
    this._btnStart.parentElement.classList.add("hidden");
    this._restartBtn.classList.remove("hidden");
  }
  addRestartHanlder(handler) {
    this._restartBtn.addEventListener(
      "click",
      function (e) {
        document.activeElement.blur();
        handler(this._getDifficulty());
      }.bind(this),
    );
  }
}

export default new StartView();
