// Esperar a que cargue todo el documento HTML
document.addEventListener("DOMContentLoaded", () => {
    const btnProcesar = document.getElementById("btnProcesar");
    const userInput = document.getElementById("userInput");
    const consoleScreen = document.getElementById("consoleScreen");

    // Respuestas predefinidas interactivas de simulación de IA
    const respuestasIA = {
        robot: "🤖 ALERTA: Automatización detectada. Los androides mecánicos están listos para asistirte.",
        futuro: "🚀 PREDICCIÓN: En el futuro la computación cuántica hará que esta pantalla sea un holograma 3D.",
        mente: "🧠 SINAPSIS: Cargando red neuronal artificial. Similitud con el cerebro humano: 74%.",
        arte: "🎨 CREACIÓN: Generando imagen abstracta en tu mente... La belleza matemática es arte puro."
    };

    // Función que procesa la interacción
    function simularProcesamiento() {
        const textoOriginal = userInput.value.trim().toLowerCase();
        
        if (textoOriginal === "") {
            consoleScreen.innerHTML = `<span style="color: #ff0055;">> [ERROR] Por favor, ingresá algún dato para que la IA pueda computar.</span>`;
            return;
        }

        // Efecto visual instantáneo de "Cargando..."
        consoleScreen.innerHTML = `<span style="color: #00f6ff;">> Analizando cadena de texto...</span><br><span style="color: #9d00ff;">> Buscando patrones en base de datos...</span>`;
        
        // Simular un retraso de procesamiento de 900ms (Hace que parezca que piensa)
        setTimeout(() => {
            let respuestaFinal = "";

            // Verificar si el usuario escribió una de nuestras palabras clave
            if (respuestasIA[textoOriginal]) {
                respuestaFinal = respuestasIA[textoOriginal];
            } else {
                // Respuesta genérica por defecto si escribe cualquier otra cosa
                respuestaFinal = `✨ RESULTADO: Procesé tu palabra "${textoOriginal.toUpperCase()}". Mi algoritmo determinó que tiene un potencial tecnológico del 99.8% para cambiar el mundo.`;
            }

            // Inyectar el resultado final en la pantalla del usuario
            consoleScreen.innerHTML = `<span style="color: #00ff66;">> [PROCESO COMPLETADO EXITOSAMENTE]</span><br><br>${respuestaFinal}`;
        }, 900);
    }

    // Evento de clic en el botón
    btnProcesar.addEventListener("click", simularProcesamiento);

    // Permitir presionar "Enter" en el teclado para procesar también
    userInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            simularProcesamiento();
        }
    });
});