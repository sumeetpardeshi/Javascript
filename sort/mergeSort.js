let list = [21,4,2,10,11,22,55,67,11,40,100,90,120];

console.log("final"+mergeSort(list))

function mergeSort(list){
    if(list.length<=1){
   // console.log("["+list+"]")
        return list;
    }
    let mid = Math.floor(list.length/2);
    let left = mergeSort(list.slice(0,mid));
    let right =mergeSort(list.slice(mid));

    //console.log(left, right)
    let sorted=  merge(left,right) ; 
    
    //console.log('sorted:'+sorted);
    return sorted;
}






function merge(arr1 ,arr2){
        console.log('merge',arr1,arr2);
        let tempArr=[];
        let i=0,j=0;
       

        while(i<arr1.length || j<arr2.length){
          if(i>=arr1.length || arr1[i]>arr2[j]){
            tempArr.push(arr2[j++])
          }
          else{
            tempArr.push(arr1[i++])  
          }  
        }
        return tempArr;
}