let close = document.getElementById("close")
let reset = document.getElementById("reset")
let submit = document.getElementById("submit")
let guessed_number = document.getElementById("guessed_number")
let status_text = document.getElementById("status_text")
let hidden_number = document.getElementById("hidden_number")

let random_number = 0;

guessed_number.disabled = true;
submit.disabled = true;

reset.addEventListener("click",()=>{
    random_number = Math.floor(Math.random()*100)+1;
    status_text.innerHTML = "Game Started!!!"
    hidden_number.innerHTML = "🔒"
    guessed_number.disabled = false;
    submit.disabled = false;
    guessed_number.value = "";
    guessed_number.focus();
})

submit.addEventListener("click",()=>{
    let guess = parseInt(guessed_number.value);

    if(guess > random_number){
        status_text.innerHTML = "Wrong Guess!! Try a little lower value"
    }
    else if (guess < random_number){
        status_text.innerHTML = "Wrong Guess!! Try a little grater value"
    }
    else{
        hidden_number.innerHTML = guess
        status_text.innerHTML = "Congratulations!!! You won the Game"
    }
})

close.addEventListener("click", ()=>{
    window.close()
})
