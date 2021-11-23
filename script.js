// ADICIONR PIXEL'S
const pixelBoard = document.getElementById('pixel-board');
const lines = 5;
const coluns = 5;
for (let index = 1; index <= lines; index += 1) {
  const divLine = document.createElement('div');
  for (let index2 = 1; index2 <= coluns; index2 += 1) {
    const box = document.createElement('div');
    box.className = 'pixel';
    divLine.appendChild(box);
  }
  pixelBoard.appendChild(divLine);
}

// DEFINBIR COR "BLACK" INICIAL  E CORES ALEATÓRIAS
// Referencia para cores aleatórias: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random;
function generateNewColor() {
  const aleatNum1 = Math.round(Math.random() * 255);
  const aleatNum2 = Math.round(Math.random() * 255);
  const aleatNum3 = Math.round(Math.random() * 255);
  const newColorAleat = `rgb(${aleatNum1}, ${aleatNum2}, ${aleatNum3})`;
  return newColorAleat;
}

const firstColor = document.querySelectorAll('.color')[0];
firstColor.classList.add('selected');
firstColor.style.backgroundColor = 'black';
const secondColor = document.querySelectorAll('.color')[1];
secondColor.style.backgroundColor = generateNewColor();
const thirdColor = document.querySelectorAll('.color')[2];
thirdColor.style.backgroundColor = generateNewColor();
const fourthColor = document.querySelectorAll('.color')[3];
fourthColor.style.backgroundColor = generateNewColor();

// ADICIONAL: TITULO COM CORES ALEATORIAS (REQUISITO 6 E 12)
const myTitle = document.querySelector('#title');
myTitle.style.color = generateNewColor();

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
// percorrer todos os 25 pixels
const pixelEvent = document.querySelectorAll('.pixel');
for (let i = 0; i < pixelEvent.length; i += 1) {
  pixelEvent[i].addEventListener('click', paintPixel);
}
// selecionar a cor para pintar o pixel
function paintPixel(event) {
  const colorSelected = document.querySelector('.selected');
  let addColor = colorSelected.style.backgroundColor;
  event.target.style.backgroundColor = addColor;
}
