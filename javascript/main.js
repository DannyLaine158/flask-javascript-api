let btnLogin = document.getElementById("btnLogin");
// console.log(btnLogin);

btnLogin.addEventListener("click", () => {
    let varUsername = document.getElementById("username").value;
    let varPassword = document.getElementById("password").value;

    // Unión entre python y javascript
    fetch('http://127.0.0.1:5000/api/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            username: varUsername,
            password: varPassword
        })
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if (data.user_id) {
            // Guarda como clave y valor en el localstorage
            localStorage.setItem('user_id', data.user_id);
            M.toast({
                html: data.mensaje,
                classes: 'green'
            });
        } else {
            M.toast({
                html: data.error,
                classes: 'red'
            });
        }
    })
    .catch(err => {
        M.toast({
            html: "Error de conexión",
            classes: 'red'
        });
    })
});