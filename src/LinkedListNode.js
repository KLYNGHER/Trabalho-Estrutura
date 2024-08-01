// Class representing a node in the linked list with an 'element' (node value) and a 'next' pointer, which points to the next node.
class LinkedListNode {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

// Class representing a singly linked list.
class LinkedList {
    constructor() {
        this.head = null;
        this.count = 0;
    }

    /**
     * Add a new node to the end of the linked list.
     * If the list is empty (this.head === null), the new node becomes the first node in the list (this.head).
     * @param {number} element
     */
    addAtEnd(element) {
        const node = new LinkedListNode(element);
        if (this.head === null) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = node;
        }
        this.count++;
    }

    /**
     * Removes the first node from the linked list.
     * Checks if the list is not empty (this.head != null). If the list is empty, nothing is done.
     * If the list is not empty, the method adjusts the head pointer to point to the second node in the list (this.head.next).
     */
    removeFromStart() {
        if (this.head != null) {
            this.head = this.head.next;
            this.count--;
        }
    }

    /**
     * Retrieves the node at the position specified by the index in the linked list.
     * The index of the node to retrieve is zero-based, meaning index = 0 corresponds to the first node.
     * @param {*} index 
     * @returns 
     */
    getElementAt(index) {
        if (index >= 0 && index < this.count) {
            let node = this.head;
            for (let i = 0; i < index && node !== null; i++) {
                node = node.next;
            }
            return node;
        }
        return undefined;
    }

    /**
     * Inserts a new element at a specific position in the linked list.
     * @param {*} element The new element to insert.
     * @param {*} index The position to insert the element.
     * @returns The method returns true if the insertion was successful. If the provided index is not valid, it returns false.
     */
    insert(element, index) {
        if (index >= 0 && index <= this.count) {
            const node = new LinkedListNode(element);
            if (index === 0) { // Adds at the first position.
                const current = this.head;
                node.next = current;
                this.head = node;
            } else {
                const previous = this.getElementAt(index - 1);
                const current = previous.next;
                node.next = current;
                previous.next = node;
            }
            this.count++; // Updates the size of the list.
            return true;
        }
        return false;
    }

    /**
     * Removes a node from the list that contains the specified element.
     * @param {*} element The element to remove.
     * @returns The method returns true if the element was found and removed, otherwise it returns false.
     */
    remove(element) {
        if (this.head === null) { // Checks if the list is empty.
            return false; 
        } 
        if (this.head.element === element) { // Updates the head to the next node if the first element is equal to the element to be removed.
            this.head = this.head.next;
            this.count--;
            return true;
        }
        let current = this.head;
        let previous = null;

        while(current !== null) { // Iterates through the list checking if the current element is equal to the element to be removed.
            if (current.element === element) {
                previous.next = current.next;
                this.count--;
                return true;
            }
            previous = current;
            current = current.next;
        }
        return false; // Returns false if the element is not found in the list.
    }

    /**
     * Displays the elements present in the linked list in an ordered manner.
     * @returns The elements of the linked list in the order they appear.
     */
    print() {
        if (this.head === null) {
            console.log('The list is empty.');
            return;
        }
        let current = this.head;
        let elements = [];
        while (current !== null) {
            elements.push(current.element);
            current = current.next;
        }
        console.log('List elements: ' + elements.join(' - '));
    }
}

// Instantiating the class with methods to manipulate assigned, removed, or retrieved values in the list.

const list = new LinkedList();
list.addAtEnd(1);
list.addAtEnd(3);
list.addAtEnd(5);
list.addAtEnd(7);
list.addAtEnd(10);
list.addAtEnd(11);
list.addAtEnd(13);
console.log(list);
list.print();

list.removeFromStart();
list.print();

list.getElementAt(0);
list.print();

list.insert(9, 2);
list.print();

list.remove(3);
list.remove(5);
list.print();

export default LinkedList;
