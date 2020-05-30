let arr =[1,2,3,3,4,4,4,4,5,5,6,7,7,10]
//            i 4  j
function printUnique (arr){
    let i= 0;
    let j= 1;

    while(j<arr.length){

        if(arr[i]!==arr[j])
           { 
       
               if(j-i!==1){
                   arr[i+1]=arr[j];
                   
               }
               i++; j++; 
            }
         else{
             j++;
         }  
    }

    //for(let ptr= i+1;ptr<arr.length;ptr++){
    //    arr[ptr]=undefined;
    //}
return i==0?i:i+1;
}

console.log("unique nums:"+printUnique(arr));
console.log(arr)
