// Hide loader after 2 seconds
window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loader").style.opacity = "0";
        setTimeout(() => { document.getElementById("loader").style.display = "none"; }, 500);
    }, 2000);
});