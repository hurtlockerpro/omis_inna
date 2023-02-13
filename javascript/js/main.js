
/*
console.log('Hello javascript')

//var x = 5
//var x = 55

let x = 10
 x = 10

// jjj
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

let sumNumbers = (x, y) => {
    console.log(this)
    return x + y
}

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


//===
//!==

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

//            0
let cars = ['audi', 'bmw', true, 100, undefined, null]

for (let index = 0; index < cars.length - 1; index++) {
    const element = cars[index];
    console.log(index + ': ' + element)    
}



console.log('-----')

cars[2] = 'one hundred'
//cars.push('hello at last')
let strCars = cars.join('|')

console.log('-----')

cars.forEach(function(row, index, myCars){
    console.log(index + ': ' + row + ', ' + myCars[index])
})


// json

let cars3 = [
    [
        'audi',
        function(){}
    ],
    []
]

let cars2 = {
    name:'audi',
    //car1:'audi',
    //cars2:'bmw'
    car1: {
        name:'audi',
        color: (a)=> {
            if (a == 'red') return '#000'
            console.log('this: ')
            console.log(this)
            return a
        }
        
    },
    car2: {
        name:'bmw',
        color: 10
    }
}

console.log(cars2.car1.color('red'))
// var 1
Array.from(cars2).forEach(function(item){
    console.log(item)
})

// var 2
Object.entries(cars2).forEach(function(item){
    
    if (typeof item[1] != 'string') console.log(item[1].name)

    if (typeof item[1].color != 'undefined' && typeof item[1].color == 'function')
    {
        console.log('fn result: ' + item[1].color('green'))
    } else if (typeof item[1].color != 'undefined'){
        console.log('not a fn: ' + item[1].color)
    }
})

*/


let columns = 10
let rows = 10

for (let colIndex = 0; colIndex <= columns; colIndex++) 
{
    for (let rowIndex = 0; rowIndex <= rows; rowIndex++) 
    {
        console.log(colIndex + '*' + rowIndex + '=' + (colIndex * rowIndex))
    }
}


let multiplyTable = document.getElementById('multiplyTable')
multiplyTable.innerHTML = '<b>Hello<b> from <span style="color:red;">javascript</span>'

function generateTD(value){
    // var 1 
    let td = '<td class="class1 class2">' + value + '</td>'
    // var 2
    let el = document.createElement('td')
    el.classList.add('class1', 'class2')
    //el.style.backgroundColor = 'red'
    el.innerText = value

    // return el.outerHTML // -> html
    return el

}
/*
let td = generateTD('Hello')
td.classList.remove('class2')
console.log(td.outerHTML)

td.classList.add('class2')
console.log(td.outerHTML)
*/