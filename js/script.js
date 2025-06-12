function verificarLogin() {
    const usuario = document.getElementById("usuario").value;
    const contrasena = document.getElementById("contrasena").value; 
    const mensaje = document.getElementById("mensaje");

    const usuarioValido = "agus";
    const contrasenaValida = "1234";

    if (usuario === usuarioValido && contrasena === contrasenaValida) {
        alert("✅ Acceso concedido. Bienvenido/a"); 
        mensaje.style.color = "black";
        


    } else {
        alert("❌ Usuario o contraseña incorrectos."); 
        mensaje.style.color = "black";
        document.getElementById("contrasena").value = "";
        document.getElementById("usuario").value = "";
    }
}
