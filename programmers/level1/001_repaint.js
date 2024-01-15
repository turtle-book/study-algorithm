// 덧칠하기 (Lv.1)
// https://school.programmers.co.kr/learn/courses/30/lessons/161989

// input n: number = 전체 벽의 가로 길이
// input m: number = 룰러의 길이, 한 번에 칠할 수 있는 면적
// input section: number[] = 페인트칠 해야 할 벽의 구간
// output answer: number = 페인트칠 해야 하는 최소 횟수
// 좌측 섹션부터 차례로 조회 -> 반복문 활용
// 이미 칠한 경우 카운트하지 않고, 건너뛰고 칠하지 않은 경우 카운트 -> 조건문 활용

function solution(n, m, section) {
  let answer = 0;
  
  // 현재 페인트 작업 완료한 최우측 섹션
  let rigth = 0;

  for (let i = 0; i < section.length; i++) {
    if (section[i] > rigth) {
      answer++;
      rigth = section[i] + m - 1;
    }
  }

  return answer;
}

// test1
const n1 = 8, m1 = 4, section1 = [2, 3, 6];
console.log(solution(n1, m1, section1));
// test2
const n2 = 5, m2 = 4, section2 = [1, 3];
console.log(solution(n2, m2, section2));
// test3
const n3 = 4, m3 = 1, section3 = [1, 2, 3, 4];
console.log(solution(n3, m3, section3));
