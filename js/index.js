var collapse = document.querySelector(".collapsed");
var nav = document.querySelector(".menuH");
collapse.addEventListener("click", ()=>{
    if(nav.style.display == "none"){
        nav.classList.toggle('display');
    }else{
        nav.classList.toggle('display');
    }
});