
/** Challenge - Implement strStr()
 * Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 *
 * Clarification:
 * What should we return when needle is an empty string? This is a great question to ask during an interview.
 * For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().
 *
 * Example 1:
 * Input: haystack = "hello", needle = "ll"
 * Output: 2
 *
 * Example 2:
 * Input: haystack = "aaaaa", needle = "bba"
 * Output: -1
 *
 * Example 3:
 * Input: haystack = "", needle = ""
 * Output: 0
 *
 * Constraints:
 * 0 <= haystack.length, needle.length <= 5 * 104
 * haystack and needle consist of only lower-case English characters.
 */

const strStr = function (haystack, needle) {
  if (!needle) return 0
  if (needle === haystack) return 0
  // avoid unnecessary loops
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    if (needle === haystack.slice(i, i + needle.length)) {
      return i
    }
  }
  return -1
}

console.assert(strStr('hello', 'll') === 2, 'strStr - case 1')
console.assert(strStr('aaaaa', 'bba') === -1, 'strStr - case 2')
console.assert(strStr('', '') === 0, 'strStr - case 3')
console.assert(strStr('aa', '') === 0, 'strStr - case 4')
console.assert(strStr('', 'll') === -1, 'strStr - case 5')
console.assert(strStr('hello', 'l') === 2, 'strStr - case 6')
console.assert(strStr('hello', 'e') === 1, 'strStr - case 7')
console.assert(strStr('hello', 'llol') === -1, 'strStr - case 8')
console.assert(strStr('hello', 'llolo') === -1, 'strStr - case 9')
console.assert(strStr('hello', 'llolou') === -1, 'strStr - case 10')
console.assert(strStr('hello', 'llolouss') === -1, 'strStr - case 11')
console.assert(strStr('hello', 'hello') === 0, 'strStr - case 12')
