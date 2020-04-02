const BinaryTree = require('./BinaryTree');

const binaryTree = new BinaryTree(3, 2, 1, 3, 5, 3, 3);

binaryTree.insert(9);

printTree(binaryTree.root);

console.log('-----------------');

printTree(binaryTree.root);

function printTree(node) {
    if (!node) {
        return;
    }
    printTree(node.left);
    console.log(node.value);
    printTree(node.right);
}
