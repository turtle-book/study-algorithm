// 성격 유형 검사하기 (Lv.1)
// https://school.programmers.co.kr/learn/courses/30/lessons/118666

function solution(survey, choices) {
  const types = ["R", "T", "C", "F", "J", "M", "A", "N"];
  const maps = new Map(types.map(e => [e, 0]));

  // 유형별 점수 평가
  for (let i = 0; i < survey.length; i++) {
    const [type1, type2] = survey[i].split("");
    const score = choices[i];
    if (score < 4) maps.set(type1, maps.get(type1) + 4 - score);
    else if (score > 4) maps.set(type2, maps.get(type2) + score - 4);
  }

  // 평가표를 통해 성격 유형 결정
  let result = "";
  result += (maps.get("R") >= maps.get("T")) ? "R" : "T";
  result += (maps.get("C") >= maps.get("F")) ? "C" : "F";
  result += (maps.get("J") >= maps.get("M")) ? "J" : "M";
  result += (maps.get("A") >= maps.get("N")) ? "A" : "N";

  return result;
}

// test1
const survey1 = ["AN", "CF", "MJ", "RT", "NA"];
const choices1 = [5, 3, 2, 7, 5];
console.log(solution(survey1, choices1));
// test2
const survey2 = ["TR", "RT", "TR"];
const choices2 = [7, 1, 3];
console.log(solution(survey2, choices2));
