// -------- INSERTING A NODE -----------
// Steps - Iteratively or Recursively

// Create a new node
// Starting at the root
// Check if there is a root, if not - the root now becomes that new node!
// If there is a root, check if the value of the new node is greater than or less than the value of the root
// If it is greater 
// Check to see if there is a node to the right
// If there is, move to that node and repeat these steps
// If there is not, add that node as the right property
// If it is less
// Check to see if there is a node to the left
// If there is, move to that node and repeat these steps
// If there is not, add that node as the left property

// -------- Finding a Node in a BST ----------
// Steps - Iteratively or Recursively

// Starting at the root
// Check if there is a root, if not - we're done searching!
// If there is a root, check if the value of the new node is the value we are looking for. If we found it, we're done!
// If not, check to see if the value is greater than or less than the value of the root
// If it is greater 
// Check to see if there is a node to the right
// If there is, move to that node and repeat these steps
// If there is not, we're done searching!
// If it is less
// Check to see if there is a node to the left
// If there is, move to that node and repeat these steps
// If there is not, we're done searching!

class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        var newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }
    find(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }
    contains(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }
}


//      10
//   5     13
// 2  7  11  16

var tree = new BinarySearchTree();
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)

// -------- Breat first search ------------

// Steps - Iteratively

// Create a queue (this can be an array) and a variable to store the values of nodes visited
// Place the root node in the queue
// Loop as long as there is anything in the queue
// Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
// If there is a left property on the node dequeued - add it to the queue
// If there is a right property on the node dequeued - add it to the queue
// Return the variable that stores the values

// ----------- DFS - InOrder ---------------

// Create a variable to store the values of nodes visited
// Store the root of the BST in a variable called current
// Write a helper function which accepts a node
// If the node has a left property, call the helper function with the left property on the node
// Push the value of the node to the variable that stores the values
// If the node has a right property, call the helper function with the right property on the node
// Invoke the helper function with the current variable
// Return the array of values

class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    BFS(){
        var node = this.root,
            data = [],
            queue = [];
        queue.push(node);

        while(queue.length){
           node = queue.shift();
           data.push(node.value);
           if(node.left) queue.push(node.left);
           if(node.right) queue.push(node.right);
        }
        return data;
    }

    DFSInOrder(){
        var data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            data.push(node.value);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
}

