// 명예의 전당 (1) (Lv.1)
// https://school.programmers.co.kr/learn/courses/30/lessons/138477

class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;
    while (currentIndex > 0 && this.heap[Math.floor((currentIndex - 1) / 2)] > this.heap[currentIndex]) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);
      [this.heap[parentIndex], this.heap[currentIndex]] = [this.heap[currentIndex], this.heap[parentIndex]];
      currentIndex = parentIndex;
    }
  }

  remove() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    let currentIndex = 0;
    while (2 * currentIndex + 1 < this.heap.length) {
      let smallerChildIndex = 2 * currentIndex + 1;
      if (smallerChildIndex + 1 < this.heap.length && this.heap[smallerChildIndex + 1] < this.heap[smallerChildIndex]) {
        smallerChildIndex++;
      }
      if (this.heap[currentIndex] <= this.heap[smallerChildIndex]) break;
      [this.heap[currentIndex], this.heap[smallerChildIndex]] = [this.heap[smallerChildIndex], this.heap[currentIndex]];
      currentIndex = smallerChildIndex;
    }
    return root;
  }

  // 최솟값 반환
  getMinValue() {
    return this.heap[0];
  }

  // 힙 배열의 길이 반환
  length() {
    return this.heap.length;
  }
}

function solution(k, score) {
  const result = [];

  // 힙을 활용하여 시간복잡도 최적화
  const heap = new MinHeap();

  for (let i = 0; i < score.length; i++) {
    heap.insert(score[i]);
    // 힙의 길이가 k 이상이면 최솟값 추출
    if (heap.length() > k) heap.remove();
    result.push(heap.getMinValue());
  }

  return result;
}

// test1
const k1 = 3, score1 = [10, 100, 20, 150, 1, 100, 200];
console.log(solution(k1, score1));
// test2
const k2 = 4, score2 = [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000];
console.log(solution(k2, score2));
