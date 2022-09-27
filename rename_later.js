window.onload = function () {
    let footer_height = document.getElementById('footer').clientHeight;
    document.getElementById("arrowUp").style.bottom = (footer_height + 20).toString()+"px";
    console.log(document.getElementById("arrowUp").style.bottom);
}