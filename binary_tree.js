class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

const toBinaryTree = (arr, rootNode) => {
    for (let i = 0; i < arr.length; i++) {
        rootNode = insertNode(rootNode, arr[i]);
    }
    return rootNode;
}

const insertNode = (node, arrValue) => {
    if (!node) return new TreeNode(arrValue);
    if (arrValue > node.data) {
        node.right = insertNode(node.right, arrValue);
    }
    else if (arrValue < node.data) {
        node.left = insertNode(node.left, arrValue);
    }
    return node;
}

toBinaryTree([8,10,12,5,3,6], new TreeNode(8)); 
// expected output:
// {
//    value:8,
//    left:{
//       value:5,
//       left:{ value:3 },
//       right:{value:6}
//    },
//    right:{
//       value:10,
//       right:{value:12}
//    }
// }
