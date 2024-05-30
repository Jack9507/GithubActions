let a= 10
let b= 5

// function add(x,y, cbfn){
//     let result =  x+y
//     cbfn(result)
// }


// function cbfn(result){
//     console.log("callback called")
//     const square = result*result
//     console.log(`The square of ${result} is : ${square}`)
// }

// // add(3,3, cbfn)

// add(5,2, (res) => {
//     console.log("callback called")
//     console.log(`Your result is : ${res}`)
// })

// Without Promises 

function loadscript(src, callback){
    const script = document.createElement("script")
    script.src=src

    script.onload= () => callback(null, script)
    script.onerror = (err) => callback(err)
   
    document.head.appendChild(script)
}


// loadscript("test.js", (err, script) => {
//     if(err){
//         console.log(`Error in running script ${err}`)
//     }
//     else{
//         console.log("Script executed successfully")
//     }
// })


function  promisify(fuc){
    return function(...args){
        return new Promise((resolve, reject) =>  {
            fuc(...args, (error, result) => {
                if(error){
                    return reject(error)
                } 
                else{return resolve(result)}
                    
            })
        })
    }

}


// const loadscriptNew = promisify(loadscript)
// console.log(loadscriptNew)

const loladscriptNew =  promisify(loadscript)
// loladscriptNew("test.js")
// .then(() => {console.log("Script Loaded")})
// .catch((error)=> {console.log("Error ho gaya")})


(async ()=> {
    const res = await loladscriptNew("test.js")
    console.log("Done")
})()