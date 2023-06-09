const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST (rootNode) {
  if(rootNode.left){
    return findMinBST(rootNode.left)
  }
  if(!rootNode.left){
    return rootNode.val;
  }


}

function findMaxBST (rootNode) {
  if(rootNode.right){
    return findMaxBST(rootNode.right)
  }
  if(!rootNode.right){
    return rootNode.val;
  }
}

function findMinBT (rootNode) {
  const queue = [rootNode];
  let min = []

  if(!queue) return this;
  while(queue.length > 0){
    let node = queue.shift();
   //console.log(node);
    min.push(node.val)
    if(node.left) queue.push(node.left);
    if(node.right) queue.push(node.right);
  // if(rootNode.left){
  //   rootNode.val
  // }
  }
  return Math.min(...min);


}

function findMaxBT (rootNode) {
  let max = rootNode.val;
  if(rootNode.left){
    max = Math.max(max, findMaxBT(rootNode.left));
  }
  if(rootNode.right){
    max = Math.max(max, findMaxBT(rootNode.right));
  }
  return max

}

function getHeight (rootNode) {
  if(!rootNode) return -1;
  if(!rootNode.right && !rootNode.left) return 0;

  return 1 + Math.max(getHeight(rootNode.left), getHeight(rootNode.right))

  // let leftCount = 0;
  // let rightCount = 0;

  // if(rootNode.left){
  //   leftCount++
  //   getHeight(rootNode.left)
  // }
  // if(rootNode.right){
  //   rightCount++
  //  getHeight(rootNode.right)
  // }
  // console.log(leftCount);
  // console.log(rightCount)
  // if(leftCount === rightCount){
  //   return leftCount;
  // }
  // return Math.max(leftCount, rightCount)


}

function balancedTree (rootNode) {
  // Your code here
}

function countNodes (rootNode) {


}

function getParentNode (rootNode, target) {
  // Your code here
}

function inOrderPredecessor (rootNode, target) {
  // Your code here
}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent

  // Undefined if the target cannot be found

  // Set target based on parent

  // Case 0: Zero children and no parent:
  //   return null

  // Case 1: Zero children:
  //   Set the parent that points to it to null

  // Case 2: Two children:
  //  Set the value to its in-order predecessor, then delete the predecessor
  //  Replace target node with the left most child on its right side,
  //  or the right most child on its left side.
  //  Then delete the child that it was replaced with.

  // Case 3: One child:
  //   Make the parent point to the child

}

module.exports = {
    findMinBST,
    findMaxBST,
    findMinBT,
    findMaxBT,
    getHeight,
    countNodes,
    balancedTree,
    getParentNode,
    inOrderPredecessor,
    deleteNodeBST
}
