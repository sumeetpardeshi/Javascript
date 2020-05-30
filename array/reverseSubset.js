
//1 4 6 3 6 4 2 9
//i              
//      j

let arr= [1 ,2 ,3 ,4 ,5,6,7];
let ptr=0;
let k = 3; 


for(let i=0;i<arr.length;i=i+k){
 
    console.log(arr[i]);
    
    let start= i;
    let end = start+(k-1) <= arr.length-1 ?start+(k-1):arr.length-1;
    console.log(start, end  );
    

    while(start<=end){
    swap(arr,start,end);
        start++;
        end--;
    }
    
}

console.log(arr);

function swap(arr, src,dest){
let temp = arr[src];
arr[src] = arr[dest];
arr[dest]=temp;
}




