
function addme(x, y){
    return x+y
}

function subtractme(a, b){
    return a>b ? a-b : b-a
}

function multiplyme(x, y){
    return x*y
}


// old common js exports
// module.exports = {addme, subtractme, multiplyme}

// new ES Js exports
// export default {addme, subtractme, multiplyme}  -> not possible as only one function is allowerd for default export

// export default {addme}  -> not possible as default works for just one function so do not use named export {}

// export default addme   // this works fine

export {addme, subtractme, multiplyme}  // this is named export

// export default addme













