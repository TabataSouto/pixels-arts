// Adicione à página um quadro de pixels, com 25 pixels.
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

// Defina a cor preta como cor inicial. Ao carregar a página;
const myFirstColor = document.getElementById('color1');
myFirstColor.classList.add('selected'); // adiciona nome de classe sem substituir a anterior, deixando a tag com a classe que já tinha mais as que forem adicionadas.

// 7 - Clicar em uma das cores da paleta faz com que ela seja selecionada e utilizada para preencher os pixels no quadro.
const firstColor = document.getElementById('color1');
const secondColor = document.getElementById('color2');
const thirdColor = document.getElementById('color3');
const fourColor = document.getElementById('color4');

function addColor(event) {
  const colorElement = document.querySelector('.selected');
  colorElement.classList.remove('selected');
  event.target.classList.add('selected');
}

firstColor.addEventListener('click', addColor);
secondColor.addEventListener('click', addColor);
thirdColor.addEventListener('click', addColor);
fourColor.addEventListener('click', addColor);

// Clicar em um pixel dentro do quadro após selecionar uma cor na paleta faz com que o pixel seja preenchido com a cor selecionada
const selectedColor = document.querySelector('.selected');

// Quem tiver a classe selectd pinda a classe pixel;
