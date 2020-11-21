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
        this.getRoot = () => {
            let rootNode = new TreeNode(this.getValues[0]);
            for (let i = 0; i < arr.length; i++) {
                rootNode = this.insert(rootNode, arr[i]);
            }
            return rootNode;
        }
        this.getValues = arr
        this.insert = (node, arrValue) => {
                if (!node) return new TreeNode(arrValue);
                if (arrValue > node.value) node.right = this.insert(node.right, arrValue);
                else if (arrValue < node.value) node.left = this.insert(node.left, arrValue);
                return node;
        }
        this.reverse = (tree) => {
            if (tree) {
                const left = tree.left;
                const right = tree.right;
                tree.left = right;
                tree.right = left;
                this.reverse(tree.left);
                this.reverse(tree.right);
            }
            return tree;
        }
    }
}

const tree = new BinaryTree([8,10,12,5,3,6]);
console.log(tree.getRoot())
// expected output of tree.getRoot():
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
