let arr = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];


let hstart=0,vstart=0,hend=arr[0].length-1, vend=arr.length-1;
let h=true,lr=true;

console.log(hstart,hend, vstart,vend)

cnt=1;
while(cnt<=16)
{
    //top
    for(let i = hstart; i<=hend; i++){
    console.log(arr[vstart][i])
    cnt+=1;
    }
    vstart+=1;

    //right
    for (let i=vstart;i<=vend;i++){
        console.log(arr[i][hend]);
        cnt+=1;
    }
    hend-=1;

    //bottom
    for (let i=hend;i>=hstart;i--){
        console.log(arr[vend][i]);
        cnt+=1;
    }
    vend-=1;

    //left
    for(i=vend;i>=vstart;i--){
        console.log(arr[i][hstart]);
        cnt+=1;
    }
    hstart+=1;

}
    

