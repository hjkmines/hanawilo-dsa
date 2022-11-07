// -------- recursion ---------

// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step
 
// Constraints:
// 1 <= n <= 45

const cache = []

function climbStairs(n) {
  if (n <= 2) return n
  if (!cache[n]) { cache[n] = climbStairs(n - 2) + climbStairs(n - 1) }
  return cache[n]
}

// ----------- two-pointers -----------

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

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
// O(n) time | O(1) space
var sortColors = function(arr) {
    let n = arr.length;
    let left = 0;
    let right = n - 1;
    let i = 0;
    
    while(i <= right) {
        // if the number is 2, then place it at the end, swapping it
        // with the element in the right index
        // decrement right by 1
        // here we don't increment i because after the swapping
        // the element in position i may be a 0 (or a 2)
        // and in that case we should place it at the left index (or at the right)
        if(arr[i] == 2) {
            swap(arr, i, right);
            right--;
        }
        // if the number is 0, then place it at the beginning, swapping it with the element in the left index
        // increment left by 1
        // here we increment i by 1 because after the swapping
        // the element in position i must be a 1, since the index i
        // already went through left position
        else if(arr[i] == 0) {
            swap(arr, i, left);
            left++;
            i++;
        }
        // if the element is 1, just continue
        else {
            i++;
        }
    }
};

// ------------- queue -------------
// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

// Example 1:

// Input: head = [1,2,2,1]
// Output: true

// Example 2:

// Input: head = [1,2]
// Output: false

// Constraints:

// The number of nodes in the list is in the range [1, 105].
// 0 <= Node.val <= 9

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
    let curr = head;
    const traverse = node => {
        if (node === null) {
            return true;
        }
        // traverse to the end of the list first
        const prevIsSame = traverse(node.next);
        // when the call stack bounces back, compare the values 
        // from the head and from the bottom up
        const currIsSame = curr.val === node.val;
        curr = curr.next;
        return prevIsSame && currIsSame;
    }
    return traverse(head);
};

// ------------- binary search tree -------------

// Given the root node of a binary search tree and two integers low and high, 
// return the sum of values of all nodes with a value in the inclusive range [low, high].

// Example 1:

// Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
// Output: 32
// Explanation: Nodes 7, 10, and 15 are in the range [7, 15]. 7 + 10 + 15 = 32.

// Example 2:

// Input: root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10
// Output: 23
// Explanation: Nodes 6, 7, and 10 are in the range [6, 10]. 6 + 7 + 10 = 23.
 
// Constraints:

// The number of nodes in the tree is in the range [1, 2 * 104].
// 1 <= Node.val <= 105
// 1 <= low <= high <= 105
// All Node.val are unique.

/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
 var rangeSumBST = function(root, L, R) {
    // check if value is in the given range
    const isInBetween = val => val >= L && val <= R;
    // sum the value if it's in the range
    const add = (val, sum) => isInBetween(val) ? sum += val : sum;
	// traverse through the nodes and sum the values in range
    const preorder =(root, sum) => {
        if (!root) return sum;
        return add(root.val, sum) + preorder(root.left, sum) + preorder(root.right, sum);
    } 
    return preorder(root, 0)
};