// Ensure the nav is hidden initially
let btn = document.querySelector("label.bun");
let nav = document.querySelector("header nav");


btn.addEventListener("click", function () {
    // console.log("Button clicked");
    nav.classList.toggle("active");
  
});

