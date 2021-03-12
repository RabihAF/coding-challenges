/** Challenge - Sqrt(x)
 * Given a non-negative integer x, compute and return the square root of x.
 * Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.
 *
 * Example 1:
 * Input: x = 4
 * Output: 2
 *
 * Example 2:
 * Input: x = 8
 * Output: 2
 * Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.
 *
 * Constraints:
 * 0 <= x <= 2^31 - 1
*/

// Binary Search: Search a sorted array by repeatedly dividing the search interval in half.
// Begin with an interval covering the whole array.
// If the value of the search key is less than the item in the middle of the interval, narrow the interval to the lower half.
// Otherwise narrow it to the upper half.
// Repeatedly check until the value is found or the interval is empty
// The idea of binary search is to use the information that the array is sorted and reduce the time complexity to O(Log n).

const mySqrtRecursiveBinarySearch = function (x) {
  if (x <= 1) return x
  return _mySqrtRecursiveBinarySearch(1, x, Math.trunc((1 + x) / 2), x)
}

const _mySqrtRecursiveBinarySearch = function (low, high, mid, x) {
  if (mid !== low) {
    const squareRoot = mid * mid
    if (squareRoot === x) return mid
    if (squareRoot < x) {
      low = mid
    } else {
      high = mid
    }
    mid = Math.trunc((low + high) / 2)
    return _mySqrtRecursiveBinarySearch(low, high, mid, x)
  } else {
    return low
  }
}

console.assert(mySqrtRecursiveBinarySearch(0) === 0, 'mySqrtRecursiveBinarySearch - case 1')
console.assert(mySqrtRecursiveBinarySearch(1) === 1, 'mySqrtRecursiveBinarySearch - case 2')
console.assert(mySqrtRecursiveBinarySearch(4) === 2, 'mySqrtRecursiveBinarySearch - case 3')
console.assert(mySqrtRecursiveBinarySearch(8) === 2, 'mySqrtRecursiveBinarySearch - case 4')
console.assert(mySqrtRecursiveBinarySearch(144) === 12, 'mySqrtRecursiveBinarySearch - case 5')
console.assert(mySqrtRecursiveBinarySearch(14466) === 120, 'mySqrtRecursiveBinarySearch - case 6')

const mySqrtX = function (x) {
  if (x <= 1) return x
  let low = 1
  let high = x
  let mid = Math.trunc((low + high) / 2)
  while (mid !== low) {
    const squareRoot = mid * mid
    if (squareRoot === x) return mid
    if (squareRoot < x) {
      low = mid
    } else {
      high = mid
    }
    mid = Math.trunc((low + high) / 2)
  }
  return low
}

console.assert(mySqrtX(0) === 0, 'mySqrtX - case 1')
console.assert(mySqrtX(1) === 1, 'mySqrtX - case 2')
console.assert(mySqrtX(4) === 2, 'mySqrtX - case 3')
console.assert(mySqrtX(8) === 2, 'mySqrtX - case 4')
console.assert(mySqrtX(144) === 12, 'mySqrtX - case 5')
console.assert(mySqrtX(14466) === 120, 'mySqrtX - case 6')

const mySqrtY = function (x) {
  if (x <= 1) return x
  let l = 1
  let r = x
  let last = 0
  while (l < r) {
    const mid = Math.trunc((l + r) / 2)
    if (mid === x / mid) return mid
    else if (mid < x / mid) {
      l = mid + 1
      last = mid
    } else r = mid
  }

  return last
}

console.assert(mySqrtY(0) === 0, 'mySqrtY - case 1')
console.assert(mySqrtY(1) === 1, 'mySqrtY - case 2')
console.assert(mySqrtY(4) === 2, 'mySqrtY - case 3')
console.assert(mySqrtY(8) === 2, 'mySqrtY - case 4')
console.assert(mySqrtY(144) === 12, 'mySqrtY - case 5')
console.assert(mySqrtY(14466) === 120, 'mySqrtY - case 6')

const mySqrtZ = function (x) {
  let start = 0
  let end = x

  if (x === 0) return 0
  while (start < end) {
    const m = Math.trunc(start + (end - start) / 2 + 1)
    if (m * m > x) {
      end = m - 1
    } else if (m * m <= x) {
      start = m
    } else {
      end = m
      break
    }
  }

  return start
}

console.assert(mySqrtZ(0) === 0, 'mySqrtZ - case 1')
console.assert(mySqrtZ(1) === 1, 'mySqrtZ - case 2')
console.assert(mySqrtZ(4) === 2, 'mySqrtZ - case 3')
console.assert(mySqrtZ(8) === 2, 'mySqrtZ - case 4')
console.assert(mySqrtZ(144) === 12, 'mySqrtZ - case 5')
console.assert(mySqrtZ(14466) === 120, 'mySqrtZ - case 6')
