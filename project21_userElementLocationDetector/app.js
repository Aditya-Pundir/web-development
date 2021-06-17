const container = document.getElementById("container");
let rect = container.getBoundingClientRect();
document.onscroll = () => {
  rect = container.getBoundingClientRect();
  console.log(rect.top, rect.left);
};
