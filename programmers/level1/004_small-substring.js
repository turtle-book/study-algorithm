// 크기가 작은 부분문자열 (Lv.1)
// https://school.programmers.co.kr/learn/courses/30/lessons/147355

function solution(t, p) {
  let result = 0;
  const lengthT = t.length;
  const lengthP = p.length;
  const numberP = Number(p);

  for (let i = 0; i <= lengthT - lengthP; i++) {
    if (t[i] < p[0]) {
      result++;
    } else if (t[i] === p[0]) {
      const numberT = Number(t.substring(i, i + lengthP));
      if (numberT <= numberP) result++;
    }
  }

  return result;
}

// test1
const t1 = "3141592", p1 = "271";
console.log(solution(t1, p1));
// test2
const t2 = "500220839878", p2 = "7";
console.log(solution(t2, p2));
// test3
const t3 = "10203", p3 = "15";
console.log(solution(t3, p3));
