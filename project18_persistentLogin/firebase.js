var fireBase = fireBase || firebase;
var hasInit = false;
var config = {
  apiKey: "AIzaSyA_ZpbuHOwGJHTOgQqN8PQOp4KkBhBqO38",
  authDomain: "user-web-authentication-2007.firebaseapp.com",
  projectId: "user-web-authentication-2007",
  storageBucket: "user-web-authentication-2007.appspot.com",
  messagingSenderId: "1043223580513",
  appId: "1:1043223580513:web:52c0f8f824ef8636bebf20",
  measurementId: "G-FZPSNK60R5",
};
if (!hasInit) {
  firebase.initializeApp(config);
  hasInit = true;
}
