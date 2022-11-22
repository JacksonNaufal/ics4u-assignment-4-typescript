/**
 * The program is the classic
 * hourglass program
 *
 * By:      Jackson Naufal
 * Version: 1.0
 * Since:   2020-11-19
 */

import promptSync from 'prompt-sync'

const prompt = promptSync()

/**
 *
 * This is the hourglass function.
 *
 * @param {number} userInput of the sand
 * @param {number} mid of the hourglass
 */
function hourglass(userInput: number, mid: number): void {
  // these are the variables
  let hrGlass = ''

  // this is the loop for the blankspace
  for (let counter1 = 0; counter1 < mid; counter1++) {
    hrGlass += ' '
  }

  // this is where the * are placed
  for (let counter2 = 0; counter2 < userInput; counter2++) {
    hrGlass += '* '
  }
  console.log(hrGlass)

  // recurrsive formula.
  if (userInput > 1) {
    hourglass(userInput - 1, mid + 1)
  }
  console.log(hrGlass)
}

// What the program is
console.log('This is a hourglass program!')

// asks for the user input
const userNum = Number(prompt('Enter sand amount: '))
console.log('')

// Checks inputs validity
if (isNaN(userNum)) {
  console.log('Invalid Input!')
} else if (userNum <= 0) {
  console.log('Invalid Input!')
} else {
  hourglass(userNum, 0)
}
console.log('\nDone.')
