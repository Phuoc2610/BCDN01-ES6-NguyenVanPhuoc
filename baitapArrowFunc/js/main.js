const colorList = ["pallet","viridian","pewter","cerulean","vermillion","lavender","celadon","saffron","fuschia","cinnabar"];

let content = "";
let loadColor = document.getElementById("colorContainer");

colorList.map((item)=>{
      content +=`
        <button class="color-button ${item}" onclick="changeColorHouse('${item}')"></button>
      `
});

loadColor.innerHTML = content;
document.querySelector(".pallet").classList.add("active");
document.querySelector(".house").classList.add("pallet");

let home = document.querySelector("#house");
let listColor = document.querySelectorAll(".color-button");
let active = document.querySelectorAll(".color-button");


let changeColorHouse = (color)=>{
    removeClass(color);
    home.classList.add("house",`${color}`);
}

for(let i = 0 ; i < listColor.length ; i++) {
    listColor[i].addEventListener("click", function() {
        listColor[i].classList.toggle("active");
    })
}

function removeClass() {
    home.removeAttribute("class");
    active.forEach(item => {
        item.classList.remove("active");
    })
}