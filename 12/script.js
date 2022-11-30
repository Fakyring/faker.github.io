window.onload = function () {
    findExternals();
    document.addEventListener("mousedown", showCoords);
    window.addEventListener("resize", changeImagePos);
    changeImagePos();
}

function findExternals() {
    let links = document.getElementsByTagName("a");
    Array.from(links).forEach((link) => {
        if (link.host !== window.location.host)
            link.style.color = "green";
    });
}

function addLiElements() {
    let list = document.getElementById("list");
    let text = prompt("Enter message: ");
    while (text !== null && text !== "") {
        console.log(text);
        let newLi = document.createElement("li");
        newLi.append(`${text}`);
        list.append(newLi);
        text = prompt("Enter message: ");
    }
}

function addNotification() {
    let options = prompt("Enter options: ");
    showNotification(options);
}

function showNotification(options) {
    let notificationsPanel = document.getElementById("thirdTask");
    let notification = document.createElement("div");
    let closable = options.includes("[closable]");
    notification.innerHTML = options.replace("[closable]", "");
    notification.classList.add("notification");
    notificationsPanel.append(notification);
    if (closable) {
        let close = document.createElement("button");
        close.innerHTML = "x";
        close.classList.add("closable");
        close.onclick = () => closeNotification(notification);
        notification.append(close);
    } else {
        setTimeout(function () {
            notification.remove();
        }, 1500);
    }
}

function closeNotification(e) {
    e.remove();
}

function showCoords(e) {
    console.log("X: " + e.clientX + " Y: " + e.clientY);
}

function changeImagePos() {
    let image = document.getElementById("customImage");
    image.style.position = "absolute";
    image.style.left = window.innerWidth / 2 - image.width / 2 + "px";
    image.style.top = window.innerHeight / 2 - image.height / 2 + "px";
}