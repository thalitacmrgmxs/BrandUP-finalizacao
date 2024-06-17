
function mostrarmenu() {
    let menu = document.getElementById('menu-mobile');

    if (menu.style.transform === 'scale(0)') {
        menu.style.transform = "scale(1)";
    } 
    else {
        menu.style.transform = "scale(0)";
        document.getElementById('menu-mobile')= '';
    }
}