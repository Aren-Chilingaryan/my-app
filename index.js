let objArray = [];

function addElement() {
    const object = {
        number: randomNumber(200, 5),
        id: createUUID()
    }
    objArray.push(object);
}

function sortObjectArray(array, prop) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j][prop] > array[j + 1][prop]) {
                const x = array[j][prop];
                array[j][prop] = array[j + 1][prop];
                array[j + 1][prop] = x;
            }
        }
    }
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function addDiv(object) {
    const newDiv = document.createElement("div");
    newDiv.style.width = "100px";
    newDiv.style.height = "30px";
    newDiv.style.margin = "30px";
    newDiv.style.border = "1px solid black";
    newDiv.style.padding = "30px";
    newDiv.style.textAlign = "center";
    newDiv.innerText = object.number;
    newDiv.id = object.id;
    document.getElementById("container").appendChild(newDiv);
    const icon = document.createElement("img");
    icon.style.position = "relative";
    icon.style.left = "60px";
    icon.style.top = "-32px";
    icon.src = "icon.2.png";
    newDiv.appendChild(icon);
    icon.onclick = (event) => {
        removeCard(event);
    }
}

function removeCard(event) {
    event.target.parentElement.remove();
}

function createUUID() {
    let dt = new Date().getTime();
    let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}

function addCard() {
    addElement();
    addDiv(objArray[objArray.length - 1]);
}

function sortCards() {
    sortObjectArray(objArray, 'number');
    removeCards();
    draw();
}

function removeCards() {
    const container = document.getElementById("container");
    container.innerHTML = "";
}

function draw() {
    for (let i = 0; i < objArray.length; i++) {
        addDiv(objArray[i]);
    }
}