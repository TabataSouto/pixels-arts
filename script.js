// CONSTANTES A SEREM UTILIZADAS NO DECORRER DO CÓDIGO //
const pixelBoard = document.getElementById('pixel-board');

// Adicione à página um quadro de pixels, com 25 pixels.
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
