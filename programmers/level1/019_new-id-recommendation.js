// 신규 아이디 추천 (Lv.1)
// https://school.programmers.co.kr/learn/courses/30/lessons/72410

function solution(new_id) {
  let target = new_id;

  // 1단계
  target = target.toLowerCase();
  // 2단계
  target = target.replace(/[^a-z0-9-_.]/g, "");
  // 3단계
  target = target.replace(/\.{2,}/g, ".");
  // 4단계
  target = target.replace(/^\.|\.$/g, "");
  // 5단계
  if (target === "") target = "a";
  // 6단계
  if (target.length >= 16) target = target.slice(0, 15).replace(/\.$/g, "");
  // 7단계
  if (target.length <= 2) target += target[target.length - 1].repeat(3 - target.length);

  return target;
}

// test1
console.log(solution("...!@BaT#*..y.abcdefghijklm") === "bat.y.abcdefghi");
// test2
console.log(solution("z-+.^.") === "z--");
// test3
console.log(solution("=.=") === "aaa");
// test4
console.log(solution("123_.def") === "123_.def");
// test5
console.log(solution("abcdefghijklmn.p") === "abcdefghijklmn");
