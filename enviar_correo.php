<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];
    $mensaje = $_POST["mensaje"];

    // Configura la dirección de correo a la que enviarás el mensaje
    $destinatario = "info@centurhuila.com.co";

    // Asunto del correo
    $asunto = "Duda y/o inquietud";

    // Crea el mensaje del correo
    $contenido = "Email: $email\n";
    $contenido .= "Mensaje: $mensaje\n";

    // Establece la cabecera del correo para que se pueda interpretar como texto plano
    $cabeceras = "Content-Type: text/plain; charset=UTF-8";

    // Envia el correo
    $enviado = mail($destinatario, $asunto, $contenido, $cabeceras);

    // Verifica si el correo fue enviado exitosamente
    if ($enviado) {
        echo "El correo ha sido enviado correctamente.";
    } else {
        echo "Error al enviar el correo.";
    }
}
?>
