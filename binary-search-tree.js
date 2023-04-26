// Before starting, copy and paste your guided practice work from
// `binary-search-tree.js` into this file

// Your code here
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}



class BinarySearchTree {

  constructor() {
    this.root = null;

  }

  insert(val, currentNode=this.root) {
    const newNode = new TreeNode(val)
    if(!this.root){
      this.root = newNode;
      return this;
    }

    if( val < currentNode.val){
      if(!currentNode.left){
        currentNode.left = newNode;
        return this;
      } else {
        return this.insert(val, currentNode.left)
      }
    }
    if(val > currentNode.val){
      if(!currentNode.right){
        currentNode.right = newNode;
        return this;
      } else {
        return this.insert(val, currentNode.right);
      }
    }
  }

  search(val) {
    let curr = this.root

    while(curr !== null){
      if(val === curr.val) return true;

      else if(val < curr.val) curr = curr.left;
      else curr = curr.right

    }
    return false
  }


  preOrderTraversal(currentNode = this.root) {
    if ( currentNode === null) return this;

    console.log(currentNode.val)

    let left = this.preOrderTraversal(currentNode.left)

    let right = this.preOrderTraversal(currentNode.right)



  }


  inOrderTraversal(currentNode = this.root) {
    if(currentNode === null) return this;

    let left = this.inOrderTraversal(currentNode.left)

    console.log(currentNode.val)

    let right = this.inOrderTraversal(currentNode.right)
  }


  postOrderTraversal(currentNode = this.root) {
    if (currentNode === null) return this;
        let leftNode = this.postOrderTraversal(currentNode.left);
        let rightNode = this.postOrderTraversal(currentNode.right);
        console.log(currentNode.val);

  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    const queue = [this.root];

    if(!queue) return this;
    while(queue.length > 0){
      let node = queue.shift();
     //console.log(node);
      console.log(node.val)
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);


    }

  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    const stack = [this.root];

    if(!stack) return this;

    while(stack.length > 0){
      let node = stack.pop();
      console.log(node.val);

      if(node.left) stack.push(node.left);
      if(node.right) stack.push(node.right);


    }
}

}


module.exports = { BinarySearchTree, TreeNode };
