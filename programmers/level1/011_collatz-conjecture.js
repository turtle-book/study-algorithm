// 콜라 문제 (Lv.1)
// https://school.programmers.co.kr/learn/courses/30/lessons/132267

function solution(a, b, n) {
  let result = 0;

  function exchange(num) {
    if (num < a) return;

    const quotient = Math.floor(num / a);
    const remainder = num % a;

    result += b * quotient;

    return exchange(b * quotient + remainder);
  }

  exchange(n);

  return result;
}

// test1
console.log(solution(2, 1, 20));
// test2
console.log(solution(3, 1, 20));
