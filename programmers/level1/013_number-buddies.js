// 숫자 짝꿍 (Lv.1)
// https://school.programmers.co.kr/learn/courses/30/lessons/131128

function solution(X, Y) {
  // 배열의 인덱스를 각 자리 숫자로 하여 [x, y] 형식으로 카운트
  const countNumber = Array.from({ length: 10 }, () => [0, 0]);
  const numX = X.split("").map(Number);
  const numY = Y.split("").map(Number);
  for (let i = 0; i < numX.length; i++) {
    countNumber[numX[i]][0]++;
  }
  for (let j = 0; j < numY.length; j++) {
    countNumber[numY[j]][1]++;
  }

  // [x, y]의 x, y 중 최솟값을 다시 원소로 갖는 배열 생성
  const countResult = countNumber.map(([x, y]) => Math.min(x, y));

  // 짝꿍을 구하기 위해 공통으로 나타나는 숫자 중 큰 수부터 차례로 나열
  let result = "";
  for (let n = 9; n >= 0; n--) {
    const count = countResult[n];
    if (count > 0) result += n.toString().repeat(count);
  }

  if (!result) return "-1";
  if (result[0] === "0") return "0";
  return result;
}

// test1
const X1 = "100", Y1 = "2345";
console.log(solution(X1, Y1));
// test2
const X2 = "100", Y2 = "203045";
console.log(solution(X2, Y2));
// test3
const X3 = "100", Y3 = "123450";
console.log(solution(X3, Y3));
// test4
const X4 = "12321", Y4 = "42531";
console.log(solution(X4, Y4));
// test5
const X5 = "5525", Y5 = "1255";
console.log(solution(X5, Y5));
