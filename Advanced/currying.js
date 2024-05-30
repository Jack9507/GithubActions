function add(x){
    return function fn1(y){
        return function fn2(z){
            return x+y+z
        }
    }
}
const res = add(2)(3)(5)
console.log(res)


// Practical Usecase of currying in JS

function sendAutoEmail(to){
    return function (subject){
        return function (body){
            console.log(`Sending Email to ${to}, subject is ${subject} and body is ${body}`)
        }
    }
}

const step1 = sendAutoEmail("Jerry Lame")
const step2 = step1("Learning JavaScript")
step2("Currently on Advanced topics in JavaScript.")

sendAutoEmail("earth")("diameter of earth")("The diameter of earth is approx 12742km")

// Now writing currying functions in modern ES6 JavaScript

const  multiply = (a) => (b) => (c) => a*b*c;
console.log(multiply(2)(3)(6))

const makeTea = (step1) => (step2) => (step3) => console.log(`First ${step1}, then ${step2} finally ${step3}`)

makeTea("boil water")("add required ingredients")("your Tea is ready.")