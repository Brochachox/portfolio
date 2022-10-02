document.querySelector(".header__burger-btn").addEventListener('click', function (event) {
    document.querySelector(".header__menu").classList.toggle("header__menu_active");
    document.querySelector(".header__searchbar").classList.add("header__searchbar_inactive");
    document.querySelector(".header__search-input").classList.remove("header__search-input_active");
    document.body.classList.toggle("overflow-hidden");
    document.querySelector(".header__burger-btn").src = (document.querySelector(".header__menu").classList.contains("header__menu_active")) ? 'svg/close-btn.svg' : 'svg/burger-btn.svg';
    document.querySelector(".header__search-ico").src = (document.querySelector(".header__searchbar").classList.contains("header__searchbar_inactive")) ? 'svg/search.svg' : 'svg/close-btn.svg';
});
document.querySelector(".header__search-ico").addEventListener('click', function (event) {
    document.body.classList.remove("overflow-hidden");
    document.querySelector(".header__menu").classList.remove("header__menu_active");
    document.querySelector(".header__searchbar").classList.toggle("header__searchbar_inactive");
    document.querySelector(".header__search-input").classList.toggle("header__search-input_active");
    document.querySelector(".header__mid-section").classList.toggle("header__mid-section_active");
    document.querySelector(".header__burger-btn").src = (document.querySelector(".header__menu").classList.contains("header__menu_active")) ? 'svg/close-btn.svg' : 'svg/burger-btn.svg';
    document.querySelector(".header__search-ico").src = (document.querySelector(".header__searchbar").classList.contains("header__searchbar_inactive")) ? 'svg/search.svg' : 'svg/close-btn.svg';
});
