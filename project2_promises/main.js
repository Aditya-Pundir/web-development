console.log(
  "This javascript file has already started executing in this website and started fetching the data from the github api."
);

// Fetching the elements from the html file:
const list = document.getElementById("mainlist");

async function main() {
  console.log("Before fetching the data.");
  const usersDataResponse = await fetch("https://api.github.com/users");
  console.log("After fetching the data");
  const user_data = await usersDataResponse.json();
  return user_data;
}

let a = main();
a.then((data) => {
  for (i in data) {
    list.innerHTML += `<li class="li"> Username = ${data[i].login} and id = ${data[i].id}</li><br>`;
  }
});
// a.then((data) => console.log(data));
