// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyAEwsbUBnVfF_kiEozhR5_bqi_YsXA0IBk",
  authDomain: "webchatapp-b8406.firebaseapp.com",
  projectId: "webchatapp-b8406",
  storageBucket: "webchatapp-b8406.appspot.com",
  messagingSenderId: "262828169701",
  appId: "1:262828169701:web:9d1808323c15c3e8e0f70c",
  measurementId: "G-ZP7TDE72HP",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const username = prompt("Enter your name here to join the chat");
function sendMessage() {
  //   Getting the value of the user message:
  const userMessage = document.getElementById("message").value;

  firebase.database().ref("data").push().set({
    Sender: username,
    message: userMessage,
  });
  return false;
}
// Listening for the incoming messages
firebase
  .database()
  .ref("data")
  .on("child_added", function (snapshot) {
    let html = "";
    html += `<li id="message-${snapshot.key}">`;
    // Showing the delete button if the message is sent by me
    if (snapshot.val().Sender == username) {
      html += `<button id="deleteButton" data-id=${snapshot.key} onclick="deleteMessage(this)">`;
      html += "Delete";
      html += "</button>";
    }
    html += snapshot.val().Sender + ": " + snapshot.val().message;
    html += "</li>";

    document.getElementById("messagesInterface").innerHTML += html;
  });
function deleteMessage(self) {
  // Get message ID:
  let messageId = self.getAttribute("data-id");

  // Deleting the message:
  firebase.database().ref("data").child(messageId).remove();
}
// Attaching the listener for the delete event:
firebase
  .database()
  .ref("data")
  .on("child_removed", function (snapshot) {
    // Removing message node:
    document.getElementById("message-" + snapshot.key).innerHTML =
      "This message was deleted";
  });
