let email = document.getElementById('email')
let password = document.getElementById('password')
let confirmPassword = document.getElementById('confirm-password')
let form = document.getElementById('reg-form')
let username = document.getElementById('username')

form.addEventListener('submit', (e) => {
    let errorMsg = [];

    if (username.value.length < 3 || username.value == "") {
        let x = "Username should consist of atleast 3 characters";
        errorMsg.push(x)
    }

    if (password.value !== confirmPassword.value) {
        let x = "Password and Confirm Password are not same. Please try again"
        errorMsg.push(x)
    }
    if(password.value.length < 8){
        let x = "Password must contain 8 characters"
        errorMsg.push(x)
    }

    if (errorMsg.length > 0) {
        e.preventDefault()
        let err = errorMsg.join('\n')
        alert(err)

    }
})
