function app() {
  // gNews News API:
  const gNewsApiKey = "8b95475dfdc87025786ee939c3572230";
  let haridwarNewsContainer = document.getElementById("haridwarNewsContainer");
  let indianNewsContainer = document.getElementById("indianNewsContainer");
  let newsList = document.getElementById("newsList");
  let indianNewsList = document.getElementById("indianNewsList");
  let language = document.getElementById("languageSelection").value;

  newsList.innerHTML = "";
  indianNewsList.innerHTML = "";
  fetch(
    `https://gnews.io/api/v4/search?q=haridwar&lang=${language}&token=${gNewsApiKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);

      data.articles.forEach((element) => {
        // console.log(element.title);

        newsList.innerHTML += `<h5>${element.title}</h5><li>${element.description}</li><br/>`;
      });
    });

  // saurav.tech News API:
  let category = document.getElementById("category").value;
  fetch(
    `https://saurav.tech/NewsAPI/top-headlines/category/${category}/in.json`
  )
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);

      data.articles.forEach((element) => {
        // console.log(element.title);

        indianNewsList.innerHTML += `<h5>${element.title}</h5><li>${element.description}</li><br/>`;
      });
    });
}
