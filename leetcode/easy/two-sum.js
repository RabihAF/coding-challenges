/** Challenge - Two Sum
* Given an array of integers nums and an integer target, return indices of * the two numbers such that they add up to target.
* You may assume that each input would have exactly one solution, and you * may not use the same element twice.
* You can return the answer in any order.
*
* Example 1:
* Input: nums = [2,7,11,15], target = 9
* Output: [0,1]
* Output: Because nums[0] + nums[1] == 9, we return [0, 1].
*
* Example 2:
* Input: nums = [3,2,4], target = 6
* Output: [1,2]
*
* Example 3:
* Input: nums = [3,3], target = 6
* Output: [0,1]
*
* Constraints:
* 2 <= nums.length <= 103
* -109 <= nums[i] <= 109
* -109 <= target <= 109
* Only one valid answer exists.
*/

// Time complexity: O(n^2) | Space complexity: O(1)
const twoSumBruteForce = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
}

console.assert(JSON.stringify(twoSumBruteForce([2, 7, 11, 15], 9)) === JSON.stringify([0, 1]), 'twoSumBruteForce - case 1')
console.assert(JSON.stringify(twoSumBruteForce([3, 2, 4], 6)) === JSON.stringify([1, 2]), 'twoSumBruteForce - case 2')
console.assert(JSON.stringify(twoSumBruteForce([3, 3], 6)) === JSON.stringify([0, 1]), 'twoSumBruteForce - case 3')

// Time complexity : O(n) | Space complexity : O(n)
const twoSumHashTable = function (nums, target) {
  const numsHashMap = {}

  for (let i = 0; i < nums.length; i++) {
    numsHashMap[nums[i]] = i
  }

  for (let i = 0; i < nums.length; i++) {
    const otherHalf = target - nums[i]
    if (numsHashMap[otherHalf] && numsHashMap[otherHalf] !== i) {
      return [i, numsHashMap[otherHalf]]
    }
  }
}

console.assert(JSON.stringify(twoSumHashTable([2, 7, 11, 15], 9)) === JSON.stringify([0, 1]), 'twoSumHashTable - case 1')
console.assert(JSON.stringify(twoSumHashTable([3, 2, 4], 6)) === JSON.stringify([1, 2]), 'twoSumHashTable - case 2')
console.assert(JSON.stringify(twoSumHashTable([3, 3], 6)) === JSON.stringify([0, 1]), 'twoSumHashTable - case 3')

// Time complexity : O(n) | Space complexity : O(n)
const twoSumHashTableOneLoop = function (nums, target) {
  const numsHashMap = {}
  for (let i = 0; i < nums.length; i++) {
    const otherHalf = target - nums[i]
    // if (numsHashMap[otherHalf] !== undefined) {
    if (otherHalf in numsHashMap) {
      return [numsHashMap[otherHalf], i]
    }
    numsHashMap[nums[i]] = i
  }
}

console.assert(JSON.stringify(twoSumHashTableOneLoop([2, 7, 11, 15], 9)) === JSON.stringify([0, 1]), 'twoSumHashTableOneLoop - case 1')
console.assert(JSON.stringify(twoSumHashTableOneLoop([3, 2, 4], 6)) === JSON.stringify([1, 2]), 'twoSumHashTableOneLoop - case 2')
console.assert(JSON.stringify(twoSumHashTableOneLoop([3, 3], 6)) === JSON.stringify([0, 1]), 'twoSumHashTableOneLoop - case 3')
