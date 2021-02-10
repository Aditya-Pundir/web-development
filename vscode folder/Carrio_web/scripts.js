function submition() {
  var name = document.getElementById("Name").value;
  var email = document.getElementById("Email").value;
  var Issue = document.getElementById("Issue").value;
  var errorMessage = document.getElementById("errorMessage");
  var text;
  errorMessage.style.padding = "0.625rem";

  if (name.length < 4) {
    text = "Please enter a valid name!";
    errorMessage.innerHTML = text;
    return false;
  } else if (email.indexOf("@") == -1 || email.length < 10) {
    text = "Please enter a valid email!";
    errorMessage.innerHTML = text;
    return false;
  } else if (Issue.length < 30) {
    text = "Please enter a valid issue with at least a length of 30 words!";
    errorMessage.innerHTML = text;
    return false;
  } else if (Issue.length > 150) {
    text = "Please enter a valid issue with a length smaller than 150!";
    errorMessage.innerHTML = text;
    return false;
  } else {
    errorMessage.style.display = "none";
    text = "Form submitted successully!";
    errorMessage.innerHTML = text;
    return true;
  }
}
