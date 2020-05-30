//largest element pops to the end every iteration
let list= [10,4,5,1,5,11,100]

function swap(i,j){
    let temp = list[i];
    list[i]= list[j];
    list[j]= temp;
}
for(let i=0;i<list.length;i++){
    for(j=0;j<list.length-i;j++){
        //console.log(i,j)
        if(list[j]>list[j+1]) swap(j,j+1)
    }
    console.log('--')
    console.log(list)
}

