// Elementos HTML
const btnLogout = document.getElementById('btnLogout');

// Función para salir
btnLogout.addEventListener('click', el => {
  window.location.assign('../index.html');
  firebase.auth().signOut();
  
});
