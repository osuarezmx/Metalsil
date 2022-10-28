/**-----------Menu sticky------------**/
window.addEventListener("scroll", () => {
    let header = this.document.querySelector(".header");
    header.classList.toggle("menu-sticky",window.scrollY>100);
});