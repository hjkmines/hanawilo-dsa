// Problem statement: Given a sorted (in ascending order) integer array nums of n elements 
// and a target value, write a function to search target in nums. 
// If target exists, then return its index, otherwise return -1.

// Please write in time complexity of O(log n)

// Example 1:
// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4

// Explanation: 9 exists in nums and its index is 4

// Example 2:
// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1

// Note:
// 1. You may assume that all elements in nums are unique.
// 2. n will be in the range [1, 10000].
// 3. The value of each element in nums will be in the range [-9999, 9999].

const binaryIterativeSearch = (nums, target) => {
    // declare the start and end
    let start = 0;  
    let end = nums.length - 1; 

    // base condition
    while (start <= end) {
        // find the middle point
        let middleIndex = Math.floor((start + end)/2)

        if (nums[middleIndex] === target) {
            return middleIndex; 
        } else if (nums[middleIndex] < target) {
            start = middleIndex + 1
        } else {
            end = middleIndex - 1
        }
    }

    return -1; 
}