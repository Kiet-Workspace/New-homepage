const closeNav = document.querySelector(".close-nav");
const openNav = document.querySelector(".open-nav");
const navigation = document.querySelector(".navigation");
const navBgr = document.querySelector(".nav-bgr");



function openMenu() {
    navigation.classList.add("nav-show");
}




function closeMenu() {
    navigation.classList.remove("nav-show");
    // navBgr.style.display = "none";
}


openNav.addEventListener('click', function() {
    openMenu();
    navBgr.style.display = "block";
});

closeNav.addEventListener('click', function() {
    closeMenu();
    navBgr.style.display = "none";
});

