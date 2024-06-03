const header = document.querySelector("header");
// console.log(header);
const headerHeight = header.offsetHeight;
// console.log(headerHeight);

window.addEventListener("scroll", function () {
  if (window.pageYOffset >= 130) {
    console.log("내려갑니다");
  }
});
