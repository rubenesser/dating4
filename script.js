/*const Pi = 3.1415

function multiply() {
  const M = document.getElementById('M').value
  const answerBox = document.getElementById('answer')

  answerBox.innerHTML = M * Pi
}
*/

const names = [
  'Marianne','Linda', 'Kim', 'Judith', 'Eveline', 'Lisa'
]

function finder() {
  const rNumber = getRandomNumber(0, names.length - 1);
  const answerBox = document.getElementById('answer');
  const name = document.getElementById('persons_name').value;

  answerBox.innerHTML = 'Hello, your name is ' + name + ', you are paired with ' + names[rNumber];
}

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}
