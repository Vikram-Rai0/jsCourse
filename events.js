const box = document.getElementById("box");

box.addEventListener("mouseenter", () => {
  box.style.background = "lightgreen";
});

box.addEventListener("mouseleave", () => {
  box.style.background = "lightcoral";
});


const input = document.getElementById("username");

input.addEventListener("input", () => {
  console.log("Typing:", input.value);
});

input.addEventListener("change", () => {
  console.log("Final value:", input.value);
});

window.addEventListener("load", () => {
  console.log("Page fully loaded with images, CSS, etc.");
});

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM ready, before images/CSS.");
});


window.addEventListener("load", () => {
  console.log("Page fully loaded with images, CSS, etc.");
});

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM ready, before images/CSS.");
});

window.addEventListener("resize", () => {
  console.log("Window resized:", window.innerWidth);
});

window.addEventListener("scroll", () => {
  console.log("Scroll position:", window.scrollY);
});

const dragItem = document.getElementById("drag");
const dropArea = document.getElementById("drop");

dragItem.addEventListener("dragstart", () => {
  console.log("Dragging started!");
});

dropArea.addEventListener("drop", (e) => {
  e.preventDefault();
  console.log("Item dropped!");
});

dropArea.addEventListener("dragover", (e) => e.preventDefault());
