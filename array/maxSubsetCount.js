let arr = [2,6,4,2,1,8,5,6,3];
let subLength = 3;
let maxSum= 0;
let tempSum= 0;


for (let i=0;i<subLength;i++){
    maxSum+= arr[i];
}
tempSum= maxSum;

ptr= subLength;
while(ptr<= arr.length){
    
    tempSum+=arr[ptr]; 
    tempSum-=arr[ptr-subLength];
    maxSum = tempSum>maxSum?tempSum: maxSum;
    ptr= ptr+1;
}


console.log(maxSum)