What do we know?
We have a Binary Search Tree and we have to search for a value
We can do this in O(log n)

How we're going to do it:
We're going to go to every node and ask if the given value is greater than or less than the value we need to find.
So firstly, we're going to do this recursively. Meaning, we need to check every node for every possible outcome.
Firstly we ask, is this node a leaf node ? In this case, we reached the end of the list never finding what we looked for.
We then ask, 'Is the current node the one we have been searching for?' we do this by comparing values. If they're the same, 
we found it so we return the node.
Now we need to know where to go next if we never found it, do we go left or right? 
If the current value is greater than what we're searching for, we go left as we know the left values 
are always lesser than the current value and thus our value will be on the left side. 
The same logic applies to the right node, where if the current value is lesser than the value we're looking for, 
we go right as we know that's where the larger number are.
We repeat this until we reach the end of the list or what we came looking for.

Big O Notation:
Time Complexity: O(log n) | Where n is the number of nodes the tree has and log because we're half-ing the search tree on every move. It's logarithmic. We're using a divide and conquer algorithm
Space Complexity: O(1) | As we never allocate any extra space or have the need to bubble up in the call stack.


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */

var searchBST = function (root, val) {
    
	// We have reached a leaf node
	// This mean's we never found the
	// node we was looking for.
	if (!root) {
		return null;
	}

	// We found the node we're looking for
	// Return it.
	if (root.val === val) {
		return root;
	}

	// The 2 parts below only make sense if you understand
	// Binary Search Trees. It helps if you understand divide and conquer algorithms.
	// Like Binary search.

	// So we know the value we're looking for
	// if greater than the current node, thus
	// the node we're looking for is somewhere on the right tree
	if (val > root.val) {
		return searchBST(root.right, val);
	}

	// So the value we're searching for is less than the current node
	// which means the node we're looking for exists somewhere on
	// the left side.
	if (val < root.val) {
		return searchBST(root.left, val);
	}
};