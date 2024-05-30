// IIFE to add 2 numbers in JS

// (function add(a,b){
//     console.log(a+b)
// })(2,4)


(function speak(){
    console.log("hello");
})();

// AN ES6 IIFE
(()=> console.log("I am ES6")) ()

// returning a value from IIFE in JS
const val = (()=> 100)()
console.log(val)

// let data=null

// async function getData(){
//     data = await fetch("https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10")
//     console.log(data)
// }

// getData()


// const res= (async () => await fetch("https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10") )()
// console.log(res)

//Usecase- creating public and private variables

const atm = function(initialbalance){
    let balance = initialbalance
    function withdraw(amt){
        if(amt>balance){
            return ("Sorry!!! You dont have enough money to withdraw.")
        }
        else{
            balance -= amt
            return (`Your account balance left is ${balance}`)
        }
    }
    return withdraw
}

const jerry = atm(1000)
console.log(jerry(10))
console.log(jerry(10))
console.log(jerry(5000))