// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function login() {
  const signInForm = document.querySelector('#signIn_form');
  const email = signInForm['exampleInputEmail'].value;
  const password = signInForm['exampleInputPassword'].value;
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
    // ...
    window.location.href.replace("login.html");
  });

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      console.log("SignIn section");
      window.location.replace("register.html");
    } else {
      // No user is signed in.
      // alert('Please try Signing Again...');
    }
  });
}