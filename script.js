const manageSpec = (event) => {
    document.getElementById("spec-info-img").setAttribute("src", `assets/${event.target.id}-info.svg`);
    document.getElementById("content-div-home").style.display = "none";
    document.getElementById("spec-info").style.display = "block";
}

const backHome = () => {
    document.getElementById("spec-info").style.display = "none";
    document.getElementById("content-div-home").style.display = "block";
}