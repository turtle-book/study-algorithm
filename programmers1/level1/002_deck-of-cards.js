// 카드 뭉치 (Lv.1)
// https://school.programmers.co.kr/learn/courses/30/lessons/159994

// input cards1: string[] = 첫 번째 카드 뭉치의 영어 단어 목록
// input cards2: string[] = 두 번째 카드 뭉치의 영어 단어 목록
// input goal: string[] = 만들고자 하는 영어 문장의 순서대로 나열된 단어 목록
// output answer: string = 문장을 만들 수 있는지 여부(Yes or No)
// goal 배열과 두 카드 뭉치 배열을 차례로 조회 -> 반복문 활용
// 카드 뭉치의 경우 포인터를 이동하며 조회 -> 포인터 활용

function solution(cards1, cards2, goal) {
  let pointer1 = 0;
  let pointer2 = 0;

  for (let i = 0; i < goal.length; i++) {
    if (pointer1 < cards1.length && goal[i] === cards1[pointer1]) pointer1++;
    else if (pointer2 < cards2.length && goal[i] === cards2[pointer2]) pointer2++;
    else return "No"
  }

  return "Yes";
}

// test1
const cards11 = ["i", "drink", "water"];
const cards21 = ["want", "to"];
const goal1 = ["i", "want", "to", "drink", "water"];
console.log(solution(cards11, cards21, goal1));
// test2
const cards12 = ["i", "water", "drink"];
const cards22 = ["want", "to"];
const goal2 = ["i", "want", "to", "drink", "water"];
console.log(solution(cards12, cards22, goal2));
