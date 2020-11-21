// Refactored to make BinaryTree it's own class, with its own set of methods

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor(arr) {
        this.root = () => {
            let rootNode = new TreeNode(this.values[0]);
            for (let i = 0; i < arr.length; i++) {
                rootNode = this.insert(rootNode, arr[i]);
            }
            return rootNode;
        }
                this.values = arr
        this.insert = (node, arrValue) => {
                if (!node) return new TreeNode(arrValue);
                if (arrValue > node.value) node.right = this.insert(node.right, arrValue);
                else if (arrValue < node.value) node.left = this.insert(node.left, arrValue);
                return node;
            }
    }
}

const tree = new BinaryTree([8,10,12,5,3,6]);
// expected output of tree.root():
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
