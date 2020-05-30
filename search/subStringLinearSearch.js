let source ="aopdomgadfasfomgadf";
let target="omg";
let count=0;
for(let i= 0;i<source.split("").length;i++){
   
    let found= true;     
    for(let j=0;j<target.split("").length;j++){
       
            if(source[i+j]!=target[j])
            {
                found=false;
                continue;
            }
        }
        
    //    console.log('found',found)
        if( found==true)count++;
    }   

console.log(count)