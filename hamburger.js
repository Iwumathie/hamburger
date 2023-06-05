function collapseNav(icon){
    const navUl = document.querySelector(".nav-ul")
    if(icon.classList.toggle("change")){
        navUl.style.display="flex"
        console.log("changed");
    } else{
        navUl.style.display = "";
    }
}
