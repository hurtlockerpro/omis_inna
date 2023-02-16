
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


let columns = 15
let rows = 10


function drawMultiplyTable()
{
    let td = ''
    let tr = ''

    for (let rowIndex = 0; rowIndex <= rows; rowIndex++) 
    {
        td = ''
        for (let colIndex = 0; colIndex <= columns; colIndex++) 
        {
            //console.log(colIndex + '*' + rowIndex + '=' + (colIndex * rowIndex))
            td += generateHtmlTag('td', (colIndex * rowIndex)).outerHTML
        }
        tr += generateHtmlTag('tr', td).outerHTML
    }
    let table = generateHtmlTag('table', tr)
    table.classList.add('table', 'table-bordered')

    let multiplyTable = document.getElementById('multiplyTable')
    multiplyTable.innerHTML = table.outerHTML
}
drawMultiplyTable()

/*
function generateTD(value){
    // var 1 
    //let td = '<td class="class1 class2">' + value + '</td>'
    // var 2
    let el = document.createElement('td')
    //el.classList.add('class1', 'class2')
    //el.style.backgroundColor = 'red'
    el.innerText = value

    // return el.outerHTML // -> html
    return el
}

function generateTR(value)
{
    let el = document.createElement('tr')
    el.innerHTML = value // <tr><td>value</td></tr>
    return el
}

function generateTABLE(value)
{
    let el = document.createElement('table')
    el.innerHTML = value // <table><tr><td>value</td></tr></table>
    return el
}*/

function generateHtmlTag(tagName, value, options = {}){
    let el = document.createElement(tagName)
    el.innerHTML = value

    if (options !== undefined){
        Object.entries(options).forEach(function(option){
            el.setAttribute(option[0], option[1])
        })
    }

    return el
}

/*
let td = ''

for (let index = 0; index < columns; index++) {
    td += generateHtmlTag('td', index).outerHTML
}
console.log(td)
*/


/*
let td = generateTD('Hello')
td.classList.remove('class2')
console.log(td.outerHTML)

td.classList.add('class2')
console.log(td.outerHTML)
*/

let slctColumns = document.getElementById('slctColumns')
let slctRows = document.getElementById('slctRows')
let btnGenerate = document.getElementById('btnGenerate')

for (let index = 1; index <= columns; index++) {
    //slctColumns.innerHTML += generateHtmlTag('option', index, {value: index, class: 'a' + index}).outerHTML    
    if (index == 5) {
        slctColumns.innerHTML += generateHtmlTag('option', index, {value: index, class: 'text-primary', style: 'font-weight: bold;'}).outerHTML   
    } else {
        slctColumns.innerHTML += generateHtmlTag('option', index, {value: index, class: 'a' + index}).outerHTML   
    }
}

for (let index = 1; index <= rows; index++) {
    slctRows.innerHTML += generateHtmlTag('option', index, {value: index}).outerHTML    
}


btnGenerate.addEventListener('click', function(myEvent){
    //console.log(slctColumns.value)
    columns = slctColumns.value
    rows = slctRows.value

    drawMultiplyTable()
})