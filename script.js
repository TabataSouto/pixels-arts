// ADICIONR PIXEL'S
const pixelBoard = document.getElementById('pixel-board');

function generatePixels(qtdPixel) {
  const lines = qtdPixel;
  const coluns = qtdPixel;
  for (let index = 1; index <= lines; index += 1) {
    const divLine = document.createElement('div');
    for (let index2 = 1; index2 <= coluns; index2 += 1) {
      const box = document.createElement('div');
      box.className = 'pixel';
      divLine.appendChild(box);
    }
    pixelBoard.appendChild(divLine);
  }
}
generatePixels(5);

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
const myBody = document.querySelector('body');
myBody.style.backgroundColor = generateNewColor();

// SELECIONAR COR
function addColor(event) {
  const colorElement = document.querySelector('.selected');
  colorElement.classList.remove('selected');
  event.target.classList.toggle('selected');
}

firstColor.addEventListener('click', addColor);
secondColor.addEventListener('click', addColor);
thirdColor.addEventListener('click', addColor);
fourthColor.addEventListener('click', addColor);

// COLORIR PIXEL'S
// Função para selecionar a cor e pintar o pixel
function selectedPixel(e) {
  const colorSelected = document.querySelector('.selected');
  const addColorPixel = colorSelected.style.backgroundColor;
  e.target.style.backgroundColor = addColorPixel;
}
// percorrer todos os 25 pixels para pintar
const pixelEvent = document.querySelectorAll('.pixel');
for (let i = 0; i < pixelEvent.length; i += 1) {
  pixelEvent[i].addEventListener('click', selectedPixel);
}

// BOTÃO PARA LIMPAR PIXELS PREENCHIDOS
const clearBoard = document.querySelector('#clear-board');
// Criar um lopp para percorrer todos os 25 pixel e pintar de branco;
// Referência do repositório do @SrTonn para entender a razão do lopp não funcionar anteriormente
function clearPixels() {
  for (let i = 0; i < pixelEvent.length; i += 1) {
    pixelEvent[i].style.backgroundColor = 'white';
  }
}

clearBoard.addEventListener('click', clearPixels);

// TAMANHO QUADRO PIXEL DEFINIDO PELO USUÁRIO;
const button = document.querySelector('#generate-board');

button.addEventListener('click', () => {
  const input = document.querySelector('#board-size');
  let inputValue = input.value;
  if (inputValue === '') {
    alert('Board inválido!');
  }
  if (inputValue < 5) {
    inputValue = '5';
  }
  if (inputValue > 50) {
    inputValue = '50';
  }
  pixelBoard.innerHTML = '';
  generatePixels(inputValue);
});
