
export const add = (a,b) => a+b
export const diff = (a,b) => a-b

//find number is prime or not
export function isPrime(num){
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

export const leapYear = (year) => {
    if((year%400===0) || (year%4===0 && year%100 != 0))
        return true
    else
        return false
}

export function isArmstrong(num){
    const str = num.toString()
    const power = str.length
    let sum=0;

    for (let i=0; i<power; i++){
        sum = sum + Math.pow(parseInt(str[i]),power)
    }
    return sum === num

}

