import View from "./view.js";

class TextView extends View {
  _parentEl = document.querySelector(".text-box p");
  _generateMarkup() {
    const markup = this._text.map((char) => `<span>${char}</span>`).join("");
    return markup;
  }
  addTypingHandler(handler) {
    window.addEventListener(
      "keydown",
      function (e) {
        // prettier-ignore
        const keysToIgnore = ["Shift","Control","Alt","Enter","CapsLock","ContextMenu","Meta","ArrowUp","ArrowLeft","ArrowRight","ArrowDown",'Backspace'];
        if (
          this._parentEl.classList.contains("text--blur") ||
          keysToIgnore.includes(e.key)
        )
          return;
        handler(e.key);
      }.bind(this),
    );
  }
}

export default new TextView();
