/** Challenge - Valid Parentheses
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 *
 * An input string is valid if:
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 *
 * Example 1:
 * Input: s = "()"
 * Output: true
 *
 * Example 2:
 * Input: s = "()[]{}"
 * Output: true
 *
 * Example 3:
 * Input: s = "(]"
 * Output: false
 *
 * Example 4:
 * Input: s = "([)]"
 * Output: false
 *
 * Example 5:
 * Input: s = "{[]}"
 * Output: true
 *
 * Constraints:
 * 1 <= s.length <= 104
 * s consists of parentheses only '()[]{}'
 */

const isValid = function (s) {
  const bracketMap = {
    '(': ')',
    '[': ']',
    '{': '}'
  }

  const openBracketStack = []
  for (const bracket of s) {
    if (bracket in bracketMap) {
      openBracketStack.push(bracket)
    } else {
      if (bracketMap[openBracketStack.pop()] !== bracket) {
        return false
      }
    }
  };
  return !openBracketStack.length
}

console.assert(isValid('()') === true, 'isValid - case 1')
console.assert(isValid('()[]{}') === true, 'isValid - case 2')
console.assert(isValid('(]') === false, 'isValid - case 3')
console.assert(isValid('([)]') === false, 'isValid - case 4')
console.assert(isValid('{[]}') === true, 'isValid - case 5')
console.assert(isValid('{') === false, 'isValid - case 6')
console.assert(isValid(']') === false, 'isValid - case 7')
console.assert(isValid('(((((())))))') === true, 'isValid - case 8')
console.assert(isValid('()()()()') === true, 'isValid - case 9')
console.assert(isValid('((()(())))') === true, 'isValid - case 10')
console.assert(isValid('(((((((()') === false, 'isValid - case 11')
