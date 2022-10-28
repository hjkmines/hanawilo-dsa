/*
Given a sorted array of integers, write a function called search,
that accepts a value and returns the index where the value passed to the function is located. 
If the value is not found, return -1
*/

search([1,2,3,4,5,6],4) // 3
search([1,2,3,4,5,6],6) // 5
search([1,2,3,4,5,6],11) // -1

// O(n)
const searchLinear = (arr, val) => {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === val){
            return i;
        }
    }
    return -1;
}

// O(log(n)) - Binary Search
const searchBinary = (array, val) => {
 
    let min = 0;
    let max = array.length - 1;
 
    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
        let currentElement = array[middle];
 
        if (array[middle] < val) {
            min = middle + 1;
        }
        else if (array[middle] > val) {
            max = middle - 1;
        }
        else {
            return middle;
        }
    }
 
    return -1;
}

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


// day 3 material below: 

// A string s is nice if, for every letter of the alphabet that s contains, it appears both in uppercase and lowercase. For example, "abABB" is nice because 'A' and 'a' appear, and 'B' and 'b' appear. However, "abA" is not because 'b' appears, but 'B' does not.

// Given a string s, return the longest substring of s that is nice. If there are multiple, return the substring of the earliest occurrence. If there are none, return an empty string.

// Example 1:

// Input: s = "YazaAay"
// Output: "aAa"
// Explanation: "aAa" is a nice string because 'A/a' is the only letter of the alphabet in s, and both 'A' and 'a' appear.
// "aAa" is the longest nice substring.

// Example 2:

// Input: s = "Bb"
// Output: "Bb"
// Explanation: "Bb" is a nice string because both 'B' and 'b' appear. The whole string is a substring.

// Example 3:

// Input: s = "c"
// Output: ""
// Explanation: There are no nice substrings.

// Constraints:

// 1 <= s.length <= 100
// s consists of uppercase and lowercase English letters.

/**
 * @param {string} s
 * @return {string}
 */
 var longestNiceSubstring = function(s) {
    if (s.length <= 1) {
        return '';
    }
    
    const sArr = s.split(''); // all chars
    const sSet = new Set(sArr); // unique chars
    
    for (let i=0;i<=s.length-1;i++) {
        if (sSet.has(sArr[i].toLowerCase()) && sSet.has(sArr[i].toUpperCase())) {
            continue;
        }
        
        const subS1 = longestNiceSubstring(s.slice(0, i));
        const subS2 = longestNiceSubstring(s.slice(i+1));
        
        return subS1.length >= subS2.length ? subS1 : subS2;
    }
    
    return s;
};