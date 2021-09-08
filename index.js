let array = [];
let arrayUUID = [];

function randomNumber() {
    return Math.floor(Math.random() * 1000) + 1;
}

function addElement() {
    array.push(randomNumber());
    arrayUUID.push(create_UUID());
}

function addDiv(number,id) {
    let newDiv = document.createElement("div");
    document.getElementById("container").appendChild(newDiv);
    newDiv.style.width = "100px";
    newDiv.style.height = "30px";
    newDiv.style.margin = "30px";
    newDiv.style.border = "1px solid black";
    newDiv.style.padding = "30px";
    newDiv.style.textAlign = "center";
    newDiv.innerText = number;
    newDiv.id = id;
    let img = document.createElement("img");
    newDiv.appendChild(img);
    img.style.position = "relative";
    img.style.left = "60px";
    img.style.top = "-32px";
    img.src="icon.2.png";
    img.onclick = (event)=>{
        removeCard(event);
    }
}

function removeCard(event) {
    event.target.parentElement.remove()
} 

function create_UUID() {
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c=='x' ? r :(r&0x3 | 0x8)).toString(16);
    });
    return uuid;
}
 
function addCard() {
    addElement();
    addDiv(array[array.length-1]);
}

function sortCards() {
    sortArray(array)
    removeCards();
    draw();
}

function sortArray(array) {
    for(let i = 0; i < array.length; i ++) {
        for(let j = 0; j < array.length; j++) {
            if(array[j] > array[j + 1]) {
                let x = array[j];
                array[j] = array[j + 1];
                array[j + 1] = x;
            }
        } 
    }
}

function removeCards() {
    let a = document.getElementById("container");
    a.innerHTML = "";
}

function draw() {
    for(let i = 0; i < array.length; i ++) {
        addDiv(array[i],arrayUUID[i]);
    }
}