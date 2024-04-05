const h1 = document.querySelector("div.hello:first-child  h1");

function handleTittleClick() {
    const currentColor = h1.style.color = "blue" ;
    let newColor;
    if (currentColor === "blue") {
        newColor = "tomato";
    }
    else {
        newColor = "blue";
    }
    h1.style.color = newColor;
}
