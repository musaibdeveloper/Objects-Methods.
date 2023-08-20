// Object Freeze is the method.
// No modifications of the Objects are done. 
// It can't be add/ update or delete once the Object is freeze.

let data = {
    name : "musaib",
    age : 21,
    number : 6545626,
    location : "Hyderabad",
}

Object.freeze(data)

// No changes can be made.

data.add = "something"

console.log(data);
//  It will not work as the object is freezed.