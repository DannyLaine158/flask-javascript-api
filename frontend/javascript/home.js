function loadData() {
    const userId = parseInt(localStorage.getItem("user_id"));
    if (!userId)
        window.location.href = './login.html';
    
    fetch('http://127.0.0.1:5000/api/users')
    .then(res => res.json())
    .then(users => {
        console.log(users);
        
        // Obtenemos el elemento html que vamos a rellenar
        const greeting = document.getElementById("user-greeting");
        // De todos los usuarios encontramos al que sea el propio
        const user = users.find(u => u.id === userId);
        // Llenamos el html con el usuario encontrado
        greeting.textContent = `Bienvenido ${user.username}`;
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const imageInput = document.getElementById("imageInput");
    const fabUpload = document.getElementById("fab-upload");

    fabUpload.addEventListener("click", () => {
        imageInput.click();
    });
    
    loadData();
});