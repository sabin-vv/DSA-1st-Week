class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}
class List {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }
    isEmpty() {
        return this.size === 0

    }
    getSize() {
        return this.size
    }
    prepend(value) {
        let node = new Node(value)
        if (this.size === 0) {
            this.head = node
            this.tail = node
        } else {
            node.next = this.head
            this.head.prev = node
            this.head = node
        }
        this.size++
    }
}


const list = new List()
console.log(list.isEmpty())
list.prepend(10)