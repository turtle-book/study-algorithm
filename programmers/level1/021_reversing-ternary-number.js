// 3진법 뒤집기 (Lv.1)
// https://school.programmers.co.kr/learn/courses/30/lessons/68935

function solution(n) {
  const ternaryNumber = n.toString(3);
  const reverseTernaryNumber = ternaryNumber.split("").reverse().join("");
  const answer = parseInt(reverseTernaryNumber, 3);
  return answer;
}

// test1
console.log(solution(45));
// test2
console.log(solution(125));
