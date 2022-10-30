// problem #1: sliding window

// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

// Example 1:

// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75

// Example 2:

// Input: nums = [5], k = 1
// Output: 5.00000
 
// Constraints:

// n == nums.length
// 1 <= k <= n <= 105
// -104 <= nums[i] <= 104

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let currSum = nums.slice(0 , k).reduce((r, n) => r + n, 0);
    let bestSum = currSum;
    for (let i = 1; i < nums.length - k + 1; i++) {
        currSum = currSum - nums[i - 1] + nums[i + k - 1]
        bestSum = Math.max(bestSum, currSum);
    }
    return bestSum / k;
};

// problem #2: multiple pointers

// This problem can be solved using a sliding window/two-pointer technique. 
// The reason that works is that we've got an array-based problem statement, 
// and we want to calculate information about certain sub-sections of the array.
// A fast way to do this, in linear time, is to use two pointers that move through the set of data.

// We'll track a few things:

// We'll track a maximum profit. That will start at 0, so we can have a good default value in case there are no profits available (in the case that the stock price only goes down)
// We'll track a left pointer. The left pointer will start at the beginning of the array.
// We'll track a right pointer. The right pointer will start at the beginning of the array + 1 - just after the left pointer.
// At each step, we'll subtract the value at the left pointer position from the right pointer position. If that value is greater than the current max, we'll track it as the new max. In the case where the value is greater than the current max, we'll increment the right pointer by one to see if there's a better profit available. The left pointer will stay in the same place.

// If the value isn't greater than the max, but is positive, we'll still move the right pointer, just to see if there are better days in the future to sell.

// If, when we subtract the left pointer from the right pointer, there's a negative value, it means that the value at the left can't be the minimum price at all. In fact, it means that the value at the right pointer is our new lowest. So we update the left pointer to the right pointer position, and increment the right pointer again.

// We'll repeat this until the right pointer has exceeded the length of the array, at which point, we return the max.

// Here's how to write that in JavaScript:

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // Set up variables to track the max profit we've seen (init at 0),
    // the left pointer (init at day 0)
    // and the right pointer (init at day 1, since we can't buy/sell on the same day)
    let max = 0
    let left = 0
    let right = 1
    
    // Keep incrementing the right pointer until we hit the end of the prices array.
    while (right < prices.length) {

        // The profit on any given day is the difference between the sell date (represented by right pointer)
        // and buy date (represented by the left pointer)
        const profit = prices[right] - prices[left]
        
        // If we can get a profit higher than we've seen before, set it as our maximum,
        // and we'll keep going.
        if (profit > max) {
            max = profit
        }
        
        // If today would be a loss, it means two things: 
        // 1. We don't have a new maximum.
        // 2. We just found a day on which we could buy at a lower price than before, so we should buy now.
        // 
        // The implication of point two is that we move our left pointer (again, as a sliding window) to be the current day,
        // as represented by the right pointer.
        if (profit < 0) {
            left = right
        }
        
        // Increment the right pointer to keep searching.
        right += 1
    }
    
    // This will return 0 if we had no possible profit, since we initialized at 0,
    // or the maximum profit possible.
    return max
};

// problem #3: frequency counter
/* 
Write a function called same, which accepts two arrays. 
The function should return true if every value in the array has it's corresponding value cubed in the second array. 
The frequency of values must be the same.
*/

same([1,2,3], [8,1,27]) // true
same([1,2,3], [1,9]) // false
same([1,2,1], [8,8,1]) // false (must be same frequency)

const same = (arr1, arr2) => {
}


// problem #4: divide and conquer 
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
}


// problem #5: recursion
// Write a function called getRange to get the integers in range (x, y).

// Example : range(2, 9)
// Expected Output : [3, 4, 5, 6, 7, 8]

const getRange = (startRange, endRange) => {

}
