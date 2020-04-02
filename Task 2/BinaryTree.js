class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor(...values) {
        this._size = 0;
        this.root = null;
        for (const value of values)  {
            this.insert(value);
        }
    }

    size() {
        return this._size;
    }

    isEmpty() {
        return this._size === 0;
    }

    _getMinimum(node) {
        while (node.left) {
            node = node.left;
        }

        return node.value;
    }


    insert(value) {
        ++this._size;
        this.root = this._insert(this.root, value);
    }

    delete(value) {
        if (!this.isEmpty()) {
            --this._size;
        }

        this.root = this._delete(this.root, value);
    }

    _insert(node, value) {
        if (!node) {
            return new Node(value);
        }
        if (value < node.value) {
            node.left = this._insert(node.left, value);
        } else {
            node.right = this._insert(node.right, value);
        }
        return node;
    }

    _delete(node, value) {
        if (!node) {
            return node;
        }
        if (value < node.value) {
            node.left = this._delete(node.left, value);
        } else if (value > node.value) {
            node.right = this._delete(node.right, value);
        } else {
            if (node.left && node.right) {
                node.value = this._getMinimum(node.right);
                node.right = this._delete(node.right, node.value);
            } else {
                if (node.left) {
                    node = node.left;
                } else if (node.right) {
                    node = node.right;
                } else {
                    node = null;
                }
            }
        }
        return node;
    }
}

module.exports = BinaryTree;
