class View {
  _text = [];
  render(data) {
    if (!Array.isArray(data) || !data.length > 0) return;
    this._text = data;
    this.clear();
    this._parentEl.insertAdjacentHTML("afterbegin", this._generateMarkup());
  }
  clear() {
    this._parentEl.innerHTML = "";
  }
}
export default View;
