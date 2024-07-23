// 두 개 뽑아서 더하기 (Lv.1)
// https://school.programmers.co.kr/learn/courses/30/lessons/68644

function solution(numbers) {
  const result = new Set();
  numbers.sort((a, b) => a - b);
  let num = -1;
  for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i] === num) {
      continue;
    } else {
      for (let j = i + 1; j < numbers.length; j++) {
        result.add(numbers[i] + numbers[j]);
      }
    }
  }
  return [...result].sort((a, b) => a - b);
}
