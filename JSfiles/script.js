document.addEventListener("DOMContentLoaded", () => {
    const defaultPallet = document.getElementById("default");
    const bluePallet = document.getElementById("blue");
    const orangePallet = document.getElementById("orange");

    defaultPallet.addEventListener("click", () => colorChanger(1));
    bluePallet.addEventListener("click", () => colorChanger(2));
    orangePallet.addEventListener("click", () => colorChanger(3));
});

function colorChanger(color){
    let thingsToChange = document.querySelectorAll("body");

    for (let element of thingsToChange){
        if (color == 1){
            element.classList.add("palletDefault");
            element.classList.remove("palletBlue", "palletOrange");
        }
        else if (color == 2){
            element.classList.add("palletBlue");
            element.classList.remove("palletDefault", "palletOrange");
        }
        else {
            element.classList.add("palletOrange");
            element.classList.remove("palletDefault", "palletBlue");
        }
    }
    let wordsToChange = document.querySelectorAll("p");

    for (let element of wordsToChange){
        if (color == 1){
            element.style.color = "#ccc";
        }
        else if (color == 2){
            element.style.color = "black";
        }
        else {
            element.style.color = "black";
        }
    }
}

