class StartView {
  _btnStart = document.querySelector(".start-overlay__btn");
  _difficultyContainer = document.querySelector(".difficulty__btns");
  _textBox = document.querySelector(".text-box p");
  _restartBtn = document.querySelector(".restart");
  addStartHandler(handler) {
    document.addEventListener(
      "click",
      function (e) {
        const target =
          e.target.closest(".start-overlay__btn") ||
          e.target.closest(".text-box p");
        if (!target) return;
        this._startGameUI();
        handler(this._getDifficulty());
      }.bind(this),
      { once: true },
    );
  }
  _startGameUI() {
    this._textBox.classList.remove("text--blur");
    this._btnStart.parentElement.classList.add("hidden");
    this._restartBtn.classList.remove("hidden");
  }
  _getDifficulty() {
    const difficultyLevel = [...this._difficultyContainer.children].find(
      (child) => child.classList.contains("btn--active"),
    ).dataset.difficulty;
    return difficultyLevel;
  }
}

export default new StartView();
