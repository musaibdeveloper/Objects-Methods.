// Objects is to compare the two values and returns the output in Boolean.

// //Non primitive datatypes are not comparable like:array and object
// // never compare array and object as it gives false always.

// It checkes the name === name1

let name = "musaib";
let name1 = "musaib";

console.log(Object.is(name , name1)); // true.

let a = 10;
b = "10"

console.log(Object.is(a ,b)); // false