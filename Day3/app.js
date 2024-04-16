let message="I m in global scope";
let side=4;
console.log(message);
function area(){
    // pi will not be accessible outside the function
    var pi=3.14;
    message="I m in function area scope";
    console.log(message);
    return box();
    function box(){
     //side is acessible here
     message="I m inside box function Scope";
     console.log(message);
     return side*side; 
    }
}

// console.log(pi);//Will through undefined pi Error

console.log(`Area of Bo1x is ${area()}`);


// A clouser and Nesting funciton Example

function createEmpRecord(empName){
 let id=empName;
 let name;

 const  employee= {
    // let empName="";
    setName(ename){   //clouser 1
        name=ename;
    },
    getName(){     //clouser 2
        return name;
    },
    getEmpId(){   //clouser 3
        return id;
    }

 }
 return employee;
}
const employee1 = createEmpRecord("12054");
employee1.setName("TestUser");
console.log(`Name of Employee is: ${employee1.getName()}`);
console.log(`Employee Id is :${employee1.getEmpId()}`)

// Using Arguments with Objects

function calculate(arg1,arg2,arg3){
    
console.log(`Number of arguments passed to Funciton are :${arguments.length}`);
}
calculate('453',423478,"sdfj",455);

//  Arrow Function Without its own this
// function testThis(){
//     this.counter=1;
//     let cnt2=0;
//     // console.log(this.cnt2);
//     setInterval(()=>{
//         // let ab='test';
//         console.log(`Counter is ${this.counter++}`);
//     },2000);
// }
// testThis();