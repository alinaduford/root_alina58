let btn = document.querySelector(".material-symbols-outlined");
    let nav = document.querySelector("header nav");

    btn.addEventListener("click", function(){
    
        if (nav.style.display === "block") {
            nav.style.display = "none";
          } else {
            nav.style.display = "block";
          }
    })