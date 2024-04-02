document.getElementById('check').addEventListener('change', function () {
    var burgerMenu = document.querySelector("nav ul");

    if (this.checked) {
        burgerMenu.style.display = "flex";
        burgerMenu.style.flexDirection = "column";
        burgerMenu.style.opacity = "0";
        setTimeout(function () {
            burgerMenu.style.opacity = "1";
        }, 15);
    } else {
        burgerMenu.style.opacity = "0";
        setTimeout(function () {
            burgerMenu.style.display = "none";
        }, 100);
    }
});

