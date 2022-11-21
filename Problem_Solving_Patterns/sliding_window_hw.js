/*
Given an array of integers and a number, write a function called maxSubarraySum, 
which finds the maximum sum of a subarray with the length of the number passed to the function.

Note that a subarray must consist of consecutive elements from the original array.
In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

Please write this with time complexity of O(n) and space o(1)
*/

const maxSubarraySum = (arr, n) => {

}

// Test Cases: 
// maxSubarraySum([100,200,300,400], 2) 700
// maxSubarraySum([1,4,2,10,23,3,1,0,20], 4) 39 
// maxSubarraySum([-3,4,0,-2,6,-1], 2) 5
// maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) 5
// maxSubarraySum([2,3], 3) null

// Problem 2

/* 
Write a function called longestSubstringInString, which accepts a string and 
returns the length of the longest substring with all distinct characters from the START of the string.

Please write in time complexity of O(n)
*/

const longestSubstringInString = (str) => {

}

// Test Cases: 

// longestSubstringInString('') 0
// longestSubstringInString('rithmschool') 7
// longestSubstringInString('thisisawesome') 4
// longestSubstringInString('thecatinthehat') 5
// longestSubstringInString('bbbbbb') 1
// longestSubstringInString('longestsubstring') 7
// longestSubstringInString('thisishowwedoit') 4


// You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by an integer array fruits where fruits[i] is the type of fruit the ith tree produces.

// You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:

// You only have two baskets, and each basket can only hold a single type of fruit. There is no limit on the amount of fruit each basket can hold.
// Starting from any tree of your choice, you must pick exactly one fruit from every tree (including the start tree) while moving to the right. The picked fruits must fit in one of your baskets.
// Once you reach a tree with fruit that cannot fit in your baskets, you must stop.
// Given the integer array fruits, return the maximum number of fruits you can pick.

// Example 1:

// Input: fruits = [1,2,1]
// Output: 3
// Explanation: We can pick from all 3 trees.
// Example 2:

// Input: fruits = [0,1,2,2]
// Output: 3
// Explanation: We can pick from trees [1,2,2].
// If we had started at the first tree, we would only pick from trees [0,1].
// Example 3:

// Input: fruits = [1,2,3,2,2]
// Output: 4
// Explanation: We can pick from trees [2,3,2,2].
// If we had started at the first tree, we would only pick from trees [1,2].
 

// Constraints:

// 1 <= fruits.length <= 105
// 0 <= fruits[i] < fruits.length

/**
 * @param {number[]} fruits
 * @return {number}
 */

const solution = (fruits) => {
    
};