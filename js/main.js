const btn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");

btn.addEventListener("click", () => {
  //добавляться и удаляться класс при  клике
  nav.classList.toggle("menu-open"); //при клике на btn к nav добавится класс и toggle при первом клике добавится при втором исчезнет
});
