let userInput = prompt("Enter your Age")

userInput = Number(userInput)
let presentAge = currentYear - userInput

if (userInput >= 30) {
    console.log("You are old enough to drive")
} else {
    let yearsLeft = 18 - userInput;
    console.log(`you are left with ${yearsLeft} to drive.`);
}

let myAge = 25
let yourAge = prompt("Enter your age")
age = Number(age)

if (yourAge > myAge) {
    console.log("you are older than me")
}
else if (yourAge < myAge) {
    console.log("you are younger than me")
}
else {
    console.log("we are the same age")
}

let a = 4
let b = 3

if (a > b) {
    console.log('a is gretaer than b')
    alert(`${a} is greater than ${b}`)
}
else {
    console.log('a is less than b')
    alert(`${a} is less than ${b}`)
}

let evenNumb = prompt("Enter Number")
if (evenNumb % 2 === 0) {
    console.log(`${evenNumb} is an even number`)
    alert(`${evenNumb} is an even number`)
}

else {
    console.log(`${evenNumb} is an odd number`)
    alert(`${evenNumb} is an odd number`)
}


let userGrade = prompt('What was your Grade')

if (userGrade >= 80 && userGrade <= 100) {
    console.log('Your grade is A, Keep it up!')
    alert('Your grade is A, Keep it up!')
}

else if (userGrade >= 70 && userGrade <= 79) {
    console.log('Your grade is B, you are almost there!')
    alert('Your grade is B, you are almost there!')
}

else if (userGrade >= 60 && userGrade <= 69) {
    console.log('Your grade is C, Keep working!')
    alert('Your grade is C, Keep working!')
}

else if (userGrade >= 50 && userGrade <= 59) {
    console.log('Your grade is D, You can do better!')
    alert('Your grade is D, You can do better!')
}

else if (userGrade >= 0 && userGrade <= 49) {
    console.log('Your grade is F,!')
    alert('Your grade is F,!')
}

else {
    console.log('You did not partake in the exam, INVALID GRADE!')
    alert('You did not partake in the exam, INVALID GRADE!')
}


let userSeason = prompt('Input month for season check')

if (userSeason = 'septembr' || 'october' || 'november') {
    console.log('The current Season is Autumn')
    alert('The current Season is Autumn')
}

else if (userSeason === 'decemeber' || 'january' || 'february') {
    console.log('The curent Season is Winter')
    alert('The current Season is Winter')
}

else if (userSeason === 'march' || 'april' || 'may') {
    console.log('The current Season is Spring')
    alert('The current Season is Spring')
}

else if (userSeason === 'june' || 'july' || 'august') {
    console.log('The current Season is Summer')
    alert('The current Season is Summer')
}

else {
    console.log('Invalid Input')
    alert('Invalid Input')
}


let userDay = prompt('What is the day today?')

if (userDay === 'monday' || 'tuesday' || 'wednesday' || 'thursday' || 'friday') {
    console.log(`${userDay} is a working Day.`)
    alert(`${userDay} is a working Day.`)
}

else if (userDay === 'saturday' || 'sunday') {
    console.log(`${userDay} is a weekend.`)
    alert(`${userDay} is a weekend.`)
}

else {
    console.log(`${userDay} is not a DAY of the week. INVALID INPUT`)
    alert(`${userDay} is not a DAY of the week. INVALID INPUT`)
}

let userMonth = prompt("Enter a Month")
switch (userMonth) {
    case 'january':
        console.log(`${userInput} has 31  days`)
        break
    case 'february':
        console.log(`${userInput} has 28  days`)
        break
    case 'march':
        console.log(`${userInput} has 31  days`)
        break
    case 'april':
        console.log(`${userInput} has 30  days`)
        break
    case 'may':
        console.log(`${userInput} has 31  days`)
        break
    case 'june':
        console.log(`${userInput} has 30  days`)
        break
    case 'july':
        console.log(`${userInput} has 31  days`)
        break
    case 'august':
        console.log(`${userInput} has 31  days`)
        break
    case 'september':
        console.log(`${userInput} has 30  days`)
        break
    case 'october':
        console.log(`${userInput} has 31  days`)
        break
    case 'november':
        console.log(`${userInput} has 30  days`)
        break
    case 'december':
        console.log(`${userInput} has 31  days`)
        break
    default:
        console.log('month not found')
}
