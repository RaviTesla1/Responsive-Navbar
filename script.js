let toggleBtn =document.querySelector(".toggleBtn");
let ul =document.querySelector("ul");

toggleBtn.addEventListener("click",function(){
     ul.classList.toggle("active");
});