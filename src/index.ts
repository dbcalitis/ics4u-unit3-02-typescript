/**
 * The program gives the factorial of the given number.
 *
 * By:      Daria Bernice Calitis
 * Version: 1.0
 * Since:   2022-11-07
 */

import promptSync from 'prompt-sync'

const prompt = promptSync()

/**
 * reverseString
 *
 * @param {number} num accepts a string
 * @returns {number} the string backwards, using recursion.
 */
function factorial(num: number): number {
  if (num < 0) {
    return -1
  } else if (num === 0) {
    return 1
  } else {
    return factorial(num - 1) * num
  }
}

// Input
const numInput = prompt('Enter a number: ')

// Process and Output
console.log(`${numInput}! = ${String(factorial(Number(numInput)))}`)

console.log('\nDone.')
