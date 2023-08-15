
const user = document.getElementById("formulario__usuario");
const pass = document.getElementById("formulario__contraseña");
const aviso1 = document.getElementById("formulario__Aviso_user");
const aviso2 = document.getElementById("formulario__Aviso_pass");

document.getElementById("formulario").addEventListener("submit", (e) => {
    e.preventDefault();
    
    if (user.value !== "" && pass.value !== "") {
        // Simulación 
        const token = "aqui_el_token_de_sesion";
        
        // Establecer una cookie con el token
        document.cookie = `token=${token}; path=/`;
        
        alert("Inicio de sesión exitosa");
        // Redireccionar a la página index
        window.location.href = "index.html";
        
    } else {
        if (user.value === "") {
            aviso1.style.opacity = "1";
        }
        if (pass.value === "") {
            aviso2.style.opacity = "1";
        }
    }
});

user.addEventListener("click", () => {
    aviso1.style.opacity = "0";
});
pass.addEventListener("focus", () => {
    aviso2.style.opacity = "0";
});

const checkbox = document.getElementById("ver-password");
checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
        pass.type = "text";
    } else {
        pass.type = "password";
    }
});

