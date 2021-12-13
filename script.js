/* Constantes e Variáveis */
const buttonCreateLetter = document.getElementById('criar-carta');
const inputLetterText = document.getElementById('carta-texto');
const outputLetter = document.getElementById('carta-gerada');

/*  */
function createLetter() {
  buttonCreateLetter.addEventListener('click', () => {
    const letterContent = inputLetterText.value;
    const arrayWords = letterContent.split(' ');
    for (let index = 0; index < arrayWords.length; index += 1) {
      const elementSpan = document.createElement('span');
      console.log(index);
      elementSpan.innerHTML = arrayWords[index];
      outputLetter.appendChild(elementSpan);
    }
  });
}
createLetter();