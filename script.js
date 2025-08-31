function loginclick() {
    const text = document.getElementById("text");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const con = document.getElementById("con");

 
    text.style.border = "1px solid black";
    email.style.border = "1px solid black";
    password.style.border = "1px solid black";
    con.textContent = "";

    if (!text.value || !email.value || !password.value) {

        if (!text.value && !email.value && !password.value || !text.value && !email.value || !email.value && !password.value || !text.value &&  !password.value )
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
        }

    } else {
        document.getElementById("shop").style.display = "none";
        document.getElementById("logincard").style.display = "flex";
    }
}

function registerclick() 
{
    const textt= document.getElementById("textt");
    const emaill = document.getElementById("emaill");
    const passwordd = document.getElementById("passwordd");
    const confirmpasswordd = document.getElementById("confirmpasswordd");
    const conn = document.getElementById("conn");

 
    textt.style.border = "1px solid black";
    emaill.style.border = "1px solid black";
    passwordd.style.border = "1px solid black";
    confirmpasswordd.style.border = "1px solid black";
    conn.textContent = "";

    if (!textt.value || !emaill.value || !passwordd.value || !confirmpasswordd.value) 
        {

        if (!textt.value && !emaill.value && !passwordd.value && !confirmpasswordd.value || !textt.value && !emaill.value &&  !passwordd.value|| !emaill.value && !confirmpasswordd.value &&  !textt.value|| !textt.value &&  !passwordd.value &&  !emaill.value || !textt.value && !emaill.value || !emaill.value && !passwordd.value || !textt.value &&  !passwordd.value || !passwordd.value && !confirmpasswordd.value || !emaill.value && !confirmpasswordd.value || !textt.value &&  !confirmpasswordd.value )
        {
            textt.style.border = "2px solid red";
            emaill.style.border = "2px solid red";
            passwordd.style.border = "2px solid red";
            confirmpasswordd.style.border = "2px solid red";
            conn.textContent = "Please fill all details";
        }
        else 
            {
            if (!textt.value) {
                textt.style.border = "2px solid red";
                conn.textContent = "Please fill username details";
            }

            if (!emaill.value) {
                emaill.style.border = "2px solid red";
                if (!conn.textContent) conn.textContent = "Please fill email details";
            }

            if (!passwordd.value) {
                passwordd.style.border = "2px solid red";
                if (!conn.textContent) conn.textContent = "Please fill password details";
            }
            if (!confirmpasswordd.value) {
                confirmpasswordd.style.border = "2px solid red";
                if (!conn.textContent) conn.textContent = "Please fill password details";
            }
            }

        } 
    
    else {
        if (passwordd.value !== confirmpasswordd.value) {
            passwordd.style.border = "2px solid red";
            confirmpasswordd.style.border = "2px solid red";
            conn.textContent = "Passwords do not match";
        }
        else{ 
        document.getElementById("registerform").style.display = "none";
        document.getElementById("logincard").style.display = "flex";
    }
}
}
/*
window.onload = function () { 
    const register = document.getElementById("register"); 
    register.addEventListener("click", registerclick); 
}; */

window.onload = function () {
    const loginButton = document.getElementById("but");
    const registerButton=document.getElementById("butt");
    const registerpagee = document.getElementById("register");

    if (loginButton) 
        loginButton.addEventListener("click", loginclick);
    if (registerButton) 
        registerButton.addEventListener("click",registerclick);
    if(registerpagee)
        registerpagee.addEventListener("click",registerpage);
};

function registerpage() {
    document.getElementById("shop").style.display = "none";
    document.getElementById("registerform").style.display = "flex";
}

/*
window.onload = function () { 
    const but = document.getElementById("but"); 
    but.addEventListener("click", loginclick); 
};
*/
