import {isPrime,leapYear,isArmstrong} from "../../Javascript/exportModules.js"

// Problem 1: Filter Even Numbers
const filterEven = (arr) => arr.filter(num => num%2===0)

// Problem 2: Filter Odd Numbers
const filterOdd = (arr) => arr.filter(num => num%2!=0)

// Problem 3: Filter Positive Numbers
const filterPositive = (arr) => arr.filter(num => num>0)

// Problem 4: Filter Numbers Greater Than a Given Value 50
const greaterThan50 = (arr) => arr.filter(num => num>50)

// Problem 5: Filter Multiples of 5
const multipleOf5 = (arr) => arr.filter(num => num%5===0)

// Problem 6: Filter Prime Numbers
const checkPrime = (arr => {
    return arr.filter(num => {
        return isPrime(num)
    })
})

// Problem 7: Filter Perfect Squares
const perfectSquares = (arr => {
    return arr.filter(num => {
        return num >=0 && Number.isInteger(Math.sqrt(num))
    })
})

// Problem 8: Filter Numbers Within a Range
const filterRange = (arr => {
    return arr.filter(num => num>=20 && num<=50)
})

// Problem 9: Filter Leap Years
const filterLeapYear = arr => arr.filter(num => leapYear(num))

// Problem 10: Number Filtering Challenge
const filterMultiple = (arr => {
    return arr.filter(num => {
        return num>=20 && num<=100 && num%2===0 && num%3!=0
    })
})

// Bonus Challenge 1: Filter Armstrong Numbers
const checkArmStrong = arr => arr.filter(num => isArmstrong(num))

// Bonus Challenge 2: Filter Numbers Divisible by Multiple Values 2,3,5 simultaneously
const filterMultipleDivisors = arr => {
    return arr.filter(num => {
        return num%2===0 && num%3===0 && num%5===0
    })
}

// Separate test arrays (names describe their purpose)
const evenTestArray = [3, 8, 15, 20, 25, 30]
const oddTestArray = [2, 7, 10, 15, 18, 21]
const positiveTestArray = [-10, 5, 0, -8, 12, 20]
const greaterThan50Array = [25, 60, 48, 90, 15, 75]
const multiplesOf5Array = [12, 15, 20, 23, 30, 41]
const primesTestArray = [4, 5, 7, 8, 11, 15, 17]
const perfectSquaresTestArray = [4, 6, 9, 12, 16, 20, 25]
const range20to50TestArray = [10, 18, 20, 35, 50, 55, 70]
const leapYearsTestArray = [1999, 2000, 2004, 2005, 2100, 2400]
const multipleFilterTestArray = [18, 24, 28, 36, 44, 75, 90, 98, 102]
const armstrongTestArray = [153, 125, 370, 371, 407, 500]
const multipleDivisorsTestArray = [10, 15, 30, 45, 60, 75, 90, 100]

const evenNumbers = filterEven(evenTestArray);
console.log("Even Numbers:", evenNumbers);

const oddNumbers = filterOdd(oddTestArray);
console.log("Odd Numbers:", oddNumbers);

const positiveNumbers = filterPositive(positiveTestArray);
console.log("Positive Numbers:", positiveNumbers);

const gt50 = greaterThan50(greaterThan50Array);
console.log("Greater Than 50:", gt50);

const mult5 = multipleOf5(multiplesOf5Array);
console.log("Multiples of 5:", mult5);

const primes = checkPrime(primesTestArray);
console.log("Prime Numbers:", primes);

const squares = perfectSquares(perfectSquaresTestArray);
console.log("Perfect Squares:", squares);

const inRange = filterRange(range20to50TestArray);
console.log("Numbers in Range [20-50]:", inRange);

const leapYears = filterLeapYear(leapYearsTestArray);
console.log("Leap Years:", leapYears);

const multiples = filterMultiple(multipleFilterTestArray);
console.log("Multiples (20-100, even, not div by 3):", multiples);

const armstrong = checkArmStrong(armstrongTestArray);
console.log("Armstrong Numbers:", armstrong);

const divisors = filterMultipleDivisors(multipleDivisorsTestArray);
console.log("Divisible by 2, 3, and 5:", divisors);