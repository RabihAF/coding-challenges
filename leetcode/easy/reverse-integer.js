/** Challenge - Reverse Integer
* Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
* Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
*
* Example 1:
* Input: x = 123
* Output: 321
*
* Example 2:
* Input: x = -123
* Output: -321
*
* Example 3:
* Input: x = 120
* Output: 21
*
* Example 4:
* Input: x = 0
* Output: 0
*
* Constraints:
* -231 <= x < 231 - 1
*/

const reverseBad = function (x) {
  let positive = true
  if (x < 0) {
    positive = false
    x = Math.abs(x)
  }
  const xString = x.toString()
  let output = ''
  for (let i = xString.length - 1; i >= 0; i--) {
    output += xString[i]
  }
  output = parseInt(output)
  if (output > 0x7FFFFFFF) {
    return 0
  }
  if (positive) {
    return output
  }
  return -output
}

console.assert(reverseBad(123) === 321, 'reverseBad - case 1')
console.assert(reverseBad(-123) === -321, 'reverseBad - case 2')
console.assert(reverseBad(120) === 21, 'reverseBad - case 3')
console.assert(reverseBad(0) === 0, 'reverseBad - case 4')
console.assert(reverseBad(0x7FFFFFFF) === 0, 'reverseBad - case 5')

const reverseClean = function (x) {
  // unary plus operator - conversion of string to number
  const reverseX = +String(Math.abs(x)).split('').reverse().join('')
  if (reverseX > 0x7FFFFFFF) {
    return 0
  }
  return x < 0 ? -reverseX : reverseX
}

console.assert(reverseClean(123) === 321, 'reverseClean - case 1')
console.assert(reverseClean(-123) === -321, 'reverseClean - case 2')
console.assert(reverseClean(120) === 21, 'reverseClean - case 3')
console.assert(reverseClean(0) === 0, 'reverseClean - case 4')
console.assert(reverseClean(0x7FFFFFFF) === 0, 'reverseClean - case 5')

const reverseEfficient = function (x) {
  let reverseX = 0
  const sign = x < 0
  x = Math.abs(x)
  while (x) {
    // push
    reverseX = reverseX * 10 + (x % 10)
    // pop
    x = Math.floor(x / 10)
  }
  return reverseX > 0x7FFFFFFF ? 0 : sign ? -reverseX : reverseX
}

console.assert(reverseEfficient(123) === 321, 'reverseEfficient - case 1')
console.assert(reverseEfficient(-123) === -321, 'reverseEfficient - case 2')
console.assert(reverseEfficient(120) === 21, 'reverseEfficient - case 3')
console.assert(reverseEfficient(0) === 0, 'reverseEfficient - case 4')
console.assert(reverseEfficient(0x7FFFFFFF) === 0, 'reverseEfficient - case 5')
