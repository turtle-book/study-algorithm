// 내적 (Lv.1)
// https://school.programmers.co.kr/learn/courses/30/lessons/70128

function solution(a, b) {
  return a.reduce((acc, _, i) => acc + (a[i] * b[i]), 0);
}

// test1
const a1 = [1,2,3,4];
const b1 = [-3,-1,0,2];
console.log(solution(a1, b1));
// test1
const a2 = [-1,0,1];
const b2 = [1,0,-1];
console.log(solution(a2, b2));
