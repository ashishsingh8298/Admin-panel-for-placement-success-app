// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();
var ref = database.ref("admin");

function register() {
  const signUpForm = document.querySelector("#signUp_form");
  const email = signUpForm["exampleInputEmail"].value;
  const password = signUpForm["exampleInputPassword"].value;
  const name =
    signUpForm["exampleFirstName"].value +
    " " +
    signUpForm["exampleLastName"].value;
  var userCreateds = true;
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
      userCreateds = false;
      // ...
      window.location.href = "index.html";
    });

  if (userCreateds && email != "" && password != "") {
    alert("Registration Successful...");
  }
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      var data = {
        userName: name,
        email: email,
      };
      ref.push(data);
      user
        .sendEmailVerification()
        .then(function () {
          // Email sent.
          alert("Please verify your email...");
        })
        .catch(function (error) {
          // An error happened.
        });

      // User is signed in.
      window.location.replace("register.html");
    } else {
      // No user is signed in.
      // alert('Please try Signing Again...');
    }
  });
}

function google() {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      window.location.replace("register.html");
    } else {
      // No user is signed in.
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(function (result) {
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          // ...
        })
        .catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
        });
    }
  });
}

function facebook() {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      window.location.replace("register.html");
    } else {
      // No user is signed in.
      // alert('Please try Signing Again...');

      var provider = new firebase.auth.FacebookAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(function (result) {
          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          // ...
        })
        .catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
        });
    }
  });
}