// 아날로그 시계 (Lv.2)
// https://school.programmers.co.kr/learn/courses/30/lessons/250135

/**
 * 기존 풀이(solution1)
 * 
 * 우선, 계산의 편의성을 위해 시간을 모두 초단위로 환산한다.
 * 주어진 시간 범위 내의 시간 중 초침과 분침 또는 시침이 만나는 시간을 공식으로 계산하여 배열에 담는다.
 * 초침과 분침 및 시침이 모두 만나는 경우가 있고 분침과 시침의 규칙이 각각 다르므로 이를 해결하는 것이 중요한데, Set 객체로 중복되는 경우를 제거했다.
 * Set 객체의 요소를 순회하여 주어진 시간 범위 내에 속하는 경우 카운트한다.
 * 
 * 이 풀이는 Set 객체를 통해 간단하게 중복을 제거할 수 있다는 장점이 있다.
 * 하지만 반복문이 사용되어 시간복잡도가 최적화되지 않았다.
 */

/**
 * 개선된 풀이(solution2)
 * 
 * 시작 시점과 끝 시점을 각각 끝 시점으로 생각하여 알람을 모두 카운트 한 후 두 경우의 차이를 결괏값으로 반환한다.
 * 반복문이 필요하지 않으며, 시작 시점과 끝 시점을 모두 고려해서 복잡했던 조건을 두 케이스로 나눠서 계산하니 간소화되었다. 
 */

/**
 * 파라미터
 * 
 * input h1: number = 기준 시작 시간의 시
 * input m1: number = 기준 시작 시간의 분
 * input s1: number = 기준 시작 시간의 초
 * input h2: number = 기준 종료 시간의 시
 * input m2: number = 기준 종료 시간의 분
 * input s2: number = 기준 종료 시간의 초
 * output result: number = 기준 시간 범위 동안 알람이 울린 횟수(초침과 시침/분침이 만난 횟수)
 */

function solution1(h1, m1, s1, h2, m2, s2) {
  let count = 0;

  // 초단위로 환산
  const startTimeInSeconds = h1 * 3600 + m1 * 60 + s1;
  const endTimeInSeconds = h2 * 3600 + m2 * 60 + s2;

  const handMeetingTimesArray = [];

  // 초침과 분침 또는 시침이 만나는 시간들 배열에 추가
  for (let h = h1; h <= h2; h++) {
    for (let m = (h === h1 ? m1 : 0); m <= (h === h2 ? m2 : 59); m++) {
      handMeetingTimesArray.push(3600 * h + 60 * m + 60/59 * m);
      handMeetingTimesArray.push(3600 * h + 60 * m + (3600 * (h % 12) + 60 * m) / 719);
    }
  }

  // Set 객체로 중복 제거
  const handMeetingTimesSet = new Set(handMeetingTimesArray);

  // 초침과 분침 또는 시침이 만나는 시간이 주어진 시간 범위에 속할 때마다 카운트
  handMeetingTimesSet.forEach((value) => {
    if (startTimeInSeconds <= value && endTimeInSeconds >= value) count++;
  });

  return count;
}

function solution2(h1, m1, s1, h2, m2, s2) {
  function getCount(h, m, s) {
    let result = 0;
    let mCount = 0;
    let hCount = 0;

    mCount += h * 59 + m;
    hCount += h * 60 + m;

    // 0시 정각에 초침과 분침 및 시침이 모두 만나 중복되는 경우 -1
    result -= 1;

    // 12시간을 주기로 초침과 시침이 719번 만나므로 12시를 넘어가는 경우 -1
    // 12시 정각에 초침과 분침 및 시침이 모두 만나 중복되는 경우 -1 
    if (h >= 12) {
      hCount -= 1;
      result -= 1;
    }

    // 23시 59분 59초를 지나 0시 0분 0초로 돌아가는 경우는 없으나 카운트 되었으므로 -1
    result -= -1;

    const positionM = 60/59 * m;
    const positionH = (60 * m + 3600 * (h % 12)) / 719;
    if (s >= positionM) mCount += 1;
    if (s >= positionH) hCount += 1;
    
    result += (mCount + hCount);
    return result;
  }

  // 끝 시점 카운트에서 시작 시점 카운트를 빼주는데, 시작 시점이 정각일 경우 카운트 되어 추가로 -1 되므로 보정을 위해 +1
  return getCount(h2, m2, s2) - getCount(h1, m1, s1) + (m1 === 0 && s1 === 0 ? 1 : 0);
}

// test1
const [h11, m11, s11, h12, m12, s12] = [0, 5, 30, 0, 7, 0];
console.log('테스트1 풀이1 정답:', solution1(h11, m11, s11, h12, m12, s12));
console.log('테스트1 풀이2 정답:', solution2(h11, m11, s11, h12, m12, s12));
// test2
const [h21, m21, s21, h22, m22, s22] = [12, 0, 0, 12, 0, 30];
console.log('테스트2 풀이1 정답:', solution1(h21, m21, s21, h22, m22, s22));
console.log('테스트2 풀이2 정답:', solution2(h21, m21, s21, h22, m22, s22));
// test3
const [h31, m31, s31, h32, m32, s32] = [0, 6, 1, 0, 6, 6];
console.log('테스트3 풀이1 정답:', solution1(h31, m31, s31, h32, m32, s32));
console.log('테스트3 풀이2 정답:', solution2(h31, m31, s31, h32, m32, s32));
// test4
const [h41, m41, s41, h42, m42, s42] = [11, 59, 30, 12, 0, 0];
console.log('테스트4 풀이1 정답:', solution1(h41, m41, s41, h42, m42, s42));
console.log('테스트4 풀이2 정답:', solution2(h41, m41, s41, h42, m42, s42));
// test5
const [h51, m51, s51, h52, m52, s52] = [11, 58, 59, 11, 59, 0];
console.log('테스트5 풀이1 정답:', solution1(h51, m51, s51, h52, m52, s52));
console.log('테스트5 풀이2 정답:', solution2(h51, m51, s51, h52, m52, s52));
// test6
const [h61, m61, s61, h62, m62, s62] = [1, 5, 5, 1, 5, 6];
console.log('테스트6 풀이1 정답:', solution1(h61, m61, s61, h62, m62, s62));
console.log('테스트6 풀이2 정답:', solution2(h61, m61, s61, h62, m62, s62));
// test7
const [h71, m71, s71, h72, m72, s72] = [0, 0, 0, 23, 59, 59];
console.log('테스트7 풀이1 정답:', solution1(h71, m71, s71, h72, m72, s72));
console.log('테스트7 풀이2 정답:', solution2(h71, m71, s71, h72, m72, s72));
