function registerclick() {
    const text = document.getElementById("text");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmpassword = document.getElementById("confirmpassword");
    //const register = document.getElementById("register");

 
    text.style.border = "1px solid black";
    email.style.border = "1px solid black";
    password.style.border = "1px solid black";
    confirmpassword.style.border = "1px solid black";
    con.textContent = "";

    if (!text.value || !email.value || !password.value || !confirmpassword.value) {

        if (!text.value && !email.value && !password.value && !confirmpassword.value || !text.value && !email.value || !email.value && !password.value || !text.value &&  !password.value )
 {
            text.style.border = "2px solid red";
            email.style.border = "2px solid red";
            password.style.border = "2px solid red";
            con.textContent = "Please fill all details";
        }
        else {
            if (!text.value) {
                text.style.border = "2px solid red";
                con.textContent = "Please fill username details";
            }

            if (!email.value) {
                email.style.border = "2px solid red";
                if (!con.textContent) con.textContent = "Please fill email details";
            }

            if (!password.value) {
                password.style.border = "2px solid red";
                if (!con.textContent) con.textContent = "Please fill password details";
            }
            if (!confirmpassword.value) {
                password.style.border = "2px solid red";
                if (!con.textContent) con.textContent = "Please fill password details";
            }
        }

    } else {
        document.getElementById("shop").style.display = "none";
        document.getElementById("registerform").style.display = "flex";
    }
}
window.onload = function () {
    const register = document.getElementById("register");
    register.addEventListener("click", registerclick);
}; 