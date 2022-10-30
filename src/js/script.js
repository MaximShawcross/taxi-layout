window.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector('.hamburger');
          menu = document.querySelector('.menu');
          li = document.querySelectorAll('.menu_item_link');

    hamburger.addEventListener("click", () => {
        if (hamburger.classList.contains('hamburger_active')) {
            hamburger.classList.remove('hamburger_active');
            menu.classList.remove('menu_active');
        } else {
            hamburger.classList.add('hamburger_active');
            menu.classList.add('menu_active');
        }

        li.forEach(item => item.addEventListener('click', () => {
            hamburger.classList.remove('hamburger_active');
            menu.classList.remove('menu_active');
        }))
    })  
}) 
