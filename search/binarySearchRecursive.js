let arr = [1,2,3,5,6,7,8,10,13,15,200,300];
const key = 13;
console.log(bSearch(arr,key));

function bSearch(arr, key){
    start=0;
    end= arr.length-1;
    
        console.log('start',start,'end',end, 'arr',arr)
        while(start<end){
            mid = Math.round((end+start)/2);
            console.log('mid',mid)
            if(arr[start]==key) return arr[start];
            else if(arr[end]==key) return arr[end];
            else if(arr[mid]==key)  return arr[mid];
            else if(arr[mid]<key) 
                return bSearch(arr.slice(mid,end), key);
            else if(arr[mid]>key) 
                return bSearch(arr.slice(start,mid),key);
            
            
        }
        return -1
}