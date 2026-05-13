"use strict";

const fechaEvento = document.getElementById("fechaEvento");
const botonIniciar = document.getElementById("botonIniciar");
const resultado = document.getElementById("resultado");

let intervalo;

botonIniciar.addEventListener("click", function () {

    const fechaElegida = fechaEvento.value;

    if (fechaElegida === "") {
        resultado.textContent = "Por favor selecciona una fecha y hora.";
        return;
    }

    const fechaFinal = new Date(fechaElegida);

    clearInterval(intervalo);

    intervalo = setInterval(function () {

        const ahora = Date.now();

        const tiempoEvento = fechaFinal.getTime();

        const diferencia = tiempoEvento - ahora;

        if (diferencia <= 0) {

            clearInterval(intervalo);

            resultado.textContent = "¡Llegó el evento!";

            return;
        }

        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

        const horas = Math.floor(
            (diferencia / (1000 * 60 * 60)) % 24
        );

        const minutos = Math.floor(
            (diferencia / (1000 * 60)) % 60
        );

        const segundos = Math.floor(
            (diferencia / 1000) % 60
        );

        resultado.textContent =
            dias + "d " +
            horas + "h " +
            minutos + "m " +
            segundos + "s";

    }, 1000);

});