// 4. Median of Two Sorted Arrays (Hard)
// https://leetcode.com/problems/median-of-two-sorted-arrays

/**
 * 풀이 결과
 * 
 * 풀이 실패: 풀이제한시간 1시간 초과
 */

/**
 * 내 풀이 과정
 * 
 * 시간복잡도 준수를 위해 이진탐색으로 풀이해야겠다고 접근하였고,
 * 두 배열을 일정 기준으로 나누고 비교하는 방식을 반복해서 최종적으로 중앙값을 찾아내는 방식으로 접근하려 했으나,
 * 배열을 분리할 인덱스 기준과 반복문의 종료 조건을 찾지 못해서 풀이에 실패하였다.
 */

/**
 * 정답 풀이
 * 
 * 내가 생각하는 이 문제 풀이의 핵심은 partitionX와 partitionY를 구하는 것과 종료조건 설정이다.
 * 
 * 이 풀이의 핵심 중 하나는 이진탐색의 반복문과 중앙값의 특성을 위해,
 * 각 배열의 왼쪽 부분배열 요소 개수 합과 오른쪽 부분배열의 요소 개수 합을 같도록 유지하는 것이다.
 * partitionX는 nums1 배열을 절반으로 나누도록 하는 지점으로 하고,
 * partitionY는 위에서 말한 조건에 부합하도록 개수의 합을 맞추도록 하는 지점을 하여 계산한다.
 * 그 결과, 총 요소 개수가 짝수인 경우 두 좌측 부분배열의 개수 총합과 두 우측 부분배열의 개수 총합은 같다.
 * 총 요소 개수가 홀수인 경우 좌측 부분배열의 개수 총합이 1개 더 많다.
 * 
 * 종료조건은 'maxLeftX <= minRightY && maxLeftY <= minRightX'이다.
 * 기본적으로 maxLeftX는 minRightX보다 작거나 같고 maxLeftY는 minRightY보다 작거나 같으므로,
 * 종료조건을 만족하게 되면 maxLeftX와 maxLeftY는 모두 minRightX와 minRightY보다 작게 되어,
 * 전체 요소 개수가 홀수인 경우 중앙값은 maxLeftX와 maxLeftY 중 더 큰 값이 되고,
 * 전체 요소 개수가 짝수인 경우 중앙값은 maxLeftX와 maxLeftY 중 더 큰 값과 minRightX와 minRightY 중 더 작은 값의 평균값이 된다.
 * 
 * 종료조건에 부합하지 않는 경우 이진탐색 계속 반복된다.
 * 경우에 따라 nums1 배열의 포인터인 start나 end가 기존 partitionX를 기준으로 변경된다.
 * 이에 따라 LeftX나 RightX의 요소 개수에 변화가 생기는데 이와 함께 partitionY도 맞춤으로 변경되어,
 * 결론적으로 원소 개수의 합은 유지된다(LeftX + LeftY = RightX + RightY).
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  // nums1이 nums2보다 짧도록 조정
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  const m = nums1.length, n = nums2.length;
  let start = 0, end = m;

  // 두 배열의 중앙값을 찾기 위한 이진탐색
  while (start <= end) {
    // 두 배열을 각각 나눌 기준이 되는 partitionX와 partitionY 계산
    const partitionX = Math.floor((start + end) / 2);
    const partitionY = Math.floor((m + n + 1) / 2) - partitionX;

    // 나누어진 배열에서 나뉜 지점에 가장 가까운 요소들 계산
    // nums1 = [..., maxLeftX, minRightX, ...]
    // nums2 = [..., maxLeftY, minRightY, ...]
    const maxLeftX = partitionX === 0 ? -Infinity : nums1[partitionX - 1];
    const minRightX = partitionX === m ? Infinity : nums1[partitionX];
    const maxLeftY = partitionY === 0 ? -Infinity : nums2[partitionY - 1];
    const minRightY = partitionY === n ? Infinity : nums2[partitionY];

    // 종료 조건(중앙값 찾기 완료)
    if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
      // 전체 요소 개수가 짝수인 경우
      if ((m + n) % 2 === 0) {
        return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;
      // 전체 요소 개수가 홀수인 경우
      } else {
        return Math.max(maxLeftX, maxLeftY);
      }
    // nums1 배열의 왼쪽 부분배열에서 다시 진행
    } else if (maxLeftX >= minRightY) {
      end = partitionX - 1;
    // nums1 배열의 오른쪽 부분배열에서 다시 진행
    } else {
      start = partitionX + 1;
    }
  }
};
