/* Constantes e Variáveis */
const buttonCreateLetter = document.getElementById('criar-carta');
const inputLetterText = document.getElementById('carta-texto');
const outputLetter = document.getElementById('carta-gerada');

/* Função: createLetter
-- Gera a carta ao clicar no botão Criar Carta */
function createLetter() {
  buttonCreateLetter.addEventListener('click', () => {
    if (inputLetterText.value !== '' || !inputLetterText.value) {
      outputLetter.innerText = '';
      const letterContent = inputLetterText.value;
      const arrayWords = letterContent.split(' ');
      for (let index = 0; index < arrayWords.length; index += 1) {
        const elementSpan = document.createElement('span');
        console.log(index);
        elementSpan.innerHTML = arrayWords[index];
        outputLetter.appendChild(elementSpan);
      }
    } else outputLetter.innerText = 'por favor, digite o conteúdo da carta.';
  });
}
createLetter();