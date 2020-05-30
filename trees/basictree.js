class Node {
    constructor(value){
        this.value= value;
        this.left= null;
        this.right= null;
    }
}

class BinaryTree {
    constructor(){
        this.root= null;
      }  

    add(node, value){
        if(node==null){
            return new Node(value);
        }
        else if(value<node.value){
            node.left= this.add(node.left,value);
        }
        else if(value>node.value){
            node.right= this.add(node.right, value);
        }
        else{
             return node;
        }
        return node;        
    }

    addToTree(value){
            this.root = this.add(this.root, value);
    
    }
}




let myTree= new BinaryTree();
myTree.addToTree(1);
myTree.addToTree(2);
myTree.addToTree(12);


console.log(myTree);

