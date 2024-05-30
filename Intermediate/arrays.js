// Playing with arrays in JS

const bikes = ["BMW-S1000RR", "Ducati", "Kawasaki-ZX-10R","Honda-SP-Fireblade"]

console.log(bikes)
console.log(bikes.length)
console.log(bikes[2])

bikes[2]="BMW-G310-RR"

console.log(bikes[2])
// Althought array was declared with const we can still update and delete its elements
// bikes = ["H2-R"] -> this is not allowed though

bikes.push('Apache-RTR')
console.log(bikes)

// In C, C++, Java arrays are Homogenous i.e you can only store one kind of values in it
// In JavaScript arrays are Hetrogenous, you can store different types of values in array

const array=[1, 2, true, 'Lambo', 'Ferrari', 3.14]
console.log(array)

array.push({name: 'Colsen', age:25})
console.log(array)
console.log(array[6]['name'])

console.log(array.indexOf('Ferrari'))
console.log(array.indexOf('Nissan'))
array.pop()
console.log(array)

const nums=[1,2,3,4,5]
console.log(nums)
nums.reverse()
console.log(nums)

//High Order functions in Arrays:

// 1. for-each function

const names=['Jerry','Harry','Sonam','Colsen']

names.forEach((res)=>{console.log(res)})

function print(val){
    console.log(val)
}
names.map(print)
names.map((val)=>console.log(val))

// Now what is the Difference between .map and .forEach in JS
// forEach->  just applies a function to an iterable object in JS
// forEach ->  returns void
// map-> applies the function to an iterable object and returns the new object

const nums_arr = [1,2,3,4,5]
let nums_square = nums_arr.map((val) => val**2)
console.log(nums_square)
// let nums_square2 = nums.array.forEach((val)=> val*2)  -> gives error as forEach returns void

// '===' in JS compares the value and type of both operands

let a = 50
let b = '50'
if(a==b) {
    console.log('a equals b')
}
else{
    console.log('not equals')
}

// ---------------------------------------------

const arr2= [2,3,4,3,6,7,8,7]
let res= arr2.find((val)=> val===7)
console.log(res+' Exists in array')

let index = arr2.findIndex((val)=> val===7)
console.log('index = '+index)

// Map|Filter|Reduce high order function in JavaScript

const nums2= [3,4,5,2,6,7,8]

//filter -> filters elements on the basis on condition defined in the function to be mapped in array, returns a new array
let evenNums = nums2.filter((val)=> val%2==0)
console.log(evenNums)

//map -> maps a function to array and returns a new array
let oddNums = nums2.map((val)=> val%2==0)
console.log(oddNums)

//reduce() -> reduces an array to single value, returns a single value
let sumNums = nums2.reduce((n1,n2) => {return n1+n2})
console.log(sumNums)

// Note: Map|Filter|Reduce do not modify the original array.
console.log(nums2)
