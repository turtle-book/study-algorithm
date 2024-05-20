// 음양 더하기 (Lv.1)
// https://school.programmers.co.kr/learn/courses/30/lessons/76501

function solution(absolutes, signs) {
  return absolutes.reduce((acc, cur, i) => acc += signs[i] ? cur : -cur, 0);
}

// test1
const absolutes1 = [4,7,12];
const signs1 = [true,false,true];
console.log(solution(absolutes1, signs1));
// test2
const absolutes2 = [1,2,3];
const signs2 = [false,false,true];
console.log(solution(absolutes2, signs2));
