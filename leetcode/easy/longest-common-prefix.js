/** Challenge - Longest Common Prefix
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 *
 * Example 1:
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 *
 * Example 2:
 * Input: strs = ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 *
 * Constraints:
 * 0 <= strs.length <= 200
 * 0 <= strs[i].length <= 200
 * strs[i] consists of only lower-case English letters.
 */

const longestCommonPrefixScan0ne = function (strs) {
  let prefix = strs.length > 0 ? strs[0] : ''

  for (let i = 1; i < strs.length; i++) {
    const item = strs[i]
    // we are checking each char in prefix from start to end e.g. f fl flo
    if (!item.startsWith(prefix)) {
      let newPrefix = ''
      for (const char of prefix) {
        if (item.startsWith(newPrefix + char)) {
          newPrefix += char
        } else {
          break
        }
      };
      if (newPrefix === '') {
        return newPrefix
      } else {
        prefix = newPrefix
      }
    }
  };

  return prefix
}

console.assert(longestCommonPrefixScan0ne(['flower', 'flow', 'flight']) === 'fl', 'longestCommonPrefixScan0ne - case 1')
console.assert(longestCommonPrefixScan0ne(['dog', 'racecar', 'car']) === '', 'longestCommonPrefixScan0ne - case 2')
console.assert(longestCommonPrefixScan0ne(['dog']) === 'dog', 'longestCommonPrefixScan0ne - case 3')
console.assert(longestCommonPrefixScan0ne([]) === '', 'longestCommonPrefixScan0ne - case 4')
console.assert(longestCommonPrefixScan0ne(['flower', '', 'flight']) === '', 'longestCommonPrefixScan0ne - case 5')
console.assert(longestCommonPrefixScan0ne(['', 'flow', 'flight']) === '', 'longestCommonPrefixScan0ne - case 6')
console.assert(longestCommonPrefixScan0ne(['flower', 'flow', '']) === '', 'longestCommonPrefixScan0ne - case 7')
console.assert(longestCommonPrefixScan0ne(['flow', 'flower', 'flight']) === 'fl', 'longestCommonPrefixScan0ne - case 8')
console.assert(longestCommonPrefixScan0ne(['leetcode', 'leet', 'lee', 'le']) === 'le', 'longestCommonPrefixScan0ne - case 9')
console.assert(longestCommonPrefixScan0ne(['flower', 'flower', 'flower']) === 'flower', 'longestCommonPrefixScan0ne - case 10')

const longestCommonPrefixScanTwo = function (strs) {
  let prefix = strs.length > 0 ? strs[0] : ''
  for (let i = 1; i < strs.length; i++) {
    // we are checking the prefix from end to start e.g. flower flowe flow
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1)
      if (!prefix) return ''
    }
  };

  return prefix
}

console.assert(longestCommonPrefixScanTwo(['flower', 'flow', 'flight']) === 'fl', 'longestCommonPrefixScanTwo - case 1')
console.assert(longestCommonPrefixScanTwo(['dog', 'racecar', 'car']) === '', 'longestCommonPrefixScanTwo - case 2')
console.assert(longestCommonPrefixScanTwo(['dog']) === 'dog', 'longestCommonPrefixScanTwo - case 3')
console.assert(longestCommonPrefixScanTwo([]) === '', 'longestCommonPrefixScanTwo - case 4')
console.assert(longestCommonPrefixScanTwo(['flower', '', 'flight']) === '', 'longestCommonPrefixScanTwo - case 5')
console.assert(longestCommonPrefixScanTwo(['', 'flow', 'flight']) === '', 'longestCommonPrefixScanTwo - case 6')
console.assert(longestCommonPrefixScanTwo(['flower', 'flow', '']) === '', 'longestCommonPrefixScanTwo - case 7')
console.assert(longestCommonPrefixScanTwo(['flow', 'flower', 'flight']) === 'fl', 'longestCommonPrefixScanTwo - case 8')
console.assert(longestCommonPrefixScanTwo(['leetcode', 'leet', 'lee', 'le']) === 'le', 'longestCommonPrefixScanTwo - case 9')
console.assert(longestCommonPrefixScanTwo(['flower', 'flower', 'flower']) === 'flower', 'longestCommonPrefixScanTwo - case 10')

