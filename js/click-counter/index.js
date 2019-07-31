class Panel {
  /**
   * @type null | HTMLDivElement
   */
  element = null;
  counter = 0;

  get counterElement() {
    const className = this.element.className;

    return document.querySelector(`.${className}-counter`);
  }

  init(el) {
    if (!el) return false;

    this.element = el;
    this.element.addEventListener('click', this.handleClick);
  }

  destroy() {
    if (!this.element) return false;

    this.element.removeEventListener('click', this.handleClick);
  }

  handleClick = () => {
    if (!this.counterElement) return false;

    this.counterElement.innerHTML = `${++this.counter}`;
  }
}

function main () {
  var panelsElements = document.querySelector('.wrapper');
  [].slice.apply(panelsElements.children).forEach(function (panelElement) {
    var panel = new Panel();
    panel.init(panelElement);
  });
}

window.onload = main;
