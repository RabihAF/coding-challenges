/** Challenge - Roman to Integer
* Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
* Symbol       Value
* I             1
* V             5
* X             10
* L             50
* C             100
* D             500
* M             1000
* For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.
* Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:
* 
* I can be placed before V (5) and X (10) to make 4 and 9. 
* X can be placed before L (50) and C (100) to make 40 and 90. 
* C can be placed before D (500) and M (1000) to make 400 and 900.
* Given a roman numeral, convert it to an integer.
* 
* Example 1:
* Input: s = "III"
* Output: 3
* 
* Example 2:
* Input: s = "IV"
* Output: 4
* 
* Example 3:
* Input: s = "IX"
* Output: 9
* 
* Example 4:
* Input: s = "LVIII"
* Output: 58
* Explanation: L = 50, V= 5, III = 3.
* 
* Example 5:
* Input: s = "MCMXCIV"
* Output: 1994
* Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
*  
* Constraints:
* 1 <= s.length <= 15
* s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
* It is guaranteed that s is a valid roman numeral in the range [1, 3999].
*/

// arguably faster! skips some loops but the max n is only 15
let romanToInt = function (s) {
    result = 0
    romanMap = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };
    romanDepandMap = {
        "I": { "V": 4, "X": 9 },
        "X": { "L": 40, "C": 90 },
        "C": { "D": 400, "M": 900 }
    };

    for (let i = 0; i < s.length; i++) {
        currentChar = s[i];
        if (currentChar in romanDepandMap) {
            dependMap = romanDepandMap[currentChar]
            nextChar = s[i + 1]
            if (nextChar in dependMap) {
                result += dependMap[nextChar]
                i++;
            } else {
                result += romanMap[currentChar]
            }
        } else {
            result += romanMap[currentChar]
        }
    }

    return result
};

console.assert(romanToInt(s = "III") === 3, `romanToInt - case 1`);
console.assert(romanToInt(s = "IV") === 4, `romanToInt - case 2`);
console.assert(romanToInt(s = "IX") === 9, `romanToInt - case 3`);
console.assert(romanToInt(s = "LVIII") === 58, `romanToInt - case 4`);
console.assert(romanToInt(s = "MCMXCIV") === 1994, `romanToInt - case 5`);

// less memory
let romanToIntBackwards = function (s) {
    result = 0
    prevCharValue = 0;
    romanMap = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };

    for (let i = s.length - 1; i >= 0; i--) {
        currentChar = s[i];
        if (romanMap[currentChar] < prevCharValue) {
            result -= romanMap[currentChar]
        } else {
            prevCharValue = romanMap[currentChar]
            result += romanMap[currentChar]
        }
    }

    return result
};

console.assert(romanToIntBackwards(s = "III") === 3, `romanToIntBackwards - case 1`);
console.assert(romanToIntBackwards(s = "IV") === 4, `romanToIntBackwards - case 2`);
console.assert(romanToIntBackwards(s = "IX") === 9, `romanToIntBackwards - case 3`);
console.assert(romanToIntBackwards(s = "LVIII") === 58, `romanToIntBackwards - case 4`);
console.assert(romanToIntBackwards(s = "MCMXCIV") === 1994, `romanToIntBackwards - case 5`);