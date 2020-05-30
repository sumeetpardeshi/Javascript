//FB

let findValue = 3;                               
let arr=    [8,9,10,1,2,3,5,6,7];

   //       [5,6,7,8,9,10,1,2,3,4];
   
let pivot= findPivot(0,arr.length-1);
console.log('pivot',pivot);

if(findValue>arr[pivot]&& findValue<arr[arr.length-1]){
        console.log('-findvalue between'+pivot+' '+(arr.length-1))        
        console.log(bSearch(pivot,arr.length-1,findValue));
}
else if(findValue>arr[0]&& findValue<arr[pivot-1]){
    console.log('findvalue between'+0+' '+(pivot-1))
    console.log(bSearch(0,pivot-1,findValue));
}
else{
    console.log('not present')
}




function findPivot(low,high){
    let mid = Math.floor((low+high)/2);
    console.log(arr[mid])
    if(arr[mid-1]>arr[mid])
    return mid-1;
    else if(arr[mid+1]<arr[mid])
    return mid+1
    if(arr[low]>arr[mid])   //pivot on left
        return findPivot(low,mid-1)
    if(arr[high]<arr[mid])  //pivot on right
        return findPivot(mid+1,high)

}



function bSearch(low,high,findValue){
    
    let mid = Math.floor((low+high)/2);
    console.log(mid)

    if(low>mid|| high<mid)
    return -1;
    else 
    if(arr[mid]==findValue)
        return mid; 
    else if(findValue>arr[mid] ) //chose right
        return bSearch(mid+1,arr.length-1,findValue);
    else if(findValue<arr[mid] )    //choose left
       return bSearch(low,mid-1,findValue);
    else
        return -1;
}
