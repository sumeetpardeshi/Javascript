flatten([1,2,3,[4,5]])

function flatten(arr){

    let tempArr=[];
    
    for(let i=0;i<arr.length;i++){

            if(Array.isArray(arr[i])){

                tempArr = tempArr.concat(flatten(arr[i]))
            }
            else{
                tempArr.push(arr[i])
            }
    }
    return tempArr;

}