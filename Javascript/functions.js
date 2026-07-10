
//factorial of number
function fatctorial(num){
    prod=1
    for(let i=1;i<=num;i++){
        prod=prod*i
    }
    return prod
}
//console.log(fatctorial(5))


//find number is prime or not
function isPrime(num){
    if(num<=1){
        return false
    }
    if(num%2==0){
        return false
    }
    if(num>2){
        count=0;
        for(let i=3;i<num/2;i=i+2){
            count++;
            if(num%i==0){
                return false
            }
        }
        console.log(count)
    }
    
    if(num==2){
        return true
    }
    else{
        return true
    } 

}

//console.log(isPrime(19))

//print staric in loops
function printStar(num){
    for(let i=1;i<num;i++){
        let str="";
        for(let j=1;j<=i;j++){
            str=str+j
        }
        console.log(str)
    }
}
//printStar(5)

//print staric in loops
function printSpaces(num){
    for(let i=1;i<num;i++){
        spaces="";
        for(let j=1;j<=num-i;j++){
            spaces+=" "
        }        
        for(let j=1;j<=i;j++){
            spaces+=num;
        }
        console.log(spaces)
    }
}

printSpaces(5)
