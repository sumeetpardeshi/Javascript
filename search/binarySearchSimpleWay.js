let arr = [1,2,3,5,6,7,8,10,13,15,200,300];
const key = 13;
console.log(bSearch(arr,key));

function bSearch(arr, key){
    start=0;
    end= arr.length;
    
       
        while(start<end){
            mid = Math.round((end+start)/2);

            console.log('start',start,'end',end, 'mid',mid)
            console.log('mid',mid)
            if(arr[start]==key) return arr[start];
            else if(arr[end]==key) return arr[end];
            else if(arr[mid]==key)  return arr[mid];
            else if(arr[mid]<key) 
                start=mid+1;
            else if(arr[mid]>key) 
                end=mid-1;
            
        }
        return -1
}