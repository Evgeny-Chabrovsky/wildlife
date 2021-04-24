const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");

console.dir(hamburger);

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("show");
});

// let block = document.createElement("div");
// block.classList.add("block");
// document.querySelector(".slider").append(block);
