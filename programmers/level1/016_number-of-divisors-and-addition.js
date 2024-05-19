// 약수의 개수와 덧셈 (Lv.1)
// https://school.programmers.co.kr/learn/courses/30/lessons/77884

function solution(left, right) {
  let result = 0;

  for (let num = left; num <= right; num++) {
    const sqrtNum = Math.sqrt(num);
    if (sqrtNum === Math.floor(sqrtNum)) result -= num;
    else result += num;
  }

  return result;
}

// test1
console.log(solution(13, 17));
// test2
console.log(solution(24, 27));
