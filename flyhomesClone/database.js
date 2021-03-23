// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyD-zChCUWjQmhNHPoRNgN-z2Foo7S7i5Is",
  authDomain: "flyhomesclone.firebaseapp.com",
  projectId: "flyhomesclone",
  storageBucket: "flyhomesclone.appspot.com",
  messagingSenderId: "862098611665",
  appId: "1:862098611665:web:275906a13df18acba614f0",
  measurementId: "G-XNJJM1FP3R",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var database = firebase.database();

UserId = 234151435;
database.ref("data/" + UserId).update({
  Username: "Aditya Pundir",
  UserId: "2007",
  Post: "Web Developer",
});

// database.ref("records").push({
//   username: "Aditya",
//   userId: UserId,
// });
