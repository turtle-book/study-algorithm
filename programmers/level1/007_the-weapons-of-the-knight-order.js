// 기사단원의 무기 (Lv.1)
// https://school.programmers.co.kr/learn/courses/30/lessons/136798

function solution(number, limit, power) {
  const numbers = Array.from({ length: number }, (_, i) => i + 1);
  // 약수의 개수를 반환하는 함수
  function countAliquot(num) {
    let count = 0;
    for (let n = 1; n <= Math.sqrt(num); n++) {
      if (num % n === 0) n === num / n ? count += 1 : count += 2;
    }
    return count;
  }

  return numbers.reduce((acc, cur) => {
    const aliquot = countAliquot(cur);
    return acc + (aliquot > limit ? power : aliquot);
  }, 0);
}

// test1
const number1 = 5, limit1 = 3, power1 = 2;
console.log(solution(number1, limit1, power1));
// test2
const number2 = 10, limit2 = 3, power2 = 2;
console.log(solution(number2, limit2, power2));
