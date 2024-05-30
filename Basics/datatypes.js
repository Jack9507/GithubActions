// Datatypes in JavaScript ---
// Number 
// Sting 
// Boolean 
// Null 
// Undefined 
// Object 

// Number --------------
let num1= 10
let num2= 20.54
console.log(num1+num2)
console.log('num1Type= '+typeof(num1)+',   num2Type= '+typeof(num2))

// Note-There is nothing like float and double in JS, it's all 'number'



// String-------------------
const firstName="Colsen"
const lastName='Baker'
console.log(firstName+' '+lastName)

// Boolean-----------------
// In JS 1-> true | 0 -> false
if(1){
    console.log("prints only on true")
}

let x=false
console.log(x+10)  //evalutes to 0+10 =10
x=true
console.log(x+10)  //evalutes to 1+10=11

// NULL-----------------
let var1= null
console.log(var1)
console.log(typeof(var1))
// null means var1 is present in memory but it has no value


// Undefined-------------------
let var2=undefined
console.log(var2)
console.log(typeof(var2))
// undefined means the variable is not even present in memory


// Object------------------------------
let data ={
    firstName:"Tom",
    lastName:"Jerry",
    age:25,
    height:'183cm',
    hobby:'skating'
}
console.log(data['age'])
console.log(data['firstName']+ '&'+ data['lastName'])
console.log(data['hobby'])


// Working with string in JS-----------------
// how operators work in strings in JS---
// string '1' + '1' = string '11'
// string + number = string
// string * number = number
console.log('Playing with string in JS--') 
let str1= '2'
let str2= '2'
console.log(str1+str2)
console.log(str1*str2)
str2='b'
console.log(str1*str2)

// IMP ques here---
let a1= '123'
// ques.-> convert this string a1 into its respective number
console.log(a1*1)
console.log(typeof(a1*1))

