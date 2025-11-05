/* ============================
   SELECCIÓN DE SECCIONES
============================ */

// Seleccionamos todas las secciones de historia
const storySections = document.querySelectorAll('.story-section');

// Clase que se añadirá para mostrar la sección
const visibleClass = 'visible';

/* ============================
   FUNCION PARA DETECTAR SCROLL
============================ */
function checkSections() {
    // Obtenemos la altura del viewport
    const triggerBottom = window.innerHeight * 0.85; 
    // 0.85 = el 85% de la altura de la pantalla, cuando la sección está cerca de entrar

    storySections.forEach(section => {
        // Obtiene la posición superior de la sección relativa al viewport
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {
            // Si la sección entra en el viewport, añadimos la clase 'visible'
            section.classList.add(visibleClass);
        }
    });
}

/* ============================
   EVENTO SCROLL
============================ */
window.addEventListener('scroll', checkSections);

/* ============================
   EJECUTAR AL CARGAR
============================ */
// Ejecutamos la función al cargar para que la primera sección ya se vea
checkSections();
