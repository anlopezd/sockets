
const lblonline = document.getElementById("lblonline");
const lbloffline = document.getElementById("lbloffline");
const txtMensaje = document.getElementById("txtMensaje");
const btnEnviar = document.getElementById("btnEnviar")


const socket = io()

socket.on("connect", () => {

    lbloffline.style.display = "none"
    lblonline.style.display = "inline-block"
})

socket.on("disconnect", () => {
    console.log("Desconectado del servidor")

    lbloffline.style.display = "inline-block"
    lblonline.style.display = "none"
})

socket.on("enviar-mensaje", (payload) => {
    console.log(payload)
})

btnEnviar.addEventListener("click", () => {
    const mensaje = txtMensaje.value;
    const payload = {
        mensaje,
        id: "12345",
        fecha: new Date().getTime()
    }

    socket.emit("enviar-mensaje", payload, (id) => {
        console.log("Desde el servidor", id)
    })
})