(function testFunctionArgumentsTest(){
    //arguments is default variable of any function
    for(x of arguments){
        console.log(x)
    }
})(1,2,3,5)



(function testFunctionSpreadOperator(...args){

        console.log(args)
})([1,3,4,5,6,7,8,9,0])



