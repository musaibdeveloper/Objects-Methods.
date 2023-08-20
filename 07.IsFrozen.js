// To check the Object is freeze or not, it returns the values in Boolean Values.
// Returns true if existing property attributes and values cannot be modified in an object, and new properties cannot be added to the object.


let data = {
    name : "musaib",
    age : 21,
    number : 6545626,
    location : "Hyderabad",
}

Object.freeze(data); // false

console.log(Object.isFrozen(data)); // true. 