// JS Flow Travel Nice - Version 2

// Capturamos los botones
const btnVerLugares = document.getElementById('btn-ver-lugares');
const btnConocenos = document.getElementById('btn-conocenos');
const btnVideos = document.getElementById('btn-videos');
const btnAdondeViajar = document.getElementById('btn-adonde-viajar');

// Capturamos las secciones
const seccionLugares = document.getElementById('seccion-lugares');
const seccionConocenos = document.getElementById('seccion-conocenos');
const seccionVideos = document.getElementById('seccion-videos');
const seccionAdondeViajar = document.getElementById('seccion-adonde-viajar');

// Función para esconder todas las secciones
function ocultarSecciones() {
    seccionLugares.style.display = 'none';
    seccionConocenos.style.display = 'none';
    seccionVideos.style.display = 'none';
    seccionAdondeViajar.style.display = 'none';
}

// Función para mostrar la sección deseada
function mostrarSeccion(seccion) {
    ocultarSecciones();
    seccion.style.display = 'block';
}

// Eventos de los botones
btnVerLugares.addEventListener('click', () => mostrarSeccion(seccionLugares));
btnConocenos.addEventListener('click', () => mostrarSeccion(seccionConocenos));
btnVideos.addEventListener('click', () => mostrarSeccion(seccionVideos));
btnAdondeViajar.addEventListener('click', () => mostrarSeccion(seccionAdondeViajar));

// Opcional: iniciar mostrando la primera sección
mostrarSeccion(seccionLugares);
