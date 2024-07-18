"use strict";

let modal = document.querySelector(".modal");
let showModalBtnList = document.querySelectorAll(".show-modal");
let closeModel = document.querySelector("close-modal");
// console.log(showModalBtn);
let overlay = document.querySelector(".overlay");

function makeVisible() {
  overlay.classList.remove("hidden");
  modal.classList.remove("hidden");
}

function makeInVisible() {
  overlay.classList.add("hidden");
  modal.classList.add("hidden");
}

showModalBtnList.forEach(function (ele, ind, arr) {
  console.log(ele);
  ele.addEventListener("click", function () {
    console.log("Clicked");
    makeVisible();
    // remove the modal hidden
  });
});

overlay.addEventListener("click", function () {
  makeInVisible();
});

closeModel.addEventListener("click", function () {
  makeInVisible();
});

document.addEventListener("keydown", function(event)
{
    console.log(event.key);
    if(event.key == "Escspe"){
        makeInVisible();
    } 
}
);