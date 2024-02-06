// 자동완성 (Lv.4)
// https://school.programmers.co.kr/learn/courses/30/lessons/17685

// # 입력과 출력
// input words: string[] =
// output number =

// # 문제 조건에 따른 풀이 방안
// 트라이 활용
// 경우의 수가 하나로 확정되는 CASE 2가지
// CASE 1. 중복 수(duplicateCount) = 1
// CASE 2. 단어의 마지막 알파벳까지 조회한 경우(단어 자체)

function solution(words) {
  class TrieNode {
    constructor() {
      this.children = {};
      this.duplicateCount = 0;
    }
  }
  
  class Trie {
    constructor() {
      this.root = new TrieNode();
    }
  
    insert(word) {
      let node = this.root;
      for (const char of word) {
        if (!node.children[char]) {
          node.children[char] = new TrieNode();
        }
        node.children[char].duplicateCount += 1;
        node = node.children[char];
      }
    }

    complete(word) {
      let node = this.root;
      for (let i = 0; i < word.length; i++) {
        if (node.children[word[i]]?.duplicateCount === 1) {
          return i + 1;
        }
        node = node.children[word[i]];
      }
      return word.length;
    }
  }

  const trie = new Trie();
  for (const word of words) {
    trie.insert(word);
  }
  
  const answer = words.reduce((acc, curWord) => {
    return acc += trie.complete(curWord);
  }, 0);

  return answer;
}

// test1
const words1 = ["go","gone","guild"];
console.log(solution(words1));
// test2
const words2 = ["abc","def","ghi","jklm"];
console.log(solution(words2));
// test3
const words3 = ["word","war","warrior","world"];
console.log(solution(words3));
