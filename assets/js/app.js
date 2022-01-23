mainSize();

function mainSize() {
    let footer = document.querySelector("footer");
    let nav = document.querySelector("nav");
    let main = document.querySelector("main");

    if (nav != null && main != null) {
        let size = window.innerHeight - (nav.offsetHeight + footer.offsetHeight);
        main.style.minHeight = "0px";
        main.style.transition = "0s";
        
        setTimeout(function() {
            main.style.transition = "2s";
            main.style.minHeight =  size + "px";
        }, 10);
    }
}