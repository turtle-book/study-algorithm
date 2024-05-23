// 로또의 최고 순위와 최저 순위 (Lv.1)
// https://school.programmers.co.kr/learn/courses/30/lessons/77484

function solution(lottos, win_nums) {
  let answer = 0;
  let blind = 0;
  for (let i = 0; i < lottos.length; i++) {
    if (lottos[i] === 0) blind++; 
    else if (win_nums.includes(lottos[i])) answer++; 
  }

  return [7 - (answer + blind || 1), 7 - (answer || 1)];
}

// test1
const lottos1 = [44, 1, 0, 0, 31, 25];
const win_nums1 = [31, 10, 45, 1, 6, 19];
console.log(solution(lottos1, win_nums1));
// test2
const lottos2 = [0, 0, 0, 0, 0, 0];
const win_nums2 = [38, 19, 20, 40, 15, 25];
console.log(solution(lottos2, win_nums2));
// test3
const lottos3 = [45, 4, 35, 20, 3, 9];
const win_nums3 = [20, 9, 3, 45, 4, 35];
console.log(solution(lottos3, win_nums3));
