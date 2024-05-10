// 옹알이 (2) (Lv.1)
// https://school.programmers.co.kr/learn/courses/30/lessons/133499

function solution(babbling) {
  let result = 0;

  const twoLetter = ["ye", "ma"];
  const threeLetter = ["aya", "woo"];

  for (let i = 0; i < babbling.length; i++) {
    const b = babbling[i];
    let j = 0;
    let save = "";
    let count = 1;
    while (j < b.length) {
      const two = b[j] + b[j + 1];
      const three = b[j] + b[j + 1] + b[j + 2];
      if (twoLetter.includes(two) && two !== save) {
        j += 2;
        save = two;
      } else if (threeLetter.includes(three) && three !== save) {
        j += 3;
        save = three;
      } else {
        count = 0;
        break;
      }
    }

    result += count;
  }

  return result;
}

// test1
const babbling1 = ["aya", "yee", "u", "maa"];
console.log(solution(babbling1));
// test2
const babbling2 = ["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"];
console.log(solution(babbling2));
