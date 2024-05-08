// 과일 장수 (Lv.1)
// https://school.programmers.co.kr/learn/courses/30/lessons/135808

function solution(k, m, score) {
  let result = 0;

  score.sort((a, b) => b - a);

  for (let i = m - 1; i < score.length; i += m) {
    result += score[i] * m;
  }

  return result;
}

// test1
const k1 = 3, m1 = 4, score1 = [1, 2, 3, 1, 2, 3, 1];
console.log(solution(k1, m1, score1));
// test2
const k2 = 4, m2 = 3, score2 = [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2];
console.log(solution(k2, m2, score2));
