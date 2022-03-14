//Select DOM
let title = document.querySelector(".title");
let ul = document.querySelector("ul");
let button = document.querySelector(".reload");
let image = document.querySelector("img");

//Event Listeners

//Functions


function OnLine() {
    title.innerHTML = "OnLine Now";
    title.style.color = "green";
    ul.classList.add("hide");
    button.classList.add("hide");
}

function OffLine() {
    image.style.display = "none";
    title.innerHTML = "OffLine Now";
    title.style.color = "#666";
    ul.classList.remove("hide");
    button.classList.remove("hide");
}

window.onload = function () {
    if (navigator.onLine) {
        OnLine()
    } else {
        OffLine()
    }
};

button.onclick = function () {
    window.location.reload();
}

window.addEventListener("online", function () {
    OnLine();
});

window.addEventListener("offline", function () {
    OffLine();
});