// Object keys.

// This method is used to get all the keys from the Object into an array.

let obj = {
    name : "musaib",
    age : 21, 
    location : "Hyderabad", 
    phone : 9059790040,
}

let result = Object.keys(obj)

// console.log(result);

// Here all the keys values are given in the array.
// Output : [ 'name', 'age', 'location', 'phone' ]
// Keys are Unique.
// To update any keys in object. 

obj.fun = "something"
console.log(obj);

// To delete 
delete obj.name
console.log(obj);
// name is deleted. 
// after deletion,obj.name = undefined

