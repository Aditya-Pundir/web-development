function app() {
  let category = document.getElementById("category").value;
  fetch(
    `https://saurav.tech/NewsAPI/top-headlines/category/${category}/in.json`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}
