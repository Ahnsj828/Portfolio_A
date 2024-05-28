const trigger = document.querySelector(".trigger");
const gnb = document.querySelector(".gnb-list");
// const header = document.querySelector("header");


trigger.addEventListener("click", () => {
  gnb.classList.toggle("active");
  trigger.classList.toggle("active");
});
