var requestOptions = {
  method: "GET",
  redirect: "follow",
};

fetch("https://tattijokes.herokuapp.com/allJokes", requestOptions)
  .then((response) => response.json())
  .then((data) => {
    var jokesList = document.getElementById("jokesList");
    data.jokes.forEach((joke) => {
      jokesList.innerHTML += `<h4>${joke.title}</h4><li>${joke.jokes}</li>`;
    });
  });
