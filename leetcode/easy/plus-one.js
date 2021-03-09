/** Challenge - Plus One
 * Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.
 * The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.
 * You may assume the integer does not contain any leading zero, except the number 0 itself.
 *
 * Example 1:
 * Input: digits = [1,2,3]
 * Output: [1,2,4]
 * Explanation: The array represents the integer 123.
 *
 * Example 2:
 * Input: digits = [4,3,2,1]
 * Output: [4,3,2,2]
 * Explanation: The array represents the integer 4321.
 *
 * Example 3:
 * Input: digits = [0]
 * Output: [1]
 *
 * Constraints:
 * 1 <= digits.length <= 100
 * 0 <= digits[i] <= 9
 */

const plusOne = function (digits) {
  const lastDigit = digits[digits.length - 1]
  if (lastDigit !== 9) {
    digits.pop()
    digits.push(lastDigit + 1)
    return digits
  } else {
    let depth = 0
    for (let i = digits.length - 1; i >= 0; i--) {
      if (digits[i] !== 9) {
        break
      }
      digits.pop()
      depth++
    }
    // if it's not empty then first digit is not 9
    if (digits.length) {
      const currentLastDigit = digits[digits.length - 1]
      digits.pop()
      digits.push(currentLastDigit + 1)
    } else {
      digits.push(1)
    }
    for (let j = 0; j < depth; j++) {
      digits.push(0)
    }
    return digits
  }
}

console.assert(JSON.stringify(plusOne([1, 2, 3])) === JSON.stringify([1, 2, 4]), 'plusOne - case 1')
console.assert(JSON.stringify(plusOne([4, 3, 2, 1])) === JSON.stringify([4, 3, 2, 2]), 'plusOne - case 2')
console.assert(JSON.stringify(plusOne([0])) === JSON.stringify([1]), 'plusOne - case 3')
console.assert(JSON.stringify(plusOne([1, 9])) === JSON.stringify([2, 0]), 'plusOne - case 4')
console.assert(JSON.stringify(plusOne([9])) === JSON.stringify([1, 0]), 'plusOne - case 5')
console.assert(JSON.stringify(plusOne([1, 9, 9, 9, 9, 9, 9])) === JSON.stringify([2, 0, 0, 0, 0, 0, 0]), 'plusOne - case 6')
console.assert(JSON.stringify(plusOne([9, 9, 9, 9, 9, 9, 9])) === JSON.stringify([1, 0, 0, 0, 0, 0, 0, 0]), 'plusOne - case 7')

const plusOneEfficient = function (digits) {
  let carry = 1
  let i
  for (i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0
    } else {
      carry += digits[i]
      digits[i] = carry
      break
    }
  }
  // we never break out of the loop i.e. array of 9's
  if (i === -1) {
    const n = digits.length + 1
    const result = new Array(n)
    for (let i = 0; i < n; i++) result[i] = 0
    result[0] = 1
    return result
  }
  return digits
}

console.assert(JSON.stringify(plusOneEfficient([1, 2, 3])) === JSON.stringify([1, 2, 4]), 'plusOneEfficient - case 1')
console.assert(JSON.stringify(plusOneEfficient([4, 3, 2, 1])) === JSON.stringify([4, 3, 2, 2]), 'plusOneEfficient - case 2')
console.assert(JSON.stringify(plusOneEfficient([0])) === JSON.stringify([1]), 'plusOneEfficient - case 3')
console.assert(JSON.stringify(plusOneEfficient([1, 9])) === JSON.stringify([2, 0]), 'plusOneEfficient - case 4')
console.assert(JSON.stringify(plusOneEfficient([9])) === JSON.stringify([1, 0]), 'plusOneEfficient - case 5')
console.assert(JSON.stringify(plusOneEfficient([1, 9, 9, 9, 9, 9, 9])) === JSON.stringify([2, 0, 0, 0, 0, 0, 0]), 'plusOneEfficient - case 6')
console.assert(JSON.stringify(plusOneEfficient([9, 9, 9, 9, 9, 9, 9])) === JSON.stringify([1, 0, 0, 0, 0, 0, 0, 0]), 'plusOneEfficient - case 7')
