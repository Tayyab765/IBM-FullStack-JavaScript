
// higher order function for the calculator operations
const operation = (operator) => {
    const sum = (a,b) => a+b
    const diff = (a,b) => a-b

    switch(operator){
        case "+": case "sum": case "add":
            return sum
        case "-": case "diff": case "sub":
            return diff
        default: return console.log("Wrong Operator")
    }
}

//console.log(operation("sub")(2,3))


// higher order function that returns discounted price 

const createDiscount = (percentage) => {
    const discountedPrice = (price) => {
        total= price -  ((price * percentage) / 100)
        return total
    }
    return discountedPrice
    
}

console.log(createDiscount(10)(1000))