const longestCommonPrefixScanCharScan = function (strs) {
  if (strs.length === 0) return ''
  for (let i = 0; i < strs[0].length; i++) {
    const char = strs[0][i]
    // we are checking each char in strs[0] compared to the others e.g. check f first against all ...
    for (let j = 1; j < strs.length; j++) {
      if (i === strs[j].length || strs[j][i] !== char) {
        return strs[0].substring(0, i)
      }
    };
  };
  return strs[0]
}

console.assert(longestCommonPrefixScanCharScan(['flower', 'flow', 'flight']) === 'fl', 'longestCommonPrefixScanCharScan - case 1')
console.assert(longestCommonPrefixScanCharScan(['dog', 'racecar', 'car']) === '', 'longestCommonPrefixScanCharScan - case 2')
console.assert(longestCommonPrefixScanCharScan(['dog']) === 'dog', 'longestCommonPrefixScanCharScan - case 3')
console.assert(longestCommonPrefixScanCharScan([]) === '', 'longestCommonPrefixScanCharScan - case 4')
console.assert(longestCommonPrefixScanCharScan(['flower', '', 'flight']) === '', 'longestCommonPrefixScanCharScan - case 5')
console.assert(longestCommonPrefixScanCharScan(['', 'flow', 'flight']) === '', 'longestCommonPrefixScanCharScan - case 6')
console.assert(longestCommonPrefixScanCharScan(['flower', 'flow', '']) === '', 'longestCommonPrefixScanCharScan - case 7')
console.assert(longestCommonPrefixScanCharScan(['flow', 'flower', 'flight']) === 'fl', 'longestCommonPrefixScanCharScan - case 8')
console.assert(longestCommonPrefixScanCharScan(['leetcode', 'leet', 'lee', 'le']) === 'le', 'longestCommonPrefixScanCharScan - case 9')
console.assert(longestCommonPrefixScanCharScan(['flower', 'flower', 'flower']) === 'flower', 'longestCommonPrefixScanCharScan - case 10')

const longestCommonPrefixDivideAndConquer = function (strs) {
  if (strs.length === 0) return ''
  return _longestCommonPrefixDAC(strs, 0, strs.length - 1)
}

function _longestCommonPrefixDAC (strs, leftIndex, rightIndex) {
  if (leftIndex === rightIndex) {
    return strs[leftIndex]
  } else {
    const middleIndex = parseInt((leftIndex + rightIndex) / 2)
    const leftString = _longestCommonPrefixDAC(strs, leftIndex, middleIndex)
    const rightString = _longestCommonPrefixDAC(strs, middleIndex + 1, rightIndex)
    return _commonPrefix(leftString, rightString)
  }
}

function _commonPrefix (leftString, rightString) {
  const min = Math.min(leftString.length, rightString.length)
  for (let i = 0; i < min; i++) {
    if (leftString[i] !== rightString[i]) {
      return leftString.substring(0, i)
    }
  };
  return leftString.substring(0, min)
}

console.assert(longestCommonPrefixDivideAndConquer(['flower', 'flow', 'flight']) === 'fl', 'longestCommonPrefixDivideAndConquer - case 1')
console.assert(longestCommonPrefixDivideAndConquer(['dog', 'racecar', 'car']) === '', 'longestCommonPrefixDivideAndConquer - case 2')
console.assert(longestCommonPrefixDivideAndConquer(['dog']) === 'dog', 'longestCommonPrefixDivideAndConquer - case 3')
console.assert(longestCommonPrefixDivideAndConquer([]) === '', 'longestCommonPrefixDivideAndConquer - case 4')
console.assert(longestCommonPrefixDivideAndConquer(['flower', '', 'flight']) === '', 'longestCommonPrefixDivideAndConquer - case 5')
console.assert(longestCommonPrefixDivideAndConquer(['', 'flow', 'flight']) === '', 'longestCommonPrefixDivideAndConquer - case 6')
console.assert(longestCommonPrefixDivideAndConquer(['flower', 'flow', '']) === '', 'longestCommonPrefixDivideAndConquer - case 7')
console.assert(longestCommonPrefixDivideAndConquer(['flow', 'flower', 'flight']) === 'fl', 'longestCommonPrefixDivideAndConquer - case 8')
console.assert(longestCommonPrefixDivideAndConquer(['leetcode', 'leet', 'lee', 'le']) === 'le', 'longestCommonPrefixDivideAndConquer - case 9')
console.assert(longestCommonPrefixDivideAndConquer(['flower', 'flower', 'flower']) === 'flower', 'longestCommonPrefixDivideAndConquer - case 10')
