// --------------- sliding window ---------------

// There is a bookstore owner that has a store open for n minutes. Every minute, some number of customers enter the store. You are given an integer array customers of length n where customers[i] is the number of the customer that enters the store at the start of the ith minute and all those customers leave after the end of that minute.

// On some minutes, the bookstore owner is grumpy. You are given a binary array grumpy where grumpy[i] is 1 if the bookstore owner is grumpy during the ith minute, and is 0 otherwise.

// When the bookstore owner is grumpy, the customers of that minute are not satisfied, otherwise, they are satisfied.

// The bookstore owner knows a secret technique to keep themselves not grumpy for minutes consecutive minutes, but can only use it once.

// Return the maximum number of customers that can be satisfied throughout the day.

// Example 1:

// Input: customers = [1,0,1,2,1,1,7,5], grumpy = [0,1,0,1,0,1,0,1], minutes = 3
// Output: 16
// Explanation: The bookstore owner keeps themselves not grumpy for the last 3 minutes. 
// The maximum number of customers that can be satisfied = 1 + 1 + 1 + 1 + 7 + 5 = 16.
// Example 2:

// Input: customers = [1], grumpy = [0], minutes = 1
// Output: 1
 
// Constraints:

// n == customers.length == grumpy.length
// 1 <= minutes <= n <= 2 * 104
// 0 <= customers[i] <= 1000
// grumpy[i] is either 0 or 1.

// The idea is simple - go over all the customers and sum up satisfied ones. They will never be unsatisfied.

// Same time overwrite customers[i] with the sum of unsatisfied customers till that minute.

// To find the best time to use the secret technique for X munites is basically the buggest difference an unsatisfied customers array: max(customers[i] - customers[i - X]).

// For example, for the input: customers = [1,0,1,2,1,1,7,5]; grumpy = [0,1,0,1,0,1,0,1]; X = 3 we would have:

// already satisfied customers: 10
// unsatisfied customers array by minutes: [0,0,0,2,2,3,3,8]. Max unsatisfied customers that could be satisfied by the secret technique is basically the ones in the interval customers[7] - customers[4] = 8 - 2 = 6
// maximum number of customers that could be satisfied would equal 10 + 6 = 16
/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} X
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, X) {
  let satisfied = 0;
  let maxGrumpySatisfied = 0;
  
  for (let i = 0; i < grumpy.length; i++) {
    if (grumpy[i] === 0) {
      satisfied += customers[i];
      customers[i] = i === 0 ? 0 : customers[i - 1];
      continue;
    }
    
    if (i > 0) {
      customers[i] += customers[i - 1];
    }
    
    const grumpySatisfied = X <= i ? customers[i] - customers[i - X] : customers[i];
    maxGrumpySatisfied = Math.max(maxGrumpySatisfied, grumpySatisfied);
  }
  
  return satisfied + maxGrumpySatisfied;
};

// --------------- frequency counter pattern ---------------

// Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.

// Return the sorted string. If there are multiple answers, return any of them.

// Example 1:

// Input: s = "tree"
// Output: "eert"
// Explanation: 'e' appears twice while 'r' and 't' both appear once.
// So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
// Example 2:

// Input: s = "cccaaa"
// Output: "aaaccc"
// Explanation: Both 'c' and 'a' appear three times, so both "cccaaa" and "aaaccc" are valid answers.
// Note that "cacaca" is incorrect, as the same characters must be together.
// Example 3:

// Input: s = "Aabb"
// Output: "bbAa"
// Explanation: "bbaA" is also a valid answer, but "Aabb" is incorrect.
// Note that 'A' and 'a' are treated as two different characters.
 

// Constraints:

// 1 <= s.length <= 5 * 105
// s consists of uppercase and lowercase English letters and digits.

var frequencySort = function(s) {
    let temp = {};
    let freq = [];
    let result = '';
    
    for (let i = 0; i < s.length; i++) {
        if (temp[s[i]]) {
            temp[s[i]] += 1;
        } else {
            temp[s[i]] = 1;
        }
    }
    
    for (let item in temp) {
        if (freq[temp[item]]) {
            freq[temp[item]].push(item);
        } else {
            freq[temp[item]] = [item];
        }
    }
    for (let i = freq.length-1; i > 0; i--) {
        if (freq[i]) {
            for (let item of freq[i]) {
                let ind = i;
                while (ind-- > 0) {
                    result += item;
                }
            }
        }
    }
    return result;
};

// --------------- multiple pointers ---------------

// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

// Example 1:

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Example 2:

// Input: nums = [2,0,1]
// Output: [0,1,2]
 

// Constraints:

// n == nums.length
// 1 <= n <= 300
// nums[i] is either 0, 1, or 2.

var sortColors = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    let zero = 0;
    while(left <= right) {
        if(nums[left] === 0) {
            let temp = nums[zero];
            nums[zero] = nums[left];
            nums[left] = temp;
            left++;
            zero++;
        } else if(nums[left] === 2) {
            let temp = nums[right];
            nums[right] = nums[left];
            nums[left] = temp;
            right--;
        } else {
            left++
        }
        
    }
    return nums;
};

//  --------------- recursion --------------------

// Given an encoded string, return its decoded string.

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

// You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

// The test cases are generated so that the length of the output will never exceed 105.

// Example 1:

// Input: s = "3[a]2[bc]"
// Output: "aaabcbc"
// Example 2:

// Input: s = "3[a2[c]]"
// Output: "accaccacc"
// Example 3:

// Input: s = "2[abc]3[cd]ef"
// Output: "abcabccdcdcdef"
 
// Constraints:

// 1 <= s.length <= 30
// s consists of lowercase English letters, digits, and square brackets '[]'.
// s is guaranteed to be a valid input.
// All the integers in s are in the range [1, 300].

var decodeString = function(s) {
    //there might be [] in [], so using recursion to deal with the content inside []
    let stack = []
    let res = []
    
    let start = 0
	//start is the pos behind first [
    let end = 0
	//end is the pos behind ] which closes the first [
    //there will never be single number according to the description
    for(let i = 0; i < s.length; i++) {
        if (s[i].charCodeAt() < 58) {
            res.push(s.slice(end, i))
            //deal with the strings which can not be in [], '' is ok
            //the number may larger than 9
            let times = s[i]
            while(s[++i].charCodeAt() < 58) {
                times += s[i]
            }
            times = +times
            stack.push(s[i])
            start = ++i
            while(stack.length) {
                if (s[i] === '[') {
                    stack.push('[')
                }
                if (s[i] === ']') {
                    stack.pop()
                }
                ++i
            }
            end = i--
            str = s.slice(start, i)
            str = decodeString(str).repeat(times)
            res.push(str)
        }
    }
    if(end < s.length) {
        //the strings behind ]
        res.push(s.slice(end))
    }
    return res.join('')
};