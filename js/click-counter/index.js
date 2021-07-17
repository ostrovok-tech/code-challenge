function main () {
  // var panelsElements = document.querySelector('.wrapper');
  // [].slice.apply(panelsElements.children).forEach(function (panelElement) {
  //   var panel = new Panel();
  //   panel.init(panelElement);
  // });

  const redBtn = document.querySelector('.red');
  const greenBtn = document.querySelector('.green');
  const blueBtn = document.querySelector('.blue');

  function handleBtnClick1(event) {
    event.preventDefault();
    let redBtnCount = document.querySelector('.red-counter');
    redBtnCount.innerText = parseInt(redBtnCount.innerText, 10)+1;
  }
  function handleBtnClick2(event) {
    event.preventDefault();
    let greenBtnCount = document.querySelector('.green-counter');
    greenBtnCount.innerText = parseInt(greenBtnCount.innerText, 10)+1;
  }
  function handleBtnClick3(event) {
    event.preventDefault();
    let blueBtnCount = document.querySelector('.blue-counter');
    blueBtnCount.innerText = parseInt(blueBtnCount.innerText, 10)+1;
  }

  redBtn.addEventListener('click', handleBtnClick1);
  greenBtn.addEventListener('click', handleBtnClick2);
  blueBtn.addEventListener('click', handleBtnClick3);
}

window.onload = main;
