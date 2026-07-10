// simple example
const firstFunction= (secondFunction) => {
    console.log("Hello from first function")
    secondFunction();
}
const secondFunction = () => console.log("Hello from second section")

//firstFunction(secondFunction)

// Problem 1: Greeting System
const greetUser = (name,callback) => {
    console.log("Hello, ",name,"! Wellcome to Our System.")
    callback(name);
}
const goodBye = (name) => console.log("Goodbye, ",name, ". Have a Nice day.")
greetUser("Ali",goodBye)



// Problem 2: Math Operations

const calculate = (a,b,operation) => operation(a,b)
const add = (a,b) => a+b
const sub = (a,b) => a-b
const prod = (a,b) => a*b
const divide = (a,b) => a/b
const modulus = (a,b) => a%b
const exponent = (a,b) => a**b

console.log("Addition: ",calculate(20,5,add))
console.log("Subtraction: ",calculate(20,5,sub))
console.log("Multiplication: ",calculate(20,5,prod))
console.log("Division: ",calculate(20,5,divide))
console.log("Modulus: ",calculate(20,5,modulus))
console.log("Exponent: ",calculate(20,5,exponent))



// Problem 3: Array Transformation
const processArray = (arr,callback) => arr.map(callback)

let numbers = [2,-3,5]

const double = num => num*2
const square = num => num*num
const cube = num => num**3
const increment = num => num+=10
const absolute = num => num>=0 ? num : num * (- 1)


console.log("Double:",processArray(numbers,double))
console.log("Square:",processArray(numbers,square))
console.log("Cube:",processArray(numbers,cube))
console.log("Increment:",processArray(numbers,increment))
console.log("Absolute:",processArray(numbers,absolute))



// Problem 4: Task Completion
const doTask = (taskName,callback) => {
    console.log("Doing task: ",taskName)
    callback()
}
const sucess = () => console.log("Task Completed Sucessfully")
const save = () => console.log("Saving task history...")
const notify = () => console.log("Sending completion notification...")


doTask("Download File",save)
doTask("Download File",notify)
doTask("Download File",sucess)



// Problem 5: Event Simulation
// Simulate a button click by creating a function

const onClick = (callback) => {
    console.log("On Click Iniciated.")
    callback();
}

const clicked = () => console.log("Button Clicked")

const color_change = () => console.log("Color Changed")

const loading = () => console.log("Loading")

const formSubmit = () => console.log("Form Submitted Sucessfully")

onClick(clicked)
onClick(color_change)
onClick(loading)
onClick(formSubmit)


// Problem 6: Authentication Flow
const login = (username,password,callback) => {
    if(username === "admin" && password === "12345")
        callback("Login Successful")
    else
        callback("Login Failed")
}
const displayMessage = (message) => console.log(message)

login("ali","1111",displayMessage)
login("admin","12345",displayMessage)


// Problem 7: Filtering Data
const filterData = (data,callback) => {
   return data.filter(callback)
}

const data = [12, 25, -8, 45, 60, 73, -15]


const even = num => num%2===0 
const odd = num => num%2!=0 
const positive = num => num>0
const negative = num => num<0
const greater50 = num => num>50
const divisible = num => num%3===0 || num%5===0 
const divisibleAnd = num => num%3===0 && num%5===0 







console.log("Even Numbers:",filterData(data,even))
console.log("Odd Numbers:",filterData(data,odd))
console.log("Positive Numbers:",filterData(data,positive))
console.log("Negative Numbers:",filterData(data,negative))
console.log("Greater than 50:",filterData(data,greater50))
console.log("Divisible by 3 or 5:",filterData(data,divisible))
console.log("Divisible by 3 and 5:",filterData(data,divisibleAnd))