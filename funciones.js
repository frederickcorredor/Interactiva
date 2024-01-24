
  function mostrarSeccion(seccion) {
    // Ocultar todas las secciones
    for (let i = 1; i <= 24; i++) {
      document.getElementById(`section${i}`).classList.add('hidden');
    }

    // Mostrar la sección seleccionada
    document.getElementById(`section${seccion}`).classList=('hidden');
  }
