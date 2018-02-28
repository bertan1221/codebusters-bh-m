let a = document.getElementsByClassName('a')[0];
let popup = document.getElementById("popup");
popup.style.display = "none";

let closeButton = document.getElementById("closeButton");

a.addEventListener("click", function(){
    popup.style.display = "block";
});

closeButton.addEventListener("click", function(){
    popup.style.display = "none";
});

