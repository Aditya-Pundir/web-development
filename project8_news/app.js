const apiKey = "8b95475dfdc87025786ee939c3572230";

// Fetching data from GNews api
fetch(`https://gnews.io/api/v4/search?q=gaming&token=${apiKey}`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
