function verificarLogin() {
    const usuario = document.getElementById("usuario").value;
    const contrasena = document.getElementById("contrasena").value; 
    const mensaje = document.getElementById("mensaje");

    const usuarioValido = "agus";
    const contrasenaValida = "1234";

    if (usuario === usuarioValido && contrasena === contrasenaValida) {
        mensaje.innerHTML = "✅ Acceso concedido. Bienvenido/a";
        mensaje.style.color = "black";
        document.body.style.backgroundColor = "#56fe4a"

    } else {
        mensaje.innerHTML = "❌ Usuario o contraseña incorrectos.";
        mensaje.style.color = "black";
        document.body.style.backgroundColor= "#E71010"
    }
}
