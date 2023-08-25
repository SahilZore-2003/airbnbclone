const menu = document.querySelector("#menu");
const mobilenav = document.querySelector("#mobilenav");

menu.addEventListener("click",()=>{
    menu.classList.toggle("openmenu");
    mobilenav.classList.toggle("active")
})