window.onload = function () {
    let elements = document.getElementsByClassName("elements div");
    let buttons = document.querySelectorAll(".elements.button.up");
    let taskOne = document.getElementById("arrayOne");
    document.getElementsByClassName("elements button del")[0].onclick = deleteElement;

    function moveElement(e) {
        if (e.parentNode !== elements[0]) {
            taskOne.insertBefore(e.parentNode, e.parentNode.previousSibling);
        }
    }

    for (let button of buttons) {
        button.onclick = () => moveElement(button);
    }

    function deleteElement() {
        if (buttons.length !== 0) {
            elements[0].remove();
        }
    }


    let taskTwo = document.getElementById("arrayTwo");
    let origArr = document.getElementById("originalArray");
    let filteredArr = document.getElementById("filteredArray");
    let minVal = document.getElementById("min").value;
    let maxVal = document.getElementById("max").value;
    let arrA = [];

    function filterArray(arrA, minVal, maxVal) {
        let arrB = arrA.filter(elem => (elem >= minVal && elem <= maxVal));
        return arrB;
    }

    document.getElementById("filter").onclick = function () {
        minVal = document.getElementById("min").value;
        maxVal = document.getElementById("max").value;
        for (let i = 0; i < 20; i++) {
            arrA[i] = Math.floor(Math.random() * 50);
        }
        filteredArr.innerHTML = "Filtered\n" + filterArray(arrA, minVal, maxVal);
        origArr.innerHTML = "Original\n" + arrA;
    }


    let taskThree = document.getElementById("arrayThree");
    let sortElements = document.querySelectorAll("#arrayThree span");
    sortAsc.onclick = () => sortAscDesc(0);
    sortDesc.onclick = () => sortAscDesc(1);

    function sortAscDesc(mode) {
        for (let i = 0; i < sortElements.length; i++) {
            for (let j = i; j < sortElements.length; j++) {
                if (mode === 0) {
                    if (sortElements[j].innerHTML < sortElements[i].innerHTML) {
                        taskThree.insertBefore(sortElements[j], sortElements[i]);
                        sortElements = document.querySelectorAll("#arrayThree span");
                    }
                } else if (sortElements[j].innerHTML > sortElements[i].innerHTML) {
                    taskThree.insertBefore(sortElements[j], sortElements[i]);
                    sortElements = document.querySelectorAll("#arrayThree span");
                }
            }
        }
    }


    let taskFour = document.getElementById("arrayFour");
    let messagesList = document.querySelectorAll(".message");
    let timer = setInterval(addMessages, 3000);
    messages.onclick = function () {
        clearInterval(timer);
        setTimeout(() => {
            timer = setInterval(addMessages, 3000)
        }, 10000);
    };
    messages.onmouseover = function () {
        messages.style.height = messagesList.length * messagesList[0].clientHeight + "px";
    }
    messages.onmouseout = function () {
        messages.style.height = "40px";
    }

    function addMessages() {
        let message = document.createElement("span");
        message.classList.add("message");
        message.innerHTML = "Message!";
        messages.appendChild(message);
        messagesList = document.querySelectorAll(".message");
    }
}