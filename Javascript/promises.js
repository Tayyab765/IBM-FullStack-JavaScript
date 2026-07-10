// promises has three states, pending,fulfullied(resolve), or reject
// promise is a task that goes to delay, or its resuly will be shown in future and we have to handle its output


// console.log("Started")
// setTimeout(()=>{
//     console.log("hello world!")
// },5000)
// console.log("ended")

const processDelayer = new Promise((resolve,reject)=>{
    setTimeout(()=>{
    console.log("hello world!")
    resolve("5 second delay completed.")

    },1000)
})

// console.log("Started")

// processDelayer.then((result)=>{
//     console.log(result)
// })

// console.log("ended")

const processDelayerError = new Promise((resolve,reject)=>{
    setTimeout(()=>{
    //resolve("5 second delay completed.")
    reject("5 second delay completed but no response... request timeout")
    },5000)
})

console.log("Started")

processDelayerError.then((result)=>{
    console.log(result)
    console.log("ended")
}).catch((message)=>{
    console.log(message)
})

