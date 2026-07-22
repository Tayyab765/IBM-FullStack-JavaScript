let random_number_text = document.getElementById("random_number_text")
let random_number_button = document.getElementById("random_number_button")

random_number_button.addEventListener("click",()=>{
    let random_number = Math.floor(Math.random()*20)+1;
    random_number_text.innerHTML = random_number;
})