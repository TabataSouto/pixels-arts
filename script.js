// ADICIONR PIXEL'S
const pixelBoard = document.getElementById('pixel-board');
const lines = 5;
const coluns = 5;
for (let index = 1; index <= lines; index += 1) {
  const divLine = document.createElement('div');
  for (let index2 = 1; index2 <= coluns; index2 += 1) {
    const box = document.createElement('div');
    box.className = 'pixel';
    box.style.marginBottom = '-4px';
    divLine.appendChild(box);
  }
  pixelBoard.appendChild(divLine);
}

// DEFINBIR COR "BLACK" INICIAL  E CORES ALEATÓRIAS
function generateNewColor() {
  const aleatNum1 = Math.round(Math.random() * 255);
  const aleatNum2 = Math.round(Math.random() * 255);
  const aleatNum3 = Math.round(Math.random() * 255);
  const newColorAleat = `rgb(${aleatNum1}, ${aleatNum2}, ${aleatNum3})`;
  return newColorAleat;
}

const firstColor = document.querySelector('#color1');
firstColor.classList.add('selected');
firstColor.style.backgroundColor = 'black';
const secondColor = document.querySelector('#color2');
secondColor.style.backgroundColor = generateNewColor();
const thirdColor = document.querySelector('#color3');
thirdColor.style.backgroundColor = generateNewColor();
const fourthColor = document.querySelector('#color4');
fourthColor.style.backgroundColor = generateNewColor();

// ADICIONAL: TITULO COM CORES ALEATORIAS (REQUISITO 6 E 12)
const span1 = document.querySelector('#c1');
span1.style.color = generateNewColor();
const span2 = document.querySelector('#c2');
span2.style.color = generateNewColor();
const span3 = document.querySelector('#c3');
span3.style.color = generateNewColor();

// SELECIONAR COR
function addColor(event) {
  const colorElement = document.querySelector('.selected');
  colorElement.classList.remove('selected');
  event.target.classList.add('selected');
}

firstColor.addEventListener('click', addColor);
secondColor.addEventListener('click', addColor);
thirdColor.addEventListener('click', addColor);
fourthColor.addEventListener('click', addColor);

// COLORIR PIXEL'S
