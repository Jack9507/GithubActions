// Functions in JS----

function sayHello(){
    console.log('Hey there how are you.')
}

sayHello()
sayHello()
sayHello()


function add(x,y,z){
    console.log(x+y+z)
}

add(2,3,4)
add(10,20,30)

function multiply(a,b){
    return a*b
}

let res = multiply(2,6)
console.log(res)

// Playing with functions in JS-----------------------
// Passing variable number of arguments to a function-
// 2 ways to pass variable arguments to JS function-
// 1. use argument object
// 2. use '...args' spread operator AKA rest parameter

// WAY-1 using argument object

function sum(){
    // console.log(arguments)
    let res=0
    for(let i=0; i<arguments.length; i++)
    {
        res+= arguments[i]
    }
    return res
}

const ans= sum(1,2,3,4,5)
console.log('Sum of variable arguments= '+ans)

// WAY-2 using ...args spread operator
// Note: spread name can be anything i.e '...nums', '...vars' or '...args'

function mul(...args){
    let res=1
    for(let i=0; i<args.length; i++)
    {
        res*=args[i]
    }
    return res
}

const ans2= mul(2,3,4)
console.log('Final res= '+ans2)

// NOTE:  argument object is only available in normal functions and not in callback functions.
//         so in callback functions rest parameter (...args) can be used