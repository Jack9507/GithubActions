// Variables in javascript
// var, let & const are 3 keywords with which you can create variables in JS
// JS has dynamic datatypes i.e. same variables can contain int, string, float, etc..

// C, C++, Java are -> Strogly Typed Languages i.e integer var can only have integer data
// JavaScript on the other hand is loosely typed.

var x=10
console.log(x)

x= "Jerry"
console.log(x)
num1= 50
num2= 60
console.log(num1+num2)
console.log(x+num1)

var firstName = "Colsen Baker"
console.log(firstName)


// var ->  creates Global Scope variables in JS
if(true){
    var age=25
    console.log('Age from if block='+age)
}
console.log('Age from outside of if block='+age)




// let -> creates local variables in JS

if(true){
    let bike="S1000-RR"
    console.log(bike) 
    bike='Ducati-V4-R'
    console.log(bike)
}

// console.log(bike) -> gives error as bike has local scope




// Const
// Scope = local
// const var value cannot be updated once defined

if(true){
    const price= 2000000
    console.log(price)
    // price=500  -> gives error as price is constant
}

// const age; -> not allowed, const variable has to be initialised when defined
