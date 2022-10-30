// Binary Search Pseudocode

// This function accepts a sorted array and a value
// Create a left pointer at the start of the array, and a right pointer at the end of the array
// While the left pointer comes before the right pointer:
// Create a pointer in the middle
// If you find the value you want, return the index
// If the value is too small, move the left pointer up
// If the value is too large, move the right pointer down
// If you never find the value, return -1

// Original Solution
function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]){
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    if(arr[middle] === elem){
        return middle;
    }
    return -1;
}

// Refactored Version
function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1;
}

binarySearch([2,5,6,9,13,15,28,30], 103)

// Problem statement: Given a sorted (in ascending order) integer array nums of n elements 
// and a target value, write a function to search target in nums. 
// If target exists, then return its index, otherwise return -1.

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

// Recursive: 
// 1. Base, if the starting index is greater than the ending index, we return false
// 2. compute the middle index
// 3. compare the middle element with the target. If they are equal then return the middle index
// 4. if greater, call the same function with the ending index = middle - 1 and repeat step 1
// 5. if smaller, call the same function with the starting index = middle + 1 and repeat step 1

const binaryRecursiveSearch = (nums, target, start = 0, end = nums.length - 1) => {
    // base condition
    if (start > end) return -1; 

    // find the middle index
    let middleIndex = Math.floor((start + end)/2)

    // if the middle element is the target, return the middle index 
    if (nums[middleIndex] === target) return middleIndex; 

    // if middle element is smaller than target, move the start index to middle + 1
    if (nums[middleIndex] < target) {
        return binaryRecursiveSearch(nums, target, middleIndex + 1, end)
    } else {
        // if the middle element is greater than the target, move the end index to middle - 1
        return binaryRecursiveSearch(nums, target, start, middleIndex - 1); 
    }
}

// Iterative: 
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