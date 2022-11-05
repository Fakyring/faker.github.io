function register() {
    let reg = confirm("Желаете пройти регистрацию на сайте?");
    if (reg) {
        alert("Круто!");
    } else {
        alert("Попробуй ещё раз");
    }
}

function admin() {
    let login = prompt("Введите логин");
    //Return if login is empty
    if (login === "" || login === null) {
        alert("Отменено")
        return;
    }
    if (login.toLowerCase() === "админ") {
        let password = prompt("Пароль");
        //Return if password is empty
        if (password === "" || password === null) {
            alert("Отменено");
            return;
        }
        //Checking password
        switch (password.toLowerCase()) {
            case "я главный": {
                alert("Здравствуйте!");
                break;
            }
            default: {
                alert("Неверный пароль");
                break;
            }
        }
    } else {
        alert("Я вас не знаю");
    }
}

let interval;

function like(e) {
    let img = e.getElementsByTagName("img")[0];
    let span = e.getElementsByTagName("span")[0];
    if (img.src === "https://cdn-icons-png.flaticon.com/128/1077/1077035.png") {
        img.src = "https://cdn-icons-png.flaticon.com/128/833/833472.png";
        span.innerHTML = (Number)(span.innerHTML) + 1;
        document.addEventListener('mousemove', addNewImg);
        clearInterval(interval);
    } else {
        img.src = "https://cdn-icons-png.flaticon.com/128/1077/1077035.png";
        span.innerHTML = (Number)(span.innerHTML) - 1;
        document.removeEventListener("mousemove", addNewImg);
        interval = setInterval(function () {
            removeNewImgs();
        }, 50);
    }
}

let newImgsCount = 0, oldX = 0, oldY = 0, difference = 0;

function addNewImg(e) {
    difference += Math.sqrt(Math.pow(oldX - e.clientX, 2) + Math.pow(oldY - e.clientY, 2));
    if (difference > 20) {
        let newCircle = document.createElement("img");
        document.querySelector("body").appendChild(newCircle);
        let left = e.clientX - 10;
        let top = e.clientY - 10;
        newCircle.style.position = "absolute";
        newCircle.style.left = left + "px";
        newCircle.style.top = top + "px";
        newCircle.classList.add("newimg");
        newCircle.src = "https://cdn-icons-png.flaticon.com/128/833/833472.png";
        newImgsCount++;
        if (newImgsCount >= 200) {
            removeNewImgs();
        }
        difference = 0;
    }
    oldX = e.clientX;
    oldY = e.clientY;
    console.log(newImgsCount);
}

function removeNewImgs() {
    let newImgs = document.getElementsByClassName("newimg");
    if (newImgs.length > 0) {
        newImgs[0].remove();
        newImgsCount--;
    }
}