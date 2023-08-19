// Object Assign method.

// Assing is used to conact multiple objects and give the output in single object.

obj = {
    a:1
}

obj1 = {
    b :2
}

let combineObject = Object.assign(obj, obj1);

console.log(combineObject);

// Here in the assign method. 
// Object.assign(target, ...sources)
// target - the target object to which we will copy all the properties of the sources.
// sources - the source object(s) whose properties we want to copy.
