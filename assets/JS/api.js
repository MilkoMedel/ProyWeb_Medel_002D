// Espera a que el documento HTML esté completamente cargado y listo para manipularse
$(document).ready(function(evt){

    // Agrega un controlador de eventos al elemento con el id "consulta"
    $("#consulta").click(function(evt) {        

        // Realiza una solicitud GET a la URL "https://jsonplaceholder.typicode.com/users" para obtener datos de usuarios
        $.get("https://jsonplaceholder.typicode.com/users", function(data){

            // Imprime los datos obtenidos de la API en la consola del navegador para fines de depuración
            console.log(data);

            // Elimina todos los elementos hijos del elemento con el id "ranking". Esto limpia la tabla antes de agregar nuevos datos para evitar duplicados.
            $("#ranking").empty();

            // Itera sobre los datos de usuarios obtenidos de la API
            $.each(data, function(i, user){

                // Para cada usuario, agrega una nueva fila a la tabla con los detalles del usuario (id, nombre y correo electrónico)
                $("#ranking").append(`<tr><td style="border: 1px solid">${user.id}</td>
                <td style="border: 1px solid">${user.name}</td>
                <td style="border: 1px solid">${user.email}</td></tr>`);
            });
        });
    });
});
