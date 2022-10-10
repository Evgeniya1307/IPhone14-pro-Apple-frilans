
const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

btn.addEventListener('click', () => { //добавляться и удаляться класс при  клике
nav.classList.toggle('menu-open');
})