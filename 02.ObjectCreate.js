// Object Create is to make new the oBJECTS.

let name = new Object ({
    name :"musaib"
})

console.log(name); // { name: 'musaib' }

// method 2. 

let obj = Object.create({
    myage : 21
})
console.log(obj.myage); // 21