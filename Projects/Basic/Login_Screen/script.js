let submit = document.getElementById("submit")
let password = document.getElementById("password")
let user_id = document.getElementById("user_id")

submit.addEventListener("click", ()=>{
    let id = user_id.value;
    let pswd = password.value;
    if(id === "tayyab" && pswd ==="12345678")
        alert("Login Sucessful")
    if(id === "" || pswd ==="")
        alert("Please fill all fields")
    else
        alert("Invalid Credentials.")
})