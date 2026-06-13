import View from "./view.js";

class TextView extends View {
  _parentEl = document.querySelector(".text-box p");
  _generateMarkup() {
    const markup = this._text.map((char) => `<span>${char}<span>`).join("");
    return markup;
  }
}

export default new TextView();
