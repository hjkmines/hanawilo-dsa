/* 
Using the frequency counter pattern, write a function called sameOccurences. Given two positive integers, 
find out if the two numbers have the same frequency of digits.

Write your algorithm in linear time complexity O(n)
*/

const sameOccurences = (num1, num2) => {

}

// Test Cases: 
sameOccurences(123, 321) // true
sameOccurences(222, 22) //false 
sameOccurences(83882, 23888) //false


// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Please solve using a linear time complexity and using the frequency counter pattern

// Example 1:

// Input: nums = [3,2,3]
// Output: 3

// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
 

// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109

/**
 * @param {number[]} nums
 * @return {number}
 */

 var majorityElement = function(nums) {
    let majority = Math.floor(nums.length/2)
    let elements = {};
    let element;
    for(let i=0;i<nums.length;i++){
        element = nums[i];
        if(elements[element])elements[element]++;
        else elements[element] = 1;
    }
    
    for(let key in elements){
        if(elements[key]> majority) return key;
    }
};