class Node {
    constructor(value) {
        this.value = value;
        this.height = 1;
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

    getSize() {
        return this._size;
    }

    isEmpty() {
        return this._size === 0;
    }

    getHeight(node = this.root) {
        if (!node) {
            return 0;
        }
        return node.height;
    }
    _getMinimum(node) {
        while (node.left) {
            node = node.left;
        }

        return node.value;
    }

    getBalance(node) {
        return node.left.height - node.right.height;
    }

    insert(value) {
        ++this._size;
        this.root = this._insert(this.root, value);
    }


    delete(value) {

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

        node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
        const balance = node.left - node.right;

        if (balance > 1 && value < node.left.key)  {
            return this.rightRotate(node);
        }

        if (balance < -1 && value > node.right.key) {
            return this.leftRotate(node);
        }

        if (balance > 1 && value > node.left.key)  {
            node.left = this.leftRotate(node.left);
            return this.rightRotate(node);
        }

        if (balance < -1 && value < node.right.key) {
            node.right = this.rightRotate(node.right);
            return this.leftRotate(node);
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
                --this._size;
            }
        }

        if (!node)  {
            return node;
        }
        node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
        const balance = node.left - node.right;
        if (balance > 1 &&  this.getBalance(node.left) >= 0)  {
            return this.rightRotate(node);
        }

        if (balance > 1 &&  this.getBalance(node.left) < 0)    {
            node.left = this.leftRotate(node.left);
            return this.rightRotate(node);
        }

        if (balance < -1 && this.getBalance(node.right) <= 0) {
            return this.leftRotate(node);
        }

        if (balance < -1 && this.getBalance(node.right) > 0)  {
            node.right = this.rightRotate(node.right);
            return this.leftRotate(node);
        }

        return node;
    }

    rightRotate(y) {
        const x = y.left;
        const t2 = x.right;
        x.right = y;
        y.left = t2;

        y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
        x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;

        return x;
    }

    leftRotate(x)  {
        const y = x.right;
        const t2 = y.left;
        y.left = x;
        x.right = t2;

        x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
        y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;

        return y;
    }
}

module.exports = BinaryTree;
