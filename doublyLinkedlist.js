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
    append(value) {
        let node = new Node(value)
        if (this.size === 0) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }
        this.size++
    }
    print() {
        if (this.size === 0)
            return -1
        else {
            let curr = this.head
            let result = ''
            while (curr) {
                result += `${curr.value} `
                curr = curr.next
            }
         console.log(result)
        }
    }
}


const list = new List()
console.log(list.isEmpty())
list.prepend(10)
list.prepend(5)
list.print()
list.append(20)
list.append(30)
list.print()