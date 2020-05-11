// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function logout() {
  firebase.auth().signOut().then(function () {
    // Sign-out successful.
    window.location.replace("login.html");
  }).catch(function (error) {
    // An error happened.
    window.location.replace("404.html");
  });
}