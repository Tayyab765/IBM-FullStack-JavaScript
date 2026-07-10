

// Task 1: Add Two Numbers
const add = (a,b) => a+b
console.log("add(2,3):",add(2,3))

// Task 2: Subtract Two Numbers
const sub = (a,b) => a-b
console.log("sub(3,2):",sub(3,2))

// Task 3: Multiply Three Numbers
const multiply = (a,b,c) => a*b*c
console.log("multiply(3,2,10):",multiply(3,2,10))

// Task 4: Check if a Number is Even
const isEven = a => a%2===0
console.log("isEven(3):",isEven(3), "isEven(4):",isEven(4))

// Task 5: Find the Square of a Number
const square = num => num*num
console.log("Square(3):",square(3))

// Task 6: Greet a User
const greet = name => "Hello " + name
console.log("Greet Ali:",greet("Ali"))

// Task 7: Find the Maximum of Two Numbers
const findMax = (a,b) => a>b ? a:b
console.log("Find Max(7,3):",findMax(7,3))

// Task 8: Calculate the Area of a Rectangle
const area = (length,width) => length*width
console.log("Find Area(7,3):",area(7,3))

// Task 9: Check if a Person is an Adult
const isAdult = age => age>=18
console.log("isAdult(44):",isAdult(44), "isAdult(12):", isAdult(12))

// Task 10: Convert Celsius to Fahrenheit
const celsiusToFahrenheit = celsius => (celsius * 9 / 5) + 32
console.log("Celcius tO Farenheight(40):",celsiusToFahrenheit(40))

//Bonus Challenge

//Task 11: Calculate Total Price
const calculateTotal = (price,tax) => {
    let total = price + tax;
    return total;
}
console.log("Total Price(100,10):",calculateTotal(100,10))


// Task 12: Combine First and Last Name
const fullName = (firstName, lastName) => {
    let name = firstName + " " + lastName;
    return name;
}
console.log("Full Name(Ali,Khan):",fullName("Ali","Khan"))

// Task 13: Find the Cube of a Number
const cube = num => {
    let result = num * num * num;
    return result;
}
console.log("Cube of 3:",cube(3))

// Task 14: Calculate the Average of Three Numbers
const average = (num1,num2,num3) => {
    let sum = num1 + num2 + num3;
    return sum / 3;
}
console.log("Average of 3,4,5:",average(3,4,5))

// Task 15: Check if a Number is Positive
const isPositive = num => num > 0 ? true : false
console.log("isPositive(5):",isPositive(5), "isPositive(-3):",isPositive(-3))