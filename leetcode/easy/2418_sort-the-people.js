// 2418. Sort the People (Easy)
// https://leetcode.com/problems/sort-the-people

/**
 * Result
 * Runtime: 71 ms ~ 81 ms (37.35% ~ 69.45%)
 * Memory: 54.36 MB ~ 54.97 MB (21.48% ~ 33.53%)
 */

// 공통된 인덱스를 활용하여 정렬

/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
  const nameAndIndex = names.map((name, idx) => [name, idx]);
  nameAndIndex.sort(([name1, idx1], [name2, idx2]) => heights[idx2] - heights[idx1]);
  return nameAndIndex.map(([name, idx]) => name);
};
