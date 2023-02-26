window.addEventListener("load", () =>{
    document.querySelector(".container").classList.add("fade-out");
    setTimeout(() =>{
        document.querySelector(".container").style.display="none";
    },600)
})
