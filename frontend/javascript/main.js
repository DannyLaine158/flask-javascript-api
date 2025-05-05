let btnLogin = document.getElementById("btnLogin");
console.log(btnLogin);

btnLogin.addEventListener("click", () => {
    let varUsername = document.getElementById("username").value;
    let varPassword = document.getElementById("password").value;

    // Unión entre python y javascript
    fetch('http://127.0.0.1:5000/api/register', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            username: varUsername,
            password: varPassword
        })
    })
    .then(res => res.json())
    .then(data => console.log(data));
});