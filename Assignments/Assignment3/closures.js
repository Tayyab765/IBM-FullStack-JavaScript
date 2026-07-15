// example function

function createCounter() {
  let count = 0; // Private variable

  return {
    increment: function() {
      count++;
      return count;
    },
    decrement: function() {
      count--;
      return count;
    }
  };
}

const counter = createCounter();
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement()); 

// Problem 1: Smart Calculator Factory
function operationFactory(operation){
    const sum = (a,b) => a+b
    const diff = (a,b) => a-b
    const multiply = (a,b) => a*b
    const divide = (a,b) => a/b


    switch(operation){
        case "+": case "sum": case "add":
            return sum
        case "-": case "diff": case "sub":
            return diff
        case "*": case "multiply":
            return multiply
        case "/": case "divide":
            return divide
        default: return console.log("Wrong Operator")
    }
}

const add = operationFactory("add");
console.log(add(10, 20));
const multiply = operationFactory("multiply")(10,3)
console.log(multiply)

// Problem 1: Smart calcilator Factory 2nd method
const operations= () => {
    return {
        add: function(a,b){
            return a+b
        },
        sub: function(a,b){
            return a-b
        },
        multiply: function(a,b){
            return a*b
        },
        divide: function(a,b){
            return a/b
        }

    }
}

const adding = operations();
console.log(adding.add(2,3))

// Problem 2: Personalized Greeting Generator
function makeGreeter(name){
    return function(){
        return `Hello, ${name}! Welcome to the system.`
    }
}

const greetAli = makeGreeter("Ali");
console.log(greetAli())

// Problem 3: Power Function Builder
function powerFunction(exponent){
    const calculation = (num) => {
        return num**exponent
    }
    return calculation
}
console.log(powerFunction(2)(2));
const cube = powerFunction(3);
console.log(cube(4));

// Problem 4: Shopping Discount Calculator
const discountMaker = (discountPercentage) => {
    return (price) => {
         total= price -  ((price * discountPercentage) / 100)
        return total
    }
}
const studentDiscount = discountMaker(10);
console.log(studentDiscount(2000))