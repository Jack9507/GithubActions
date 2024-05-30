// Example-1
function main(name){
    // const name = "Jerry Lame"

    function showName(){
        console.log(name)
    }
    return showName
}

getname = main("Jerry")
getname()

// Practical UseCase-1 of closures

function adder(num){
    function fnc(n2){
        console.log(num+n2) 
    }

    return fnc
}

addto5 = adder(5)
addto5(2)
addto5(90)

addto10 =adder(10)
addto10(4)

// Usecase-2
const myheading= document.getElementById("heading")
const mybtn1 = document.getElementById("resize-btn1")
const mybtn2 = document.getElementById("resize-btn2")
const count_btn = document.getElementById("count")


function makeTextSizer(size){

    function resizeto(){
        console.log(`Resizing font now to ${size}px`)
        myheading.style.fontSize = `${size}px`
    }
    return resizeto
}

const size10 = makeTextSizer(10)
const size50 = makeTextSizer(50)
const size20 = makeTextSizer(20)

mybtn1.addEventListener("click", size50)
mybtn2.addEventListener("click", size20)




// Usecase-3
function makeCounter(count){
    function increment(){
        console.log(count++)
    }
    return increment
}

const res= makeCounter(1)
count_btn.addEventListener("click", res)



// UseCase-4

function addnums(num){
    function sum1(n1){
        function sum2(n2){
            function sum3(n3){
                console.log(num+n1+n2+n3)
            }
            return sum3
        }
        return sum2
    }
    return sum1
}

const res1 = addnums(50)
const ans1 = res1(50)
const ans2 = ans1(50)
ans2(50)














