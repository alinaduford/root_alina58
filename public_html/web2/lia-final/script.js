// Ensure the nav is hidden initially
let btn = document.querySelector("label.bun");
let nav = document.querySelector("header nav");

// Set the initial state of the nav to hidden
// nav.style.display = "none";

btn.addEventListener("click", function () {
    console.log("Button clicked");
    nav.classList.toggle("active");
    // if (nav.style.display === "block") {
    //     nav.style.display = "none";
    // } else {
    //     nav.style.display = "block";
    // }
});

// Close the navigation menu when clicking outside of it
// document.addEventListener("click", function (event) {
//     // if(nav.classList.contains("active")) {
//         console.log(event);
//         // Check if the click was outside the nav and button
//         if (!nav.contains(event.target) && !btn.contains(event.target) && nav.classList.contains("active")) {
//         //     nav.style.display = "none";
//             console.log("Clicked outside");
//             //nav.classList.toggle("active");
//         }
        
//         // Close the nav
//         // nav.style.display = "none";
    
//     // if (!nav.contains(event.target) && !btn.contains(event.target)) {
//         // nav.style.display = "none";
        
    
// });