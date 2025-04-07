

document.addEventListener("DOMContentLoaded", function () {
    const registerBox = document.querySelector(".register-box");
    const loginBox = document.querySelector(".login-box");
    const showRegister = document.getElementById("show-register");
    const showLogin = document.getElementById("show-login");

    // Show Registration Form
    showRegister.addEventListener("click", function (event) {
        event.preventDefault();
        registerBox.classList.add("active");
        loginBox.classList.remove("active");
    });

    // Show Login Form
    showLogin.addEventListener("click", function (event) {
        event.preventDefault();
        loginBox.classList.add("active");
        registerBox.classList.remove("active");
    });

    // Show login by default
    registerBox.classList.add("active");

    // Form Validation (Example)
    document.getElementById("register-form").addEventListener("submit", function (event) {
        event.preventDefault();
        const username = document.getElementById("reg-username").value.trim();
        const email = document.getElementById("reg-email").value.trim();
        const password = document.getElementById("reg-password").value.trim();

        if (username === "" || email === "" || password === "") {
            alert("All fields are required!");
            return;
        }
        alert("Registration Successful!");
    });

    document.getElementById("login-form").addEventListener("submit", function (event) {
        event.preventDefault();
        const email = document.getElementById("login-email").value.trim();
        const password = document.getElementById("login-password").value.trim();

        if (email === "" || password === "") {
            alert("Email and password are required!");
            return;
        }
        alert("Login Successful!");
    });
});