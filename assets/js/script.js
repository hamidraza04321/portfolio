
const /* {NodeElement} */ $menuToggler = document.querySelector(".menu-toggler");
const /* {NodeElement} */ $sideBar = document.querySelector(".side-bar");

$menuToggler.addEventListener("click", function(){
    $sideBar.classList.toggle('active');
});