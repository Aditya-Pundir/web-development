// const apiKey = "5b118e5197344befb1f371a0b6027e0f";
// let topic = "covid 19";
// let url = `https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=5b118e5197344befb1f371a0b6027e0f`;
let url = "https://reqres.in/api/users";

// POST Request:
// fetch(url, {
//   method: "POST",
//   headers: {
//     "content-type": "application/json",
//   },
//   body: JSON.stringify({
//     name: "User",
//     id: "2",
//   }),
// })

// GET Request:
fetch(url)
  .then((res) => {
    // if (res.ok) {
    //   console.log("SUCCESS");
    // } else {
    //   console.log("Not successful");
    // }
    return res.json();
  })
  .then((data) => {
    console.log(data);
  });
