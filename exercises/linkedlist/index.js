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
        if (!this.head) {
            this.insertFirst(data);
            return;
        }
        this.getLast().next = new Node(data);
    }

    getAt(index) {
        let n = this.head;
        if (!n) return null;

        for (let i = 0; i < index; i++) {
            n = n.next;
            if (!n) return null;
        }

        return n
    }

    removeAt(index) {
        let n = this.head;
        if (!n) return;
        if (index == 0) {
            this.head = n.next;            
        }
        else {
            let p;
            for (let i = 0; i < index; i++) {
                p = n;
                n = n.next;
                if (!n) return;            
            }
            p.next = n.next;
        }
    }

    insertAt(data, index) {
        if (index < 0) return;
        if (index == 0) {
            this.insertFirst(data);
        }
        else {
            let p = this.getAt(index - 1);
            if (p) {
                let nn = new Node(data, p.next);
                p.next = nn;
            }
            else {
                this.insertLast(data);
            }
        }
    }
}

const l = new LinkedList();

module.exports = { Node, LinkedList };
