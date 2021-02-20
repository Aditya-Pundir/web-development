const search = () => {
  let filter = document.getElementById("mainInput").value.toUpperCase();
  let noResult = document.getElementById("noResult");

  let ul = document.getElementById("ul");
  let li = ul.getElementsByTagName("li");
  for (var i = 0; i < li.length; i++) {
    let a = li[i].getElementsByTagName("a")[0];

    if (a) {
      let textValue = a.textContent || a.innerHTML;
      if (textValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
};
