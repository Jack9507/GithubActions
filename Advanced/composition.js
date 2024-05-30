function add(a,b){
    return a+b
}

function square(num){
    return num*num
}

function multiply(...args){
    return args.reduce((a,b) => a*b)
}

// now if we want to add two numbers and do the square then 
console.log(square(add(2,3)))

// but what if we had 100 of such things to do 
// so better way is to create function composition

// Generic Syntax to compose functions:
function composeTwoFunctions(fun1, fun2){
    return function (a, b){
        return fun2(fun1(a, b))
    }
}

const addSquare = composeTwoFunctions(add, square)

const res= addSquare(3,3)
console.log(res)

// Writing compose function in modern ES6 javascript

const c2f = (fun1, fun2) => (a, b) => fun2(fun1(a, b));

const multiplyandSquare = c2f(multiply, square)
const res2 = multiplyandSquare(4,2)
console.log(res2)


// Now composing unlimited functions i.e. more than 2 functions



function composeUnlimited(...fns){
    return function (...values){
        // return fns.reduce((a,b) => b(...a), values)
        return fns.reduce((acc, fn) => [fn(...acc)], values)[0];
    }
}

const MulSquare = composeUnlimited(multiply, square)


const res3 = MulSquare(2,3)
console.log(res3)

