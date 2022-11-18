window.onload = function () {
    let nav = document.getElementById("navigation");
    let arrow = document.getElementById("arrowUp");
    let burger_check = document.getElementById("menu");
    let mediaQuery = window.matchMedia('(min-width: 660px)');

    function addElement(tag) {
        let xhr = new XMLHttpRequest();
        xhr.onload = function () {
            loadElement(xhr, tag);
        };
        xhr.open('GET', `/defaults/${tag}.html`);
        xhr.send(null);
    }

    function loadElement(xhr, tag) {
        document.getElementsByTagName(tag)[0].innerHTML = xhr.responseText;
        if (tag === "header") {
            nav = document.getElementById("navigation");
            burger_check = document.getElementById("menu");
            arrow = document.getElementById("arrowUp");
            //Shows arrow to the top of the page
            document.addEventListener('scroll', function () {
                isInViewport(nav) ? arrow.style.display = "none" : arrow.style.display = "block";
            });
            document.getElementById("site-name").innerHTML = document.title;
        }
    }

    addElement("header");
    addElement("footer");

    //Checks if main menu is in viewport
    function isInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0
        );
    }

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