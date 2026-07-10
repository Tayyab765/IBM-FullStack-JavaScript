class Calculator {
    
    constructor (num1=0,num2=0){
        this.x=num1;
        this.y=num2;
    }
    add = () => {
        return this.x+this.y
    }
    sub = () => this.x-this.y

    printvalues(){
        console.log(this.x,this.y)
    }
    
}

const myCal = new Calculator(5,7)

// myCal.printvalues()
// console.log("Add: ",myCal.add())
// console.log("Sub: ",myCal.sub())


class Animal {
    constructor(animalLKingdom){
        this.animalLKingdom=animalLKingdom
    }
    speak(){
        console.log("Animal Speaks!")
    }
    printProperties(){
        console.log(this.animalLKingdom,this.breed)
    }
}

class Dog extends Animal {
    #breed //private value using # sign in Js there is no protected 
    constructor(animalLKingdom = "someanimalkingdom",breed = "somebreed"){
        super(animalLKingdom)
        this.#breed=breed
    }
    speak(){
        console.log("Dog Barks!")
    }
    printProperties(){
        console.log(this.animalLKingdom,this.#breed)
    }
}

const myAnimal = new Animal("kingdomABC")
myAnimal.speak()

//only pass breed to Dog class and animalLKingdom will be default value
const myDog = new Dog(undefined,"German Shepherd")

myDog.speak()
myDog.printProperties()
myAnimal.printProperties()  //parent can't access chaild members
console.log(myDog.breed)