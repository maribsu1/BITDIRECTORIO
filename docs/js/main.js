'use strict';

const form = document.querySelector('form');
const mensaje = document.querySelector('#mensaje');
const mensajeLogin = document.querySelector('#mensaje-login');

const usuarioRegistrado = {
  correo: '',
  contrasena: ''
};

let usuario = null;

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const nombre = document.querySelector('#nombre').value;
  const correo = document.querySelector('#correo2').value;
  const contrasena = document.querySelector('#contrasena2').value;

  usuario = {
    nombre: nombre,
    correo: correo,
    contrasena: contrasena
  };

  usuarioRegistrado.correo = correo;
  usuarioRegistrado.contrasena = contrasena;

  mensaje.textContent = `${usuario.nombre} has completado tu registro, ya puedes iniciar sesión!`;
  form.style.display = 'none';

  document.querySelector('#login').style.display = 'block';
});

const loginForm = document.querySelector('#login form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const correo = document.querySelector('#correo').value;
  const contrasena = document.querySelector('#contrasena').value;

  if (correo === usuario.correo && contrasena === usuario.contrasena) {
    window.location.href = `directorio.html?nombre=${usuario.nombre}`;
  } else {
    mensajeLogin.textContent = `Las credenciales son incorrectas, por favor intente de nuevo.`;
  }
});
