// 35. Search Insert Position (Easy)
// https://leetcode.com/problems/search-insert-position

/**
 * Result
 * Runtime: 52 ms ~ 54 ms (50.46% ~ 61.99%)
 * Memory: 48.94 MB ~ 49.12 MB (14.13% ~ 23.30%)
 */

// 이진탐색 활용
// target과 일치하는 요소가 없는 경우, 가장 가까운 값 중 큰 값(우측 값)의 인덱스를 반환

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  let anwser;
  while (left <= right) {
    mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) {
      anwser = mid;
      break;
    } else if (nums[mid] < target) {
      anwser = mid + 1;
      left = mid + 1;
    } else {
      anwser = mid;
      right = mid - 1;
    }
  }

  return anwser;
};

// test1
const nums1 = [1,3,5,6], target1 = 5;
console.log(searchInsert(nums1, target1));
// test2
const nums2 = [1,3,5,6], target2 = 2;
console.log(searchInsert(nums2, target2));
// test3
const nums3 = [1,3,5,6], target3 = 7;
console.log(searchInsert(nums3, target3));
