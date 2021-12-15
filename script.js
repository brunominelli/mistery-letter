/* Constantes e Variáveis */
const buttonCreateLetter = document.getElementById('criar-carta');
const inputLetterText = document.getElementById('carta-texto');
const outputLetter = document.getElementById('carta-gerada');
const letterCount = document.getElementById('carta-contador');
// const tagSpan = document.getElementsByTagName('span');

/* Função: randomStyleClass
-- Retorma uma classe de estilo aleatória */
function randomStyleClass(element) {
  const styleArray = ['newspaper', 'magazine1', 'magazine2'];
  const sizeArray = ['medium', 'big', 'reallybig'];
  const rotateArray = ['rotateleft', 'rotateright'];
  const skewArray = ['skewleft', 'skewright'];

  const styleIndex = styleArray.length;
  const sizeIndex = sizeArray.length;
  const rotateIndex = rotateArray.length;
  const skewIndex = skewArray.length;

  element.classList.add(styleArray[Math.floor(Math.random() * styleIndex)]);
  element.classList.add(sizeArray[Math.floor(Math.random() * sizeIndex)]);
  element.classList.add(rotateArray[Math.floor(Math.random() * rotateIndex)]);
  element.classList.add(skewArray[Math.floor(Math.random() * skewIndex)]);
}

/* Função: changeStyleClass
-- Muda a classe de estilo da palavra quando clicada. */
function changeStyleClass(element) {
  element.addEventListener('click', () => {
    const word = element;
    word.classList = '';
    randomStyleClass(element);
  });
}

/* Função: createLetter
-- Gera a carta ao clicar no botão Criar Carta */
function createLetter() {
  buttonCreateLetter.addEventListener('click', () => {
    const letterContent = inputLetterText.value;
    if (letterContent.split(/\s/)[0] === '') {
      outputLetter.innerText = 'Por favor, digite o conteúdo da carta.';
    } else {
      outputLetter.innerText = '';
      const arrayWords = letterContent.split(/\s/);
      for (let index = 0; index < arrayWords.length; index += 1) {
        const elementSpan = document.createElement('span');
        elementSpan.innerText = arrayWords[index];
        randomStyleClass(elementSpan);
        changeStyleClass(elementSpan);
        outputLetter.appendChild(elementSpan);
        letterCount.innerText = index + 1;
      }
    }
  });
}
createLetter();
