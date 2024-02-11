// 12. Integer to Roman (Medium)
// https://leetcode.com/problems/integer-to-roman

/**
 * Result
 * Runtime: 134 ms ~ 142 ms (16.34% ~ 18.42%)
 * Memory: 56.14 MB ~ 56.69 MB (7.97% ~ 9.81%)
 */ 

// 조건문을 활용해 각 자리의 숫자를 기준으로 분기
// 배열의 인덱스를 자릿수로 활용

/**
 * @param {number} num: 대상 정수
 * @return {string}: 대상 정수를 로마 숫자로 변경한 결과
 */
var intToRoman = function(num) {
  let answer = '';

  const roman = [
    [ 'I', 'V', 'IV', 'IX' ],
    [ 'X', 'L', 'XL', 'XC' ],
    [ 'C', 'D', 'CD', 'CM' ],
    [ 'M' ],
  ];

  const nums = num.toString().split('').map(Number);
  const maxDigit = nums.length - 1;
  nums.forEach((n, i) => {
    const digit = maxDigit - i;

    if (n === 0) return;
    else if (n === 9) answer += roman[digit][3];
    else if (n === 4) answer += roman[digit][2];
    else answer += (
      n >= 5 
        ? roman[digit][1] + roman[digit][0].repeat(n - 5) 
        : roman[digit][0].repeat(n)
    );
  });

  return answer;
};

// test1
console.log(intToRoman(3));
// test2
console.log(intToRoman(58));
// test3
console.log(intToRoman(1994));
