// Iterators

for (const val of ["BMW", "Audi", "Honda", "Mercedes", "Lamborgini", "Ducati"]) {
    console.log(val)
}

// above statement traverses my array as array has an iterator function defined to track the array from left to right

// Making custom Iterator now



function makeIterator(start=0, end=Infinity, step=1){
    let nextStart=start
    let iterationCount = 0

    return {
        next(){
            let result;
            if(iterationCount < end ){
                // things are left to be traversed
                nextStart += step
                result = {value: nextStart, done:false}
                iterationCount++
                return result
            }
            
            return {value: iterationCount, done:true}
        }
    }
}

const myiter1= makeIterator(1, 10,2)
let result = myiter1.next()

// while(!result.done){
//     console.log(result.value)
//     result = myiter1.next()
// }


// -------------- Generator Functions & Yield Keyword ---------------------------

function* count(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const nums_lst = count()

// for(const val of nums_lst){
//     console.log(val)
// }

// ----------------------------------------------------

function* makeIterator2(start, end){
    for(let i=start; i<end; i++){
        yield i;
    }
}

const nums= makeIterator2(1, 15)
for(const val of nums)
    {
        console.log(val)
    }

// ---------------------------------------------------------------

const btn = document.getElementById("clk-btn")
const iter2= makeIterator2(1,12)
btn.addEventListener("click", () => {
    if ( (iter2.next().value) <=11) {
        btn.innerText= iter2.next().value
    } 
    else{
        btn.innerText = "Game Over.."
    }
})







