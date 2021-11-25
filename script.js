// ADICIONR PIXEL'S
const pixelBoard = document.getElementById('pixel-board');

function generatePixels(qtdPixel) {
  for (let index = 1; index <= qtdPixel; index += 1) {
    const divLine = document.createElement('div');
    for (let index2 = 1; index2 <= qtdPixel; index2 += 1) {
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

// ADICIONAL: bg e titulo mudando de cores aleatoriamente;
const myBody = document.querySelector('body');
myBody.style.backgroundColor = generateNewColor();

const title = document.querySelector('#title');
const colorBg = myBody.style.backgroundColor;
title.style.backgroundColor = colorBg;

const borderButton = document.querySelectorAll('.style-button');
borderButton[0].style.backgroundColor = colorBg;
borderButton[1].style.backgroundColor = colorBg;
borderButton[2].style.backgroundColor = colorBg;

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
// Função para selecionar a cor com classe selected
function selectedPixel(e) {
  const colorSelected = document.querySelector('.selected');
  const addColorPixel = colorSelected.style.backgroundColor;
  e.target.style.backgroundColor = addColorPixel;
}
// percorrer todos os pixels para pintar o que for clicado
function paintPixels() {
  const pixelEvent = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixelEvent.length; i += 1) {
    pixelEvent[i].addEventListener('click', selectedPixel);
  }
}
paintPixels();

// BOTÃO PARA LIMPAR PIXELS PREENCHIDOS
const clearBoard = document.querySelector('#clear-board');
// Criar um lopp para percorrer todos os 25 pixel e pintar de branco;
// Referência do repositório do @SrTonn para entender a razão do lopp não funcionar anteriormente
function clearPixels() {
  const pixelEvent = document.querySelectorAll('.pixel');
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
  paintPixels();
});
