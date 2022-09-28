window.onload = function () {
    function isInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0
        );
    }

    const nav = document.getElementById("navigation");
    const arrow = document.getElementById("arrowUp");
    document.addEventListener('scroll', function () {
        isInViewport(nav) ? arrow.style.display = "none" : arrow.style.display = "block";
    });
}