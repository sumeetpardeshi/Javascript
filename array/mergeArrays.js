console.log(merge([1,10,50,55,59,60,61,62],[2,14,99,100,120]))


function merge(arr1 ,arr2){
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