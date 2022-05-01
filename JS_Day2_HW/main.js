//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

const person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

const keys = Object.keys(person3);
const values = Object.values(person3)
keys.forEach((key, index) => {
    console.log(`My favorite ${key} are ${person3[key]}`)
});

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name, age) {
    this.name = name
    this.age = age
    

    // Use an arrow to create the printInfo method
    this.printInfo = () => {
        console.log(`Name: ${name}, aeg: ${age}`)
    }

    // Create another arrow function for the addAge method that takes a single parameter
    // Adding to the age   
    this.addAge = (() => {
        return () => {
            this.age++
            console.log(`${this.name}`)
        }

    })(0);
}

let new_person1 = new Person("Asmeret", 30);
let new_person2 = new Person("New Person2", 35);

new_person1.printInfo();
new_person2.printInfo();


new_person1.addAge();
new_person1.addAge();
new_person1.addAge();
console.log(`Name: ${new_person1.name}, age: ${new_person1.age}`);

    
// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const Promised = (num) => {
    return new Promise((resolve, reject) => {
        if (num.length > 10) {
            resolve(tue)
        }
        else {
            reject(false)
        }
    })
}

Promised(12)
.then ( (result) => {
    console.log(`Big word ${result}`)
})
.catch( (error) => {
    console.log(`Small number ${error}`)
})


// Codewars Problems //
//CW problem 1: How good are you really? https://www.codewars.com/kata/5601409514fc93442500010b/train/javascript//  // 

function betterThanAverage(classPoints, yourPoints) {
    return classPoints.reduce((a,b) => (a+b)) / classPoints.length < yourPoints;
}

//CW problem 2: Returning Strings https://www.codewars.com/kata/55a70521798b14d4750000a4/train/javascript//
let greet =(name)=>  `Hello, ${name} how are you doing today?`
