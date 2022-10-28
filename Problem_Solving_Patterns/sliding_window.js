/*
Write a function called maxSubarraySum which accepts an array of integers and a number called n. 
The function should calculate the maximum sum of n consecutive elements in the array.
*/

maxSubarraySum([1,2,5,2,8,1,5],2) // 10
maxSubarraySum([1,2,5,2,8,1,5],4) // 17
maxSubarraySum([4,2,1,6],1) // 6
maxSubarraySum([4,2,1,6,2],4) // 13
maxSubarraySum([],4) // null

// O(n^2)
const maxSubarraySumQuadratic = (arr, num) => {
    if ( num > arr.length){
        return null;
    }
    var max = -Infinity;
    for (let i = 0; i < arr.length - num + 1; i ++){
        temp = 0;
        for (let j = 0; j < num; j++){
        temp += arr[i + j];
        }
        if (temp > max) {
        max = temp;
        }
    }
    return max;
}

// O(n)
const maxSubarraySumLinear = (arr, num) => {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }

    tempSum = maxSum;

    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}


// O(n)
const minSubarraySumLinear = (arr, num) => {
    let minSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
        minSum += arr[i];
    }

    tempSum = maxSum;
    
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        minSum = Math.min(minSum, tempSum);
    }
    return maxSum;
}

//day 3 material below 

// Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

// Example 1:

// Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
// Output: 6
// Explanation: [1,1,1,0,0,1,1,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

// Example 2:

// Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
// Output: 10
// Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
 
// Constraints:

// 1 <= nums.length <= 105
// nums[i] is either 0 or 1.
// 0 <= k <= nums.length

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const longestOnes = (nums, k) => {
    
};

//solution 
// This solution takes a sliding window approach that resizes the window based on the input value, K.

// We iterate over the array, adding any ones to our current sequence and comparing that to the longest sequence found so far. Note that our "currentOrigin" starts at index 0 always.
// If we find a zero, we check to see if we have any remaining flips (initially denoted by the input value K).
// If we do have remaining flips, we treat the zero as a one, then decrement our available flips (since we've used one up).
// If we are out of flips, then we shrink the left-hand side of our window until we find a zero.
// We "reclaim" this zero by setting currentOrigin to the index of our trailing zero, + 1, and also by incrementing "remaining flips"
// This gives us another flip to use on the new zero that we encountered, effectively shifting our window to the right.
// This means that if we encounter K + 1 or more zeroes in a row, the window will shrink to become K-length and continue shifting right until a one is found again.

// Note: steps 4 & 5 actually occur before step 3 in the code below.

// Values we need to track:
// - longestSequenceLength: we return this at the end
// - currentSequenceLength: we compare this to the longest sequence as our window moves/resizes
// - remainingFlips: the number of flips we have at our disposal in the current sequence
// - currentOrigin: the starting index of our current sliding window, or sequence

// Implementation
var longestOnes1 = function(A, K) {
  let longestSequenceLength = 0;
  let currentSequenceLength = 0;
  let remainingFlips = K;
  let currentOrigin = 0;
  
  for (let i = 0; i < A.length; i++) {
    let currentDigit = A[i];
    
    if (currentDigit === 1) {
      currentSequenceLength++;
      longestSequenceLength = Math.max(currentSequenceLength, longestSequenceLength);
    }
    
    if (currentDigit === 0) {
      if (remainingFlips === 0) {
        while (A[currentOrigin] === 1 && currentOrigin !== A.length - 1) {
          currentOrigin++;
          currentSequenceLength--;
        }
        remainingFlips++;
        currentOrigin++;
        currentSequenceLength--; 
      }
      currentSequenceLength++;
      remainingFlips--;
      longestSequenceLength = Math.max(currentSequenceLength, longestSequenceLength);
    }
  };  
  return longestSequenceLength;
};