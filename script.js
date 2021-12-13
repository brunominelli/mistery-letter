/* Constantes e Variáveis */
const buttonCreateLetter = document.getElementById('criar-carta');
const inputLetterText = document.getElementById('carta-texto');
const outputLetter = document.getElementById('carta-gerada');

/* Função: createLetter
-- Gera a carta ao clicar no botão Criar Carta */
console.log(inputLetterText.value);

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
        outputLetter.appendChild(elementSpan);
      }
    }
  });
}
createLetter();