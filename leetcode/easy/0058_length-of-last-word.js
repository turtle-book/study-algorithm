// 58. Length of Last Word (Easy)
// https://leetcode.com/problems/length-of-last-word

/**
 * Result
 * Runtime: 46 ms ~ 56 ms (34.36% ~ 85.26%)
 * Memory: 48.56 MB ~ 48.81 MB (26.38% ~ 42.84%)
 */

// trim() 메서드를 통해 문자열 양 옆 공백 제거
// split() 메서드를 통해 공백을 기준으로 문자열 분해

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  const words = s.trim().split(' ');
  const length = words.length;
  return words[length - 1].length;
};

// test1
const s1 = "Hello World";
console.log(lengthOfLastWord(s1));
// test2
const s2 = "   fly me   to   the moon  ";
console.log(lengthOfLastWord(s2));
// test3
const s3 = "luffy is still joyboy";
console.log(lengthOfLastWord(s3));
