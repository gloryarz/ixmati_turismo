// Elementos del HTML

const btnFb = document.getElementById('btnFb');
const btnGg = document.getElementById('btnGg');


// Funcionalidad del botón Google
btnGg.addEventListener('click', el => {
  var provider = new firebase.auth.GoogleAuthProvider();
  authentication(provider);
});

// Función para Login con Google
const googleLogin = () => {
  
  console.log('google');
};

// Funcionalidad del botón Facebook
btnFb.addEventListener('click', el => {
  var provider = new firebase.auth.FacebookAuthProvider();
  authentication(provider);
});



// Se realiza la autenticación de usuario
const authentication = (provider) => {
  firebase.auth().signInWithPopup(provider).then(function(result) {
    let token = result.credential.accessToken;
    // Se obtiene la información del usuario (facebook o google)
    let user = result.user;
    localStorage.setItem('user', user);
    // Se guarda el nombre de usuario en localStorage
    let displayName = user.displayName;
    localStorage.setItem('display', displayName);
    // Se guarda la url de la foto del usuario en localStorage
    let photo = user.photoURL;
    localStorage.setItem('photo', photo);
  }).catch(function(error) {
    let errorCode = error.code;
    let errorMessage = error.message;
    let email = error.email;
    let credential = error.credential;
  });
};

/* Se utiliza el observador como condicional. Si se inicia sesión nos
redirige al home, si no se ha iniciado, permanece en el login*/
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    let userUid = user.uid;
    localStorage.setItem('userUid', userUid);
    window.location.assign('principal.html');
  } else {
    console.log('no se ha accesado');
  }
});