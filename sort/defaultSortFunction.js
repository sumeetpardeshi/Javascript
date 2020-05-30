let strArray= ["Helsinki","Berlin","Moscow","Tokyo","Denver","Rio","Nairobi"];
let noArray= [1,66,3,5,23,10,1,51,2,4];

console.log(strArray.sort())
console.log(strArray.sort((a,b)=>{ return a.length-b.length }));

console.log(noArray.sort())
console.log(noArray.sort((a,b)=>{ return a-b}))
