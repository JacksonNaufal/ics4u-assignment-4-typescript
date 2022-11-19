/**
 * The program is the classic
 * what hourglass program
 *
 * By:      Jackson Naufal
 * Version: 1.0
 * Since:   2020-11-19
 */

import promptSync from 'prompt-sync'

const prompt = promptSync()
/**
 *
 * This is the towerOfHanoi function.
 *
 * @param {number} userInput of disks
 * @param {number} mid the first peg
 */
function hourglass(userInput: number, mid: number): void {
  // if the user inputs 1, there is only 1 step

  let hrGlass = ''
  let counter1 = 0
  let counter2 = 0
  for (counter1 = 0; counter1 < mid; counter1++) {
    hrGlass += ' '
  }

  for (counter2 = 0; counter2 < userInput; counter2++) {
    hrGlass += '* '
  }
  console.log(hrGlass)
  if (userInput > 1) {
    hourglass(userInput - 1, mid + 1)
  }
  console.log(hrGlass)
}

// Asks for the users input
console.log('This is a tower of hanoi program')

// asks for the user input
const userNum = Number(prompt('Enter how many disks (1 - inf) '))

// Checks inputs validity
if (isNaN(userNum)) {
  console.log('Invalid Input!')
} else if (userNum <= 0) {
  console.log('Invalid Input!')
} else {
  hourglass(userNum, 0)
}
console.log('\nDone.')
