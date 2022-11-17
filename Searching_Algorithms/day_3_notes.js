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
    let seen ={}; 
    for(let char of s){ // store characters Frequency of given string in map
        seen[char] ? seen[char]++ : seen[char]=1;
    }
    
    // sort characters according to characters Frequency in descending order
    let SortedCharactersArray = Object.keys(seen).sort((a,b)=>seen[b]-seen[a]);
    
    let result = ""
    // iterate through SortedCharactersArray and append character( character frequency )times to result  
    for(let char of SortedCharactersArray)
        result += char.repeat(seen[char]);
    
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

//  --------------- binary search --------------------

Given a non-negative integer c, decide whether there're two integers a and b such that a2 + b2 = c.

Example 1:

Input: c = 5
Output: true
Explanation: 1 * 1 + 2 * 2 = 5
Example 2:

Input: c = 3
Output: false

var judgeSquareSum = function(c) {
	let a=0;
	let b=Math.floor(Math.sqrt(c));
	while(a<=b){
		let sum = (a*a)+(b*b);
		if(sum===c){
			return true;
		}
		else if(sum<c){
			a++;
		}
		else{
			b--;
		}
	}
	return false;
};

//  --------------- binary search --------------------

Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

Return the minimum integer k such that she can eat all the bananas within h hours.

 

Example 1:

Input: piles = [3,6,7,11], h = 8
Output: 4
Example 2:

Input: piles = [30,11,23,4,20], h = 5
Output: 30
Example 3:

Input: piles = [30,11,23,4,20], h = 6
Output: 23
 

Constraints:

1 <= piles.length <= 104
piles.length <= h <= 109
1 <= piles[i] <= 109

var minEatingSpeed = function(piles, h) {
    /*The range of bananas that Koko can eat is k = 1 to Max(piles)*/
    let startk = 1;
    let endk = Math.max(...piles);
    
    while(startk <= endk){
        let midk = Math.floor(startk + (endk - startk)/2);
        /*midk are the count of bananas that koko decide to eat. 
        So how many hours she will take to finish the piles?*/
        let hrs = 0;
        for(let pile of piles){
            /*pile is the num of bananas in piles*/
            hrs += Math.ceil(pile/midk);
        }
        if(hrs > h){
            /*Now if hrs > h she will not be to finish the pile so we have 
            to increase the bananas by moving start.*/
            startk = midk + 1;
        }else{
            /*If hrs <= h she will be eating too fast so we can reduce the bananas 
            so she eats slowly. So decrement end.*/
            endk = midk - 1;
        }
    }
    return startk;
};