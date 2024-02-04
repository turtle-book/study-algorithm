// 1. Two Sum (Easy)
// https://leetcode.com/problems/two-sum/

/**
 * Result
 * Runtime: 56 ms (81.60%)
 * Memory: 52.37 MB (5.43%)
 */ 

/**
 * @param {number[]} nums: 숫자 배열
 * @param {number} target: 목표 합
 * @return {number[]}: 정답의 인덱스쌍
 */

// 정답은 반드시 한 가지 케이스 존재 
// 오름차순 후 투 포인터 활용

var twoSum = function(nums, target) {
  const newNums = nums.map((num, i) => [num, i]);
  newNums.sort((a, b) => a[0] - b[0]);
  let left = 0, right = newNums.length - 1;
  while (left < right) {
    const curSum = newNums[left][0] + newNums[right][0];
    if (curSum === target) return [newNums[left][1], newNums[right][1]];
    else if (curSum < target) left++;
    else right--;
  }
};

// test1
const nums1 = [2,7,11,15];
const target1 = 9;
console.log(twoSum(nums1, target1));
