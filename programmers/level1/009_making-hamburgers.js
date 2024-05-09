// 햄버거 만들기 (Lv.1)
// https://school.programmers.co.kr/learn/courses/30/lessons/133502

function solution(ingredient) {
  let result = 0;

  let string = ingredient.join("");
  let start = string.indexOf("1");
  while (start < string.length - 3) {
    // 1로 시작하는 경우만 체크
    if (string[start] === "1") {
      const hamburger = string.slice(start, start + 4);
      // 햄버거를 만들 수 있는 경우 카운트 후 해당 부분 string에서 제거
      if (hamburger === "1231") {
        result++;
        string = string.slice(0, start) + string.slice(start + 4);
        // 제거된 문자열에 의해 새롭게 햄버거로 조합되는 경우를 고려해 start 조정 
        if (string[start] === "2") start = start >= 1 ? start - 1 : start + 1;
        if (string[start] === "3") start = start >= 2 ? start - 2 : start + 1;
      } else {
        start += 1;
      }
    } else {
      start += 1;
    }
  }

  return result;
}

// test1
const ingredient1 = [2, 1, 1, 2, 3, 1, 2, 3, 1];
console.log(solution(ingredient1));
// test2
const ingredient2 = [1, 3, 2, 1, 2, 1, 3, 1, 2];
console.log(solution(ingredient2));
