arr = [1,2,3,4]
productOfArray(arr)
function productOfArray(arr){
    if(arr.length==1)
    return arr[0];
    else
    return productOfArray(arr.splice(1))*arr[0];
}