/** Challenge - Maximum Subarray
 * Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
 *
 * Example 1:
 * Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
 * Output: 6
 * Explanation: [4,-1,2,1] has the largest sum = 6.
 *
 * Example 2:
 * Input: nums = [1]
 * Output: 1
 *
 * Example 3:
 * Input: nums = [0]
 * Output: 0
 *
 * Example 4:
 * Input: nums = [-1]
 * Output: -1
 *
 * Example 5:
 * Input: nums = [-100000]
 * Output: -100000
 *
 * Constraints:
 * 1 <= nums.length <= 3 * 104
 * -105 <= nums[i] <= 105
*/

const maxSubArrayIterative = function (nums) {
  let sum = nums[0]
  let individualSum = sum
  let iterativeSum = sum
  let subSum = sum
  for (let i = 0; i < nums.length; i++) {
    individualSum = iterativeSum = subSum = nums[i]
    for (let j = i + 1; j < nums.length; j++) {
      iterativeSum += nums[j]
      if (subSum < iterativeSum) {
        subSum = iterativeSum
      }
    }
    if (sum < individualSum) {
      sum = individualSum
    }
    if (sum < iterativeSum) {
      sum = iterativeSum
    }
    if (sum < subSum) {
      sum = subSum
    }
  }
  return sum
}

console.assert(maxSubArrayIterative([-2, 1, -3, 4, -1, 2, 1, -5, 4]) === 6, 'maxSubArrayIterative - case 1')
console.assert(maxSubArrayIterative([1]) === 1, 'maxSubArrayIterative - case 2')
console.assert(maxSubArrayIterative([0]) === 0, 'maxSubArrayIterative - case 3')
console.assert(maxSubArrayIterative([-1]) === -1, 'maxSubArrayIterative - case 4')
console.assert(maxSubArrayIterative([-100000]) === -100000, 'maxSubArrayIterative - case 5')
console.assert(maxSubArrayIterative([6, -1, 1, -2, 6, -3, 1, 1]) === 10, 'maxSubArrayIterative - case 6')
console.assert(maxSubArrayIterative([10, 10]) === 20, 'maxSubArrayIterative - case 7')
console.assert(maxSubArrayIterative([10, -9, 10]) === 11, 'maxSubArrayIterative - case 8')
console.assert(maxSubArrayIterative([-10, 90, -20]) === 90, 'maxSubArrayIterative - case 9')
console.assert(maxSubArrayIterative([-10, 90, -100, 110]) === 110, 'maxSubArrayIterative - case 10')
console.assert(maxSubArrayIterative([-10, -90, -20]) === -10, 'maxSubArrayIterative - case 11')
console.assert(maxSubArrayIterative([-40, -10, -20]) === -10, 'maxSubArrayIterative - case 12')

// The simple idea of Kadane’s algorithm is to look for all positive contiguous segments of the array
const maxSubArrayKadanes = function (nums) {
  let maxSoFar = nums[0]
  let maxEndingHere = 0

  for (let i = 0; i < nums.length; i++) {
    maxEndingHere = maxEndingHere + nums[i]
    if (maxSoFar < maxEndingHere) {
      maxSoFar = maxEndingHere
    }
    if (maxEndingHere < 0) {
      maxEndingHere = 0
    }
  }
  return maxSoFar
}

console.assert(maxSubArrayKadanes([-2, 1, -3, 4, -1, 2, 1, -5, 4]) === 6, 'maxSubArrayKadanes - case 1')
console.assert(maxSubArrayKadanes([1]) === 1, 'maxSubArrayKadanes - case 2')
console.assert(maxSubArrayKadanes([0]) === 0, 'maxSubArrayKadanes - case 3')
console.assert(maxSubArrayKadanes([-1]) === -1, 'maxSubArrayKadanes - case 4')
console.assert(maxSubArrayKadanes([-100000]) === -100000, 'maxSubArrayKadanes - case 5')
console.assert(maxSubArrayKadanes([6, -1, 1, -2, 6, -3, 1, 1]) === 10, 'maxSubArrayKadanes - case 6')
console.assert(maxSubArrayKadanes([10, 10]) === 20, 'maxSubArrayKadanes - case 7')
console.assert(maxSubArrayKadanes([10, -9, 10]) === 11, 'maxSubArrayKadanes - case 8')
console.assert(maxSubArrayKadanes([-10, 90, -20]) === 90, 'maxSubArrayKadanes - case 9')
console.assert(maxSubArrayKadanes([-10, 90, -100, 110]) === 110, 'maxSubArrayKadanes - case 10')
console.assert(maxSubArrayKadanes([-10, -90, -20]) === -10, 'maxSubArrayKadanes - case 11')
console.assert(maxSubArrayKadanes([-40, -10, -20]) === -10, 'maxSubArrayKadanes - case 12')
