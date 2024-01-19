// 할인 행사 (Lv.2)
// https://school.programmers.co.kr/learn/courses/30/lessons/131127

// input want: string[] = 정현이가 원하는 제품 목록
// input number: number[] = 정현이가 원하는 제품 수량
// input discount: XYZ 마트 할인 제품 목록
// output answer: number = 정현이가 원하는 제품을 모두 할인 받을 수 있는 회원등록 날짜의 총 일수

// 제품과 수량 정보를 관리하기 위해 Map 객체 생성
// 첫 10일의 할인 목록을 정리하여 Map 객체에 추가
// 좌우 포인터를 이동시키며 일자별 할인 정보를 확인
// 조건 만족 시 카운트

function solution(want, number, discount) {
  let answer = 0;

  // 첫 10일 동안의 할인 목록 정리
  const maps = new Map();
  for (let i = 0; i < 10; i++) {
    if (want.includes(discount[i])) {
      maps.set(discount[i], (maps.get(discount[i]) || 0) + 1);
    }
  }

  // 회원등록시 정현이가 원하는 제품을 모두 할인 받을 수 있는지 확인하는 함수
  function check(maps) {
    for (let i = 0; i < want.length; i++) {
      if (maps.get(want[i]) !== number[i]) return false;
    }
    return true;
  }

  if (check(maps)) answer++;

  // 포인터를 활용하여 일자별 할인 정보 확인
  let left = 0;
  let right = 10;
  while (right < discount.length) {
    if (want.includes(discount[right])) {
      maps.set(discount[right], (maps.get(discount[right]) || 0) + 1);
    }
    if (want.includes(discount[left])) {
      maps.set(discount[left], maps.get(discount[left]) - 1);
    }

    if (check(maps)) answer++;

    left++;
    right++;
  }

  return answer;
}

// test1
const want1 = ["banana", "apple", "rice", "pork", "pot"];
const number1 = [3, 2, 2, 2, 1];
const discount1 = [
  "chicken", "apple", "apple", "banana", "rice", 
  "apple", "pork", "banana", "pork", "rice", 
  "pot", "banana", "apple", "banana"
];
console.log(solution(want1, number1, discount1));
// test2
const want2 = ["apple"];
const number2 = [10];
const discount2 = [
  "banana", "banana", "banana", "banana", "banana", 
  "banana", "banana", "banana", "banana", "banana"
];
console.log(solution(want2, number2, discount2));