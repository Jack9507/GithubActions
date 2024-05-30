// Arrow Functions in JS---
// 4 Major differences between normal function and Arrow function:-
// 1. Syntax 
// var|let|const nameOfFunction = (arguments) => {
//     body of function
// }

const add = (a, b) => {
    console.log(a + b)
}

add(2, 3)



// 2. 'arguments' keyword
// NOTE: arguments Object is only present in normal functions in JS, not in Arrow functions
const sum = () =>{
    let res =0
    for(let i=0; i<arguments.length; i++){
        res +=arguments[i]
    }
    console.log(res)
}

// sum(1,2,3,4,5) -> gives error as arguments is not available in Arrow functions

// 3. Hoisting in JS
//In JavaScript, hoisting refers to the built-in behavior of the language through which declarations of functions, variables, and classes are moved to the top of their scope – all before code execution. In turn, this allows us to use functions, variables, and classes before they are declared.

sayHi()  // -> function used before it is declared

function sayHi(){
    console.log('HI there')
}

// hifromArrow()  -> gives error as Arrow functions does not support Hoisting in JS

const hifromArrow= () => {
    console.log('Hello from Arrow function.')
}

hifromArrow()


// 4. This keyword in JS
// IN case of normal functions 'this' refers to the current Object being called.
// In case of Arrow functions 'this' refers to the Global window
const obj ={
    value: 20,
    myFunction: function smile(){
        console.log('Smile more')
        console.log(this)
    }
}
obj.myFunction()


const cars={
    price: 20000,
    mycar: 'Nissan GT-R',
    carName: function getName() {
        console.log(this.mycar)
    },
    getPrice:   () =>{
        console.log(this)
        console.log(this.price)
    }
}

cars.carName()
cars.getPrice()