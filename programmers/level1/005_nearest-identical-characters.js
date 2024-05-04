// 가장 가까운 같은 글자 (Lv.1)
// https://school.programmers.co.kr/learn/courses/30/lessons/142086

function solution(s) {
  const result = new Array(s.length).fill(-1);

  // 글자별 최근 인덱스를 저장할 Map 객체 
  const maps = new Map();

  for (let i = 0; i < s.length; i++) {
    const preIdx = maps.get(s[i]);
    
    // 해당 글자의 최근 인덱스가 저장되어 있는 경우, 그 거리를 result[i]에 저장
    if (preIdx !== undefined) result[i] = i - preIdx;
    
    // 최신화
    maps.set(s[i], i);
  }

  return result;
}

// test1
const s1 = "banana";
console.log(solution(s1));
// test2
const s2 = "foobar";
console.log(solution(s2));
// test3
const s3 = "abcda";
console.log(solution(s3));
