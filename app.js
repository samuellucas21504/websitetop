const hamburger = document.querySelector('.header .navbar .nav-list .hamburger')
const mobile_menu = document.querySelector('.header .navbar .nav-list ul');
const menu_item = document.querySelectorAll('.header .navbar .nav-list ul li a');
const header = document.querySelector('.header.container');
const hero_size = document.querySelector('#hero .hero').offsetHeight;

hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', ()=>{
    var scroll_position = window.scrollY;
    if(scroll_position > (hero_size * 0.9)){
        header.style.backgroundColor = "rgba(31, 30, 30, 1)"
    }
    else
        header.style.backgroundColor = "rgba(31, 30, 30, 0.4)"
})

menu_item.forEach(item => {
    item.addEventListener('click', ()=>{
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});