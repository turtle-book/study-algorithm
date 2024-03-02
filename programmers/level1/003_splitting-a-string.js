// 문자열 나누기 (Lv.1)
// https://school.programmers.co.kr/learn/courses/30/lessons/140108

// # 입력과 출력
// input s: string = 문자열
// output result: number = 분해한 문자열의 개수

// # 문제 조건에 따른 풀이 방안
// 반복적인 연산이 필요한 문제상황이므로 재귀호출 사용

function solution(s) {
  let answer = 0;

  function splitting(string) {
    const length = string.length;

    // 종료조건 1번: 남은 문자열의 문자 수가 1개인 경우(두 횟수가 다른 상태에서 더 이상 읽을 글자가 없는 경우)
    if (length === 1) {
      answer++;
      return;
    }

    let firstChar = string[0];
    let firstCharCount = 1;
    let otherCharCount = 0;
    let idx = 1;
    while (firstCharCount !== otherCharCount && idx < length) {
      if (string[idx] === firstChar) firstCharCount++;
      else otherCharCount++;
      idx++;
    }

    const remainingString = string.substring(idx, length);

    // 종료조건 2번: 남은 문자열이 없는 경우
    // 종료조건 3번: 두 횟수가 다른 상태에서 더 이상 읽을 글자가 없는 경우
    if (remainingString === "" || remainingString === string) {
      answer++;
      return;
    }

    answer++;

    return splitting(remainingString);
  }

  splitting(s);

  return answer;
}

// test1
console.log(solution("banana"));
// test2
console.log(solution("abracadabra"));
// test3
console.log(solution("aaabbaccccabba"));
