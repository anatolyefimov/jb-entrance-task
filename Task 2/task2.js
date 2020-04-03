const BinaryTree = require('./BinaryTree');

const binaryTree = new BinaryTree(3, 2, 1, 3, 5, 3, 3);

binaryTree.insert(9);
printTree(binaryTree.root);
console.log('-----------------');

binaryTree.delete(3);
binaryTree.delete(9);
printTree(binaryTree.root);
console.log('-----------------');

while(!binaryTree.isEmpty()) {
    binaryTree.delete(binaryTree.root.value);
}
printTree(binaryTree.root);
console.log('size: ', binaryTree.getSize() );

function printTree(node) {
    if (!node) {
        return;
    }
    printTree(node.left);
    console.log(node.value);
    printTree(node.right);
}
