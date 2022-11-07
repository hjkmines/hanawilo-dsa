Implement the following on the DoublyLinkedList class

- push: This function should accept a value add a node to the end of the DoublyLinkedList with the given value. 
It should return the DoublyLinkedList.

- unshift: This function should accept a value and add a node to the beginning of the DoublyLinkedList with the given value. 
It should return the DoublyLinkedList.

- shift: This function should remove a node at the beginning of the DoublyLinkedList. It should return the node removed.

- set: This function should accept an index and a value and update the value of the node in the 
DoublyLinkedList at the index with the new value. It should return true if the node is updated successfully, 
or false if an invalid index is passed in.

- remove: This function should remove a node at a specified index in a DoublyLinkedList. 
It should return the removed node. if the index is valid, or undefined if the index is invalid.

- pop: This function should remove a node at the end of the DoublyLinkedList. It should return the node removed.

- get: This internal/helper function should find a node at a specified index in a DoublyLinkedList. 
It should return the found node.

- insert: This internal/helper function should insert a node at a specified index in a DoublyLinkedList. 
It should return true if the index is valid, and false if the index is invalid (less than 0 or greater than 
the length of the list).

- reverse: This function should reverse all of the nodes in a DoublyLinkedList, and should return the list.

class Node{
    constructor(val){
        this.val = val
        this.next = null;      
        this.prev = null;      
    }
}

class DoublyLinkedList{
    constructor(val){
        this.val = val
        this.next = null;      
    }
    push(){

    }

    unshift(){

    }
    
    shift(){

    }

    set(){

    }

    remove(){

    }

    pop(){

    }

    get(){

    }

    insert(){

    }

    reverse() {

    }
}
