class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // Insert element at the end
    insert(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
    }

    // Search for an element
    search(target) {
        let current = this.head;
        let position = 0;
        while (current !== null) {
            if (current.data === target) {
                return position; // Found at this position
            }
            current = current.next;
            position++;
        }
        return -1; // Not found
    }
}

// Example usage
const list = new LinkedList();
list.insert(10);
list.insert(20);
list.insert(30);
list.insert(40);

console.log(list.search(30)); // Output: 2