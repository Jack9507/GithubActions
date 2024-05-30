// High Order functions and callbacks in JS---------
console.log('High order functions and Callback in JS')

function sum(x,y,cb){
    let res= x+y
    cb(res)
}

sum(3,6, function(val){
    console.log(val)
})

sum(5,2, (ans) => {console.log(ans)})  

// Callback -> When a function is passed as an argument in some other function then it's called as callback
// The function using callback is then termed as high order function
// Callbacks are used in case of time consuming high complexity work in function


// Now function returning a function--
function power(x,n,cb){
    let res=x**n       
    // return function cb(){console.log(res)}
    return () => {console.log(res)}
}

let ans = power(2,10, () => {})
//now since ans is now a function therefore:
ans()


