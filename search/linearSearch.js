let arr1=[[1,2,3,4],5,6];
let key= 13;
let found=null;
let result=search(key,arr1);
console.log(result!==undefined?result+' found':key+' not found');

function search(key, ar){
  for(let i=0;i<ar.length;i++){
      
      if(Array.isArray(ar[i]))
      {
        let subSearch=search(key,ar[i]);
        if(subSearch!==undefined)
           return subSearch;

      }else 
      if(key===ar[i]){
        return ar[i];
      }
  }
}

