

// Problem 1: Double Every Number
const doubleNumbers = (arr) => arr.map(num => num*2)

// Problem 2: Square Every Number
const square = (arr) => arr.map(num => num*num)

// Problem 3: Add a Constant to Every Element
const addConstant = (arr) => arr.map(num => num+10)

// Problem 4: Convert Celsius to Fahrenheit
const celciusToFarenhight = (arr) => arr.map(celsius => (celsius * 9 / 5) + 32)

// Problem 5: Replace Negative Numbers with Zero
const negToZero = (arr) => arr.map(num => num<0 ? 0 : num)

// Problem 6: Mark Bonus Calculator
const addBonus = (arr) => arr.map(num => (num+5) > 100 ? 100 : num+5)

// Problem 7: Even and Odd Transformation
const transformEvenOdd = (arr) => arr.map(num => (num%2) === 0 ? num*2 : num*3)

// Problem 8: Distance Conversion
const kilometerToMeter = (arr) => arr.map(num => num*1000)

// Problem 9: Electricity Bill Calculator
const billCalculator = (arr) => arr.map(num => num*18)

// Problem 10: Number TransformationChallenge
const transformNumber = (arr) => {
    return arr.map(num => {
        if(num%5===0)
            return num*10
        else if(num%2===0)
            return num*2
        else 
            return num*3
    })
}

// Bonus Challenge 1: Prime Number Transformation
    //find number is prime or not
function isPrime(num){
    if(num<=1){
        return false
    }
    if(num%2==0){
        return false
    }
    if(num>2){
        for(let i=3;i<num/2;i=i+2){
            if(num%i==0){
                return false
            }
        }
        
    }
    
    if(num==2){
        return true
    }
    else{
        return true
    } 

}
const primeTransformation = (arr) => arr.map(num => isPrime(num) ? num*num : num)

// Bonus Challenge 2: Custom Number Encoding
const numEncoding = (arr) => arr.map(num => (num*2)+5 > 50 ? 50 : (num*2)+5)


// display the results
const displayResults = (arr) => {
    console.log("Original Array: ", arr)
    console.log("Double Every Number: ", doubleNumbers(arr))
    console.log("Square Every Number: ", square(arr))
    console.log("Add a Constant to Every Element: ", addConstant(arr))
    console.log("Convert Celsius to Fahrenheit: ", celciusToFarenhight(arr))
    console.log("Replace Negative Numbers with Zero: ", negToZero(arr))
    console.log("Mark Bonus Calculator: ", addBonus(arr))
    console.log("Even and Odd Transformation: ", transformEvenOdd(arr))
    console.log("Distance Conversion: ", kilometerToMeter(arr))
    console.log("Electricity Bill Calculator: ", billCalculator(arr))
    console.log("Number Transformation: ", transformNumber(arr))
    console.log("Prime Number Transformation: ", primeTransformation(arr))
    console.log("Custom Number Encoding: ", numEncoding(arr))
}   

const arr = [-10, -3, 0, 1, 2, 3, 4, 7, 19, 45, 98, 100]
displayResults(arr)
