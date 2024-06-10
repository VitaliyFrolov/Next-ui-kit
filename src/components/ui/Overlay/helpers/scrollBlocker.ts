export function scrollBlocker(active: boolean): void {
    const body = document.body;

    if (active === true) {
        if (window.innerWidth !== document.scrollingElement!.clientWidth) {
            body.style.paddingRight = window.innerWidth - document.scrollingElement!.clientWidth + "px";
        } else {
            body.style.paddingRight = "";
        }
        body.style.overflow = "hidden";
    } else {
        body.style.overflow = "";
        body.style.paddingRight = "";
    }
}