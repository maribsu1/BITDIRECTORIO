'use strict';

const urlParams = new URLSearchParams(window.location.search);
const nombreUsuario = urlParams.get('nombre');
document.querySelector('#nombre-usuario').textContent = nombreUsuario;

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {

    var usuarios = JSON.parse(xhr.responseText);

    var directorio = "";
    usuarios.forEach(function(usuario) {
      directorio += "<div class='usuario'>";
      directorio += "<div class='usuario-id'>" + usuario.id + "</div>";
      directorio += "<img class='imagen-usuario' src='./img/imagen.png' alt='Imagen de usuario'>";
      directorio += "<div class='usuario-nombre'>" + usuario.name + "</div>";
      directorio += "<div class='usuario-email'>Email: " + usuario.email + "</div>";
      directorio += "<div class='usuario-telefono'>Teléfono: " + usuario.phone + "</div>";
      directorio += "</div>";
    });

    document.getElementById("directorio-usuarios").innerHTML = directorio;
  }
};

xhr.send();

var btnCerrarSesion = document.querySelector('#btn-cerrar-sesion');

btnCerrarSesion.addEventListener('click', function() {
  window.location.href = 'index.html';
});