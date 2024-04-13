/* There is a concept called Hoisting 
    here i m going to illustrate the concept of hoising using variables declared using var
*/ 
// But unlike var functions are fully hoisted with it code
testHoisting();
function testHoisting()
{
    // The above statement will output undefined because only declaration of var is hoisted not the initilization
    console.log(`First company comes to trade in india was ${firstCompany}`);
    var firstCompany="Portgues";
}

/* Const 
    You can not declare const with same name of function name in same scope
    Beside you cannot edit the values once asigned to a const but in case of objects it is mutable
*/
const colors=["red","blue","green"];
console.log(...colors);
colors.push("purple");
// After push
console.log(...colors);
// Javascrit is a Dynamic language so you dont have to exlicitly define the type of every variable to work with

let todayMessage=2+2;
// Here this is a number
console.log(typeof todayMessage);
// here it concate with a string and converted to a string 
console.log(`Your Message is :${todayMessage}`);
let empId="100482";
// for + operator with above string to 8 will convert the 8 to string 
console.log(empId+8);
// but for other operator it does'nt above will output 10080 
console.log(empId-2);
// For manual conversion of string to number we have
const a = "455122.25313";
console.log(parseInt(a));
console.log(parseFloat(a));