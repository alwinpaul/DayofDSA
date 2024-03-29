/**
 * 
 * PROBLEM STATEMENT
  
 Given an array of unsorted numbers and a target number, find a triplet in the array whose sum is as close to the target number as possible, return the sum of the triplet. If there are more than one such triplet, return the sum of the triplet with the smallest sum.

Example 1:

Input: [-1, 0, 2, 3], target=3 
Output: 2
Explanation: The triplet [-1, 0, 3] has the sum '2' which is closest to the target.

There are two triplets with distance '1' from the target: [-1, 0, 3] & [-1, 2, 3]. Between these two triplets, the correct answer will be [-1, 0, 3] as it has a sum '2' which is less than the sum of the other triplet which is '4'. This is because of the following requirement: 'If there are more than one such triplet, return the sum of the triplet with the smallest sum.'
Example 2:

Input: [-3, -1, 1, 2], target=1
Output: 0
Explanation: The triplet [-3, 1, 2] has the closest sum to the target.
Example 3:

Input: [1, 0, 1, 1], target=100
Output: 3
Explanation: The triplet [1, 1, 1] has the closest sum to the target.
Example 4:

Input: [0, 0, 1, 1, 2, 6], target=5
Output: 4
Explanation: There are two triplets with distance '1' from target: [1, 1, 2] & [0, 0, 6]. Between these two triplets, the correct answer will be [1, 1, 2] as it has a sum '4' which is less than the sum of the other triplet which is '6'. This is because of the following requirement: 'If there are more than one such triplet, return the sum of the triplet with the smallest sum.'

 */

const input = [-3, -1, 1, 2];
const target = 1;

function tripletSumToTarget(inputArray, target) {
  let n = inputArray.length;
  let currentDiff = Number.MAX_VALUE;
  let currentSum;

  inputArray.sort((a, b) => a - b);

  for (let i = 0; i < n; i++) {
    let j = i + 1;
    let k = n - 1;

    while (j < k) {
      let sum = inputArray[i] + inputArray[j] + inputArray[k]; //-3
      let diff = Math.abs(sum - target); // 4

      if (sum === target) {
        return sum;
      }

      if (diff < currentDiff || (currentDiff === diff && currentSum > sum)) {
        currentDiff = diff;
        currentSum = sum;
        console.log(i, j, k);
      }

      if (sum < target) {
        j++;
      } else if (sum > target) {
        k--;
      }
    }
  }

  return currentSum;
}

console.log(tripletSumToTarget(input, target));
