/*const Pi = 3.1415

function multiply() {
  const M = document.getElementById('M').value
  const answerBox = document.getElementById('answer')

  answerBox.innerHTML = M * Pi
}
*/



const arr = [ 'Marianne','Linda', 'Kim', 'Judith', 'Eveline', 'Lisa', ]
arr.length // => this will equal 3
arr[arr.length] // => this will be undefined
arr[arr.length - 1] // => this will be 'things'


/*const randomNumber = getRandomNumber(0, arr.length)

function getRandomNumber(min, max) {
        return Math.random() * (max - min) + min;
      } */// This code is not working!? 


function finder() {
  const insert_name = document.getElementById('insert_name').value
  const answerBox = document.getElementById('answer')

answerBox.innerHTML = insert_name + arr[arr.length - 1]

}
