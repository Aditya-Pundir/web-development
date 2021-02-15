var app_firebase = {};
(function () {
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyA_ZpbuHOwGJHTOgQqN8PQOp4KkBhBqO38",
    authDomain: "user-web-authentication-2007.firebaseapp.com",
    projectId: "user-web-authentication-2007",
    storageBucket: "user-web-authentication-2007.appspot.com",
    messagingSenderId: "1043223580513",
    appId: "1:1043223580513:web:52c0f8f824ef8636bebf20",
    measurementId: "G-FZPSNK60R5",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
})();

app_firebase = firebase;
