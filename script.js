window.onload = function () {
    let nav = document.getElementById("navigation");
    let arrow = document.getElementById("arrowUp");
    let burger_check = document.getElementById("menu");
    let mediaQuery = window.matchMedia('(min-width: 660px)');
    let xhr = new XMLHttpRequest();
    xhr.open('GET', "nav.html");
    xhr.addEventListener('readystatechange', function () { // load the page asynchronously
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) { // if the file is correctly loaded
            document.getElementsByTagName('header')[0].innerHTML = xhr.responseText;
            nav = document.getElementById("navigation");
            arrow = document.getElementById("arrowUp");
            burger_check = document.getElementById("menu");
        }
    });
    xhr.send(null);
    //Checks if main menu is in viewport
    function isInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0
        );
    }

    //Shows arrow to the top of the page
    document.addEventListener('scroll', function () {
        isInViewport(nav) ? arrow.style.display = "none" : arrow.style.display = "block";
    });
    //Hide burger menu if changed window size
    window.addEventListener('resize', function () {
        if (mediaQuery.matches)
            burger_check.checked = false;
    })
    //Hide burger menu if clicked out of it
    document.addEventListener('click', function (e) {
        if (burger_check.checked === true)
            if (!e.target.classList.contains("bg_item")) {
                burger_check.checked = false;
            }
    });
}