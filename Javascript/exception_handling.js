

const Printer = (x) => {
        console.log(x)
        console.log(y)
    
}
//Printer(4)


const myPrinter = (x) => {
    try{
        console.log(x)
        console.log(y)
    }catch(error){
        console.log("Error Occured:", error.message)
    }finally{   //runs always if error occurs or dont occur
        console.log("My printer function completed!")
    }
}
//myPrinter(4)


const dividor = (x,y) => {
    try{
        if(y===0) 
            throw Error("Can't divide by 0!")
        console.log("Division: ",x/y)

    }catch(e){
        console.log("Error Occured:", e.message)
    }finally{   // finally is not necessary
        console.log("Dividor function completed!")
    }
}

dividor(10,0)

