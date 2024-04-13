// 점 찍기 (Lv.2)
// https://school.programmers.co.kr/learn/courses/30/lessons/140107

/**
 * 내 풀이 과정
 * 
 * 'x^2 + y^2 = d^2'를 만족하는 x와 y값을 찾아야 하는데 개수만 세면 된다.
 * 그러므로 일일이 좌표를 구할 필요없이 변수 x나 y 중 하나를 고정하고 나머지 변수의 개수만 세면 된다.
 * x나 y 중 하나를 기준으로 순회하며 'x^2 + y^2 = d^2' 공식을 활용하여 나머지 값의 경우의 수를 구하면 O(n)에 해결 가능하다.
 */

/**
 * 파라미터
 * 
 * @param {number} k 점을 찍을 때의 간격
 * @param {number} d 원점에서의 최대 거리
 * @returns {number} 찍을 수 있는 점의 개수
 */

function solution(k, d) {
  let result = 0;

  // x축이나 y축 위에 찍을 수 있는 점의 최대 거리
  const end = Math.floor(d / k) * k;

  // x축을 기준으로 순회하며, (x, y)에서 고정된 x값을 통해 가능한(점을 찍을 수 있는) y값의 개수 카운트  
  for (let x = 0; x <= end; x += k) {
    // boundary = 현재 x값 기준 축(x = x) 위의 점 중 거리가 d인 점의 y값
    const boundary = Math.sqrt(Math.pow(d, 2) - Math.pow(x, 2));

    // 점을 찍을 수 있는 y값의 개수 카운트
    const count = Math.floor(boundary / k) + 1;
    result += count;
  }

  return result;
}

// test1
console.log(solution(2, 4));
// test2
console.log(solution(1, 5));
