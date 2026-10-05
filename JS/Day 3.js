let firstName = 'wisdom'
let lastName = 'Japhet'
let country = 'Nigeria'
let city = 'Benin'
let age = 18
let isMarried = false
let year = 2026

console.log(typeof 'wisdom')
console.log(typeof 'Japhet')
console.log(typeof 'Nigeria')
console.log(typeof 'Benin')
console.log(typeof 18)
console.log(typeof false)
console.log(typeof 2026)

console.log(typeof '10' === 10)
console.log(typeof parseInt('9.8') === 10)

let numOne = 3 > 2
let numTwo = 5 > 2
let numThree = 10 < 20

let statementOne = 'mango'.Length > 'aeroplane'.Length
let statementTwo = 10 > 20
let statementThree = 5 < 3

console.log(4 > 3)  //True
console.log(4 >= 3)  //True
console.log(4 < 3)  //False
console.log(4 <= 3)  //False
console.log(4 == 4)  // True but not accurate
console.log(4 === 4) //True
console.log(4 != 4)  //False
console.log(4 !== 4)  //False
console.log(4 != '4')  //False
console.log(4 == '4')  //True
console.log(4 === '4') //False

let compare = 'Python'.length < 'Jargon'.length

console.log(4 > 3 && 10 < 12)  //True
console.log(4 > 3 && 10 > 12)  //False
console.log(4 > 3 || 10 < 12)  //True
console.log(4 > 3 || 10 > 12)  //True, one argument has to be true
console.log(!4 > 3)  //False
console.log(!4 < 3)  //True
console.log(!false)  //True
console.log(!4 > 3 && 10 < 12)  //False
console.log(!4 > 3 && 10 > 12)  //False
console.log(!4 === '4')  //False

const timeNow = new Date()
console.log(timeNow.getFullYear())
console.log(timeNow.getMonth())
console.log(timeNow.getDate())
console.log(timeNow.getHours())
console.log(timeNow.getMinutes())
console.log(timeNow.getTime())

let base = prompt('Enter Base')
let height = prompt('Enter Height')

base = Number(base);
height = Number(height);

let area = 0.5 * base * height

console.log(`The area of your triange is ${area}`)
alert(`The area of the calculated triangle is ${area}`)

let sideA = prompt('Enter sideA')
let sideB = prompt('Enter sideB')
let sideC = prompt('Enter sideC')

sideA = Number(sideA);
sideB = Number(sideB);
sideC = Number(sideC);

let perimeter = sideA + sideB + sideC

console.log(`The perimeter of the triangle is ${perimeter}`)
alert(`The perimeter for calculated triangle is ${perimeter}`)

let length = prompt('Enter Length')
let width = prompt('Enter Width')

length = Number(length);
width = Number(width);

let perimetre = 2 * (leength + width)

console.log(`The Perimeter of the Rectangle is ${peremitre}`)
alert(`The Perimeter of your Calculated Rectangle is ${peremitre}`)

const pi = 3.14
let userRadius = prompt('Input Radius')

userRadius = Number(userRadius)

let circleArea = 2 * pi * userRadius * userRadius
let circumference = 2 * pi * userRadius;

console.log("Area of the circle: " + circleArea);
console.log("Circumference of the circle: " + circumference);

let userHours = prompt('Enter Hours WOrked')
let userRate = prompt('Enter your Rate per Hour')

userHours = Number(userHours)
userRate = Number(userRate)

let payOfUser = userHours * userRate

console.log(`Your Weekly Earning is ${payOfUser}`)
alert(`Your Weekly Earning is ${payOfUser}`)


let myName = 'wisdom'

if (myName.length > 7) {
    console.log("your name is long")
}
else {
    console.log("your name is short")
}

let myFirstName = 'Ifechukwude'
let myFamilyName = 'Japhet'

if (myFirstName.length > myFamilyName.length) {
    console.log(`Your first name, ${myFirstName} is longer than your family name,${myFamilyName}`)
}
else {
    console.log(`Your first name, ${myFirstName} is shorter than your family name,${myFamilyName}`)
}


let myAge = 250
let yourAge = 25

let result = myAge - yourAge
console.log(`I am ${result} years older than you`)


let yearOfBirth = prompt('Enter Birth Year')
yearOfBirth = Number(yearOfBirth)

let presentYear = new Date().getFullYear()
let presentAge = presentYear - yearOfBirth

if (presentAge > 18) {
    console.log(`You are ${presentAge}. You are old enough to drive`)
}
else {
    let yearsLeft = 18 - presentAge;
    console.log(`You are ${presentAge}. You will be allowed to drive after ${yearsLeft} years.`)
}


let numberOfYearsLived = prompt('Enter Number of Years Lived')
numberOfYearsLived = Number(numberOfYearsLived)

let maxYears = 100
let remainingYears = maxYears - numberOfYearsLived
let secondsPerYear = 360 * 24 * 60 * 60
let totalSecondsLived = numberOfYearsLived - secondsPerYear
console.log(totalSecondsLived)


let now = new Date()
let yy = now.getFullYear()
let mon = now.getMonth()
let day = now.getDate()
let tim = now.getHours()
let min = now.getMinutes()

console.log(`The first date method is: ${yy} - ${mon} - ${day}  ${tim}:${min}`)
console.log(`The second time format is this: ${day} - ${mon} - ${yy}  ${tim}:${min}`)
console.log(`The third time format is this: ${day}/${mon}/${yy}  ${tim}:${min}`)