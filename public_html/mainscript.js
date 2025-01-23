// let btn = document.querySelector(".material-symbols-outlined");
// let nav = document.querySelector("header nav");

//     btn.addEventListener("click", function(){
    
//         if (nav.style.display === "block") {
//           nav.style.opacity = 0;
//           setTimeout(function(){ nav.style.display = "none"; }, 300);

//           } else {
//             nav.style.display = "block";
//             setTimeout(function(){ nav.style.opacity = 1; }, 300);
            
            
//           }
//     })
    
let btn = document.querySelector(".material-symbols-outlined");
    let nav = document.querySelector("header nav");

    btn.addEventListener("click", function(){
    
        if (nav.style.display === "block") {
            nav.style.display = "none";
          } else {
            nav.style.display = "block";
          }
    })