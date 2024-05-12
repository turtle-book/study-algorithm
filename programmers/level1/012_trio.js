// 삼총사 (Lv.1)
// https://school.programmers.co.kr/learn/courses/30/lessons/131705

// 예상 시간복잡도: O(number^2)

function solution(number) {
  let result = 0;

  // n개 중 2개를 고르는 경우의 수(콤비네이션) 계산 함수
  function combination(n) {
    function factorial(n) {
      return (n === 0 || n === 1) ? 1 : n * factorial(n - 1);
    }
    return factorial(n) / (2 * factorial(n - 2));
  }

  number.sort((a, b) => a - b);

  for (let i = 0; i < number.length - 2; i++) {
    const target = -number[i];
    let left = i + 1, right = number.length - 1;
    while (left < right) {
      const duoSum = number[left] + number[right];
      if (duoSum > target) {
        right--;
      } else if (duoSum < target) {
        left++;
      } else {
        // 같은 값이 연속되어 좌우가 연결되면 콤비네이션 계산
        if (number[left] === number[right]) {
          result += combination(right - left + 1);
          break;
        // 연결되지 않아 좌우 분리되면 곱셈 계산
        } else {
          const leftStart = left;
          const rightStart = right;
          const leftValue = number[left];
          const rightValue = number[right];
          while (number[left] === leftValue) left++
          while (number[right] === rightValue) right--;
          result += ((left - leftStart) * (rightStart - right)); 
        }
      }
    }
  }

  return result;
}

// test1
const number1 = [-2, 3, 0, 2, -5];
console.log(solution(number1));
// test2
const number2 = [-3, -2, -1, 0, 1, 2, 3];
console.log(solution(number2));
// test3
const number3 = [-1, 1, -1, 1];
console.log(solution(number3));
