/* Constantes e Variáveis */
const buttonCreateLetter = document.getElementById('criar-carta');
const inputLetterText = document.getElementById('carta-texto');
const outputLetter = document.getElementById('carta-gerada');

/* Função: randomStyleClass
-- Retorma uma classe de estilo aleatória */
function randomStyleClass() {
  const styleArray = [
    'newspaper',
    'magazine1',
    'magazine2',
    'medium',
    'big',
    'reallybig',
    'rotateleft',
    'rotateright',
    'skewleft',
    'skewright',
  ];
  const classes = styleArray.length;
  const styleClass = styleArray[Math.floor(Math.random() * classes)];
  return styleClass;
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
        elementSpan.classList.add(randomStyleClass());
        outputLetter.appendChild(elementSpan);
      }
    }
  });
}
createLetter();
