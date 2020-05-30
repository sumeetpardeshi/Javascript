class Person {

    constructor(name){
        this.name = name;
    }

    print(){
       console.log(this.name);
    }
}

Person.prototype.greet= function (){
     console.log("hello "+ this.name);
}

let p1= new Person('sumeet');
p1.print();
p1.greet();
