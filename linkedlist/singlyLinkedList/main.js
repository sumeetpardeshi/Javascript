class Node {

    constructor(x){
        this.next= null; 
        this.value=x;     
    }

}

 
let start = construct([1,2,3,4,5,6,7,8]);

console.log("list")
print(start)

start = reverse(start);

console.log("reversed")
print(start);


function construct(array){
    let start, curr;
    array.forEach((x,index)=>{
    
        if(index==0){
        start = new Node(x);
        curr= start; 
        }
        else{
        let temp = new Node(x);
        curr.next = temp;
        curr= temp;
        }
    
    })
    
    return start;
}


function print(start){
    let ptr= start;
    while(ptr!==null){
        console.log(ptr.value);
        ptr= ptr.next;
    }

}


//       strt
// prev  cur  temp
//  null [1]  [2]  [3]  [4] [5]
    
function reverse(start){
    let curr = start; 
    let prev = null; 
    let temp = null;
    while(curr!=null){
        temp= curr.next;    
        curr.next = prev;
        prev= curr;
        curr= temp;   
       // console.log('prev',prev&&prev.value,'curr', curr&&curr.value,'temp', temp&&temp.value);
    }

    start = prev;
    return start;
}