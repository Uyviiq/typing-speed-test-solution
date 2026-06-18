class View {
  _text = [];
  _charsEl = [];
  render(data) {
    if (!Array.isArray(data) || data.length === 0) return;
    this._text = data;
    this.clear();
    this._parentEl.insertAdjacentHTML("afterbegin", this._generateMarkup());
  }
  clear() {
    this._parentEl.innerHTML = "";
  }
  addCharCursor(position) {
    this._charsEl = [...this._parentEl.children];
    this._charsEl.forEach((charEl) => charEl.classList.remove("cursor"));
    this._addClassName("cursor", position);
  }
  _addClassName(className, position) {
    this._charsEl.at(position).classList.add(className);
  }
  setCorrectChar(position) {
    this._addClassName("char--correct", position);
  }
  removeAllClasses(item) {
    item.classList = [];
  }
  setWrongChar(position) {
    this._addClassName("char--wrong", position);
  }
  set charsEl(data) {
    this._charsEl = data;
  }
  get charsEl() {
    return this._charsEl;
  }
  updateTime(time) {
    const timerEl = document.querySelector(".typing-info__time-value");
    timerEl.textContent = `0:${time.toString().padStart(2, "0")}`;
  }
  updateWPM() {}
  updateAccuracy() {}
  _getDifficulty() {
    const difficultyContainer = document.querySelector(".difficulty__btns");
    const difficultyLevel = [...difficultyContainer.children].find((child) =>
      child.classList.contains("btn--active"),
    ).dataset.difficulty;
    return difficultyLevel;
  }
  addDifficultyHandler(handler) {
    document.querySelector(".difficulty__btns").addEventListener(
      "click",
      function (e) {
        const target = e.target.closest(".btn");
        const textBox = document.querySelector(".text-box p");
        if (!target || textBox.classList.contains("text--blur")) return;
        [...e.currentTarget.children].forEach((child) =>
          child.classList.remove("btn--active"),
        );
        target.classList.add("btn--active");
        target.blur();
        handler(this._getDifficulty());
      }.bind(this),
    );
  }
}
export default View;
