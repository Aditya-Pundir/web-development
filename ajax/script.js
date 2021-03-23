let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener("click", buttonClickHandler);

function buttonClickHandler() {
  console.log("You have clicked the button fetchBtn.");

  // Instantiating and xhr object
  const xhr = new XMLHttpRequest();

  // Get Request
  // Opening the object
  //   xhr.open("GET", "data.txt", true); // This is how you can fetch data from an existing file on your local machine
  //   xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true); // This is how you can fetch data from a json format website

  // Post Request
  xhr.open("POST", "http://dummy.restapiexample.com/api/v1/create", true);
  //   xhr.getResponseHeader("Content-type", "application/x-www-form-urlencoded"); // This is how you can set a response handler for a string format
  xhr.getResponseHeader("Content-type", "application/json"); // And this is how you can set a response handler for a JSON format

  // Here are some of the most commonly used methods of Ajax

  // What to do on progress (Optional)
  xhr.onprogress = function () {
    console.log("Progressing...");
    // onprogress is a function for you so that if you want then you can show a preloader.
  };

  xhr.onreadystatechange = function () {
    //   There are some of the codes for this readystatechange method that are "0, 1, 2, 3, 4"
    //   You can search for all these code functionalities by searching "http status codes" on a browser
    console.log("The state is: " + xhr.readyState);
  };

  // What to do when the response is ready
  xhr.onload = function () {
    //   This onload function means that you came on the readystate 4 of xhr
    if (this.status === 200) {
      console.log(this.responseText);
    } else {
      console.error("Some error occurred!");
    }
  };

  // Sending the request
  params = `{ name: "Adasefdsfitya2", salary: "9999999999$", age: "12433" }`;
  xhr.send(params);
}

let popBtn = document.getElementById("popBtn");
popBtn.addEventListener("click", popHandler);

function popHandler() {
  console.log("You have clicked the button pop handler.");

  // Instantiating and xhr object
  const xhr = new XMLHttpRequest();

  // Get Request
  // Opening the object
  //   xhr.open("GET", "data.txt", true); // This is how you can fetch data from an existing file on your local machine
  xhr.open("GET", "http://dummy.restapiexample.com/api/v1/employees", true); // This is how you can fetch data from a json format website

  // What to do when the response is ready
  xhr.onload = function () {
    //   This onload function means that you came on the readystate 4 of xhr
    if (this.status === 200) {
      let obj = this.responseText;
      console.log(obj);
      let list = document.getElementById("list");
      str = "";
      for (key in obj) {
        str += `<li>${obj[key]}</li>`;
      }
      list.innerHTML = str;
    } else {
      console.error("Some error occurred!");
    }
  };

  // Sending the request
  xhr.send();
  console.log("We are done with the fetching employees!");
}
