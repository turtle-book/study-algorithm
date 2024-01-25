// 인사고과 (Lv.3)
// https://school.programmers.co.kr/learn/courses/30/lessons/152995

// # 입력과 출력
// input scores: number[] = 각 사원의 근무 태도 점수와 동료 평가 점수 목록
// output answer: number = 완호의 석차(완호가 인센티브를 받지 못하는 경우 -1)

// # 문제 조건에 따른 풀이 방안
// 인센티브 대상 필터링
// 두 점수의 합을 기준으로 순위 구하기
// 동석차의 수만큼 다음 석차 건너뛰기

// # 테스트케이스 21번, 24번, 25번 시간초과로 실패
// 완호보다 총점이 낮은 사람을 우선적으로 제외하여 시간복잡도 개선
// 완호보다 총점이 낮은 사람은 완호를 대상에서 제외시킬 수 없음

function solution(scores) {
  const wanho = scores[0];
  const wanhoScore = wanho[0] + wanho[1];
  
  // 완호보다 총점이 크지 않은 사람은 제외
  const filteredScores = [];
  for (let i = 0; i < scores.length; i++) {
    const [x, y] = scores[i];
    if (x + y > wanhoScore) filteredScores.push(scores[i]); 
  }
  filteredScores.push(wanho);

  // 인센티브 대상 필터링
  const incentiveTargets = [];
  filteredScores.sort(([a, b], [c, d]) => c - a || d - b);
  incentiveTargets.push(filteredScores[0]);
  for (let i = 1; i < filteredScores.length; i++) {
    const [a, b] = filteredScores[i];
    let target = true;
    for (let j = i - 1; j >= 0; j--) {
      const [c, d] = filteredScores[j];
      if (a < c && b < d) {
        target = false;
        break;
      }
    }
    if (target) incentiveTargets.push(filteredScores[i]);
  }

  // 순위 결정
  incentiveTargets.sort(([a, b], [c, d]) => (a + b) - (c + d));
  const [x, y] = incentiveTargets[0];
  return x + y === wanhoScore ? incentiveTargets.length : -1;
}

// test1
const scores1 = [[2,2],[1,4],[3,2],[3,2],[2,1]];
console.log(solution(scores1));
