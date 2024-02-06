// 이모티콘 할인행사 (Lv.2)
// https://school.programmers.co.kr/learn/courses/30/lessons/150368
// 풀이 실패: 제한시간 1시간 초과

// input users: number[] = 각 사용자 구매 기준
// input emoticons: number[] = 각 이모티콘 정가
// output answer: number[] = [ 이모티콘 플러스 서비스 가입 수, 이모티콘 매출액 ]

// users, emoticons 두 요소 중 하나를 기준으로 하여 순회를 해야 하나 모두 기준으로서 독립적이지 못함
// 각 이모티콘별 할인율의 경우의 수를 모두 구해서 풀이하는 방법이 있으나 경우의 수가 너무 많음

function solution(users, emoticons) {
  // 목표 우선순위 기준에 따른 최대 서비스 가입자 수와 매출액
  let maxSubscriberCount = -1;
  let maxRevenue = -1;

  // 모든 할인율 경우의 수 종합
  function getAllCases(length) {
    const result = [];
    const discountRates = [0.1, 0.2, 0.3, 0.4];

    // 재귀 호출
    function recursive(curCase) {
      // 종료 조건
      if (curCase.length === length) {
        result.push(curCase);
        return;
      }

      for (let i = 0; i < discountRates.length; i++) {
        const nextCase = [...curCase, discountRates[i]];
        recursive(nextCase);
      }
    }

    recursive([]);

    return result;
  }
  
  // 모든 이모티콘별 할인율 경우의 수 배열
  const allCases = getAllCases(emoticons.length);

  for (const rateCase of allCases) {
    // 해당 할인율 케이스의 서비스 가입자 수와 매출액
    let subscriberCount = 0;
    let revenue = 0;

    for (const [rateCondition, priceLimit] of users) {
      let total = 0;
      for (let i = 0; i < rateCase.length; i++) {
        if ((rateCondition / 100) <= rateCase[i]) total += emoticons[i] * (1 - rateCase[i]);
      }

      if (total >= priceLimit) subscriberCount += 1;
      else revenue += total;
    }
    
    // 현재 케이스의 가입자 수 및 매출액을 현재 최댓값과 비교
    if (subscriberCount > maxSubscriberCount) {
      maxSubscriberCount = subscriberCount;
      maxRevenue = revenue;
    } else if (subscriberCount === maxSubscriberCount) {
      if (revenue > maxRevenue) maxRevenue = revenue;
    }
  }
  
  return [maxSubscriberCount, maxRevenue];
}

// test1
const users1 = [[40, 10000], [25, 10000]];
const emoticons1 = [7000, 9000];
console.log(solution(users1, emoticons1));
// test2
const users2 = [[40, 2900], [23, 10000], [11, 5200], [5, 5900], [40, 3100], [27, 9200], [32, 6900]];
const emoticons2 = [1300, 1500, 1600, 4900];
console.log(solution(users2, emoticons2));
