// Object values are used to extract all the values into an Array.

let obj = {
    name : "musaib",
    age : 21, 
    location : "Hyderabad", 
    phone : 9059790040,
}

let result = Object.values(obj)

console.log(result);

// Output [ 'musaib', 21, 'Hyderabad', 9059790040 ]