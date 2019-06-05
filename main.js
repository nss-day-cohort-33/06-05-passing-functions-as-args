
// basic
// function add() {
//   return 2 + 2
// }

// let sum = add()

// harder
// function add(num) {
//   return 2 + num
// }

// let sum = add(2)

// even harder?
// function add(num1, num2) {
//   return num1 + num2
// }

// let sum = add(2,"4")

// getting weird
// function add(numArr) {
//   return numArr[0] + numArr[1]
// }

// let sum = add([2,4,5,"jazz hands"])

// now this is too much
// function add(numObj) {
//   return numObj.num1 + numObj.num2
// }

// let sum = add({num1: 2, num2: 4})

// Holy sh**
function add(numa, numb) {
  return numa + numb
}

function subtract(numuno, numdos) {
  return numuno - numdos
}

function calculate(func, num1, num2) {
  return `I used a calculator to get this result: ${func(num1, num2)}`
}

// let mathMsg1 = calculate(add, 2, 6)
let mathMsg1 = calculate(add, 2, 125)
let mathMsg2 = calculate(subtract, 65, 34)






































// let ages = [12, 23, 89, 16, 34, 19, 2, 7, 45, 50, 26, 102]
// let fave_demo = []

// ages.forEach( function(num) {
//   if (num >= 18 && num <= 49) {
//     fave_demo.push(num)
//   }
// })
// console.log('fave_demo', fave_demo);



// let yoda_quote = ["the", "greatest", "teacher", "failure", "is"]

// let YodaSays = []
// yoda_quote.forEach( function(word) {
//   if( word === "the") {
//     word = "The"
//   }
//   if( word === "teacher") {
//     word = "teacher,"
//   }
//   YodaSays.push(word)
// })
// console.log(`Yoda says, "${YodaSays.join(' ')}."`)













// let YodaSays = yoda_quote.map( word => {
//   if( word === "the") word = "The"
//   if( word === "teacher") word = "teacher,"
//   return word
// })

// console.log( `Yoda says, "${YodaSays.join(' ')}"`)
