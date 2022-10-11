window.onload = function () {
    //Checks if main menu is in viewport
    function isInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0
        );
    }
    const nav = document.getElementById("navigation");
    const arrow = document.getElementById("arrowUp");
    const burger_check = document.getElementById("menu");
    const burger_icon = document.getElementById("burger_icon");
    const mediaQuery = window.matchMedia('(min-width: 660px)')
    
    //Animate opening burger menu
    function rotateOpen() {
        burger_check.checked = true;
        burger_icon.animate([
            {transform: 'rotate(0)'},
            {transform: 'rotate(90deg)'}], 200);
        burger_icon.style.transform = "rotate(90deg)";
    }
    //Animate closing burger menu
    function rotateClose() {
        burger_check.checked = false;
        burger_icon.animate([
            {transform: 'rotate(90deg)'},
            {transform: 'rotate(0deg)'}], 200);
        burger_icon.style.transform = "rotate(0deg)";
    }
    //Animate burger icon rotation
    burger_check.addEventListener('change', function () {
        if (burger_check.checked) {
            rotateOpen();
        } else {
            rotateClose();
        }
    });
    //Shows arrow to the top of the page
    document.addEventListener('scroll', function () {
        isInViewport(nav) ? arrow.style.display = "none" : arrow.style.display = "block";
    });
    //Hide burger menu if changed window size
    window.addEventListener('resize', function () {
        if (mediaQuery.matches)
            rotateClose();
    })
    //Hide burger menu if clicked out of it
    document.addEventListener('click', function (e) {
        if (burger_check.checked === true)
            if (e.target !== burger_check && e.target !== burger_icon && e.target.parentNode.parentNode.id !== "burger" && e.target.id !== "burger") {
                rotateClose();
                burger_icon.style.transform = "rotate(0deg)";
            }
    });
}