document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('saludo').addEventListener('click', function() {
        alert('¡Hola, soy el div!');
    });


    document.getElementById('boton').addEventListener('click', function(event) {
        event.stopPropagation();
        alert('¡Hola!');
    });
});