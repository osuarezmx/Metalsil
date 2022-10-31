/**-----------Menu sticky------------**/
window.addEventListener("scroll", () => {
    let header = this.document.querySelector(".header");
    header.classList.toggle("menu-sticky",window.scrollY>100);
});

/**-----------Toggle------------**/
/* const accordion = document.querySelector(".toggle-contenido");
const accordionItem = document.querySelector(".toggle-item");
let height = 0;

accordionItem.addEventListener("click", () => {
    if(height) {
        height = accordion.scrollHeight;
    }else{
        height = 0;
    }

    accordion.style.height = `${height}px`;

}); */