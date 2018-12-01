// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document


class Node {
    constructor (data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let s = 0
        let n = this.head;
        while(n) {
            s++;
            n = n.next;
        }
        return s;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        let n = this.head;
        while(n && n.next) {
            n = n.next;
        }
        return n;
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (this.head) {
            this.head = this.head.next;
        }
    }

    removeLast() {
        if (!this.head) {
            return;
        }
        if(!this.head.next) {
            this.head = null;
            return;
        }
        let n = this.head;
        while(n.next && n.next.next) {
            n = n.next;
        }
        n.next = null;
    }

    insertLast(data) {
        if (!this.head) this.insertFirst(data);
        this.getLast().next = new Node(data);
    }
}

module.exports = { Node, LinkedList };
