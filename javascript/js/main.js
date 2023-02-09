
console.log('Hello javascript')

//var x = 5
//var x = 55

let x = 10
 x = 10

/* jjj */
let firstname = 'Vladimir'

//console.error("This is my error")
console.log("Hello " + firstname + " " + x)
console.log(firstname + x)

console.log(typeof firstname)
console.log(typeof 10)
console.log(typeof 10.10)
console.log(typeof undefined)
console.log(typeof [])
console.log(typeof {})
console.log(typeof true)

// type 1 
function getFirstname(x, y){
    console.log("result from " + firstname + ": " + (x+y))
    console.log(this)
}

// type 2
function getFirstname2(x, y){
    //console.log("result from " + firstname + ": " + (x+y))
    return "result from " + firstname + ": " + (x+y)
}

getFirstname(1, 2)
let result = getFirstname2(2, 3) + " return fn"
console.log(result)

// short hand functions

// let sumNumbers = () => {}
// type 1
/*
let sumNumbers = (x, y) => {
    console.log(this)
    return x + y
}*/

console.log(
    sumNumbers(1,5)
)

function sumNumbers(x = 10, y = 20, ...numbers){
    console.log(numbers[0])
    console.log("x: ", x, ", y:", y)
}

sumNumbers(5)


// && - AND
// x && y && z 
// true && true && true -> true 
// true && true && false -> false 
// false && true && true

// || - OR
// false || false || true -> true
// false || false || false -> false

/* 
===
!==
*/
//   true
y = "10"
if (x > 0 && y == 10)
{
    // result 
} else if(x == 10){
    // result 2
} else if(x == 10){
    // result 2
}
 else if(x == 10){
    // result 2
}
else {

}
// ->


// increment++  
// x = x + 1
// x += 1
// ++increment

// decrement --
// -- decrement
for (let index = 10; index > 0; index--) {
    
    console.log(index)

}