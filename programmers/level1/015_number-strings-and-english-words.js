// 숫자 문자열과 영단어 (Lv.1)
// https://school.programmers.co.kr/learn/courses/30/lessons/81301

function solution(s) {
  const table = {
    "zero": "0", "one": "1", "two": "2", "three": "3", "four": "4", 
    "five": "5", "six": "6", "seven": "7", "eight": "8", "nine": "9",
  };

  let result = "";
  let tmp = "";
  for (let i = 0; i < s.length; i++) {
    if (!isNaN(s[i])) {
      result += s[i];
    } else {
      tmp += s[i];
      if (table[tmp]) {
        result += table[tmp];
        tmp = "";
      }
    }
  }

  return Number(result);
}

// test1
console.log(solution("one4seveneight"));
// test2
console.log(solution("23four5six7"));
// test3
console.log(solution("2three45sixseven"));
// test4
console.log(solution("123"));
