

function twoSum (nums, target){
        
    for(let i=0;i<nums.length;i++){
        let toSearch= target-nums[i];
        console.log(toSearch);
        result= bSearch(nums,i,nums.length-1,target);
        console.log(result);
    }
};

twoSum([2,7,11,15],9);

//console.log(bSearch([1,2,4,8],0,3,9));

function bSearch(arr,low,high,targetVal){   //returns index
        

        let mid = Math.floor((low+high)/2);
//        console.log('mid',mid)
        console.log('low',low,'mid',mid,'high',high); 
        if(high-low==1){
            if (arr[low]==targetVal)
                return arr[low];
            else if (arr[high]==targetVal)
                return arr[high];
        }
        else
        if(arr[mid]==targetVal){
            return mid;
        }
        
    else if( targetVal<arr[mid] ) //its on left partition
        {
            console.log('here')
            return bSearch(arr,low,mid,targetVal);
        }
    else if( targetVal>arr[mid] )
     {            
            console.log('there')
            return bSearch(arr,mid,high,targetVal);
     }
    else 
        {
            return -1;
        }
        
}