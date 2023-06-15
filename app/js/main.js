let menu = document.querySelector('.menu');
let header = document.querySelector('.header');
let item = document.querySelectorAll('.item');

menu.onclick = function() {
    header.classList.toggle('active');
}

function activeLink() {
    item.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
}
item.forEach((item) => 
item.addEventListener('click',activeLink));