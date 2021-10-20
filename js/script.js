const $redInput = document.querySelector("#red-input");
const $greenInput = document.querySelector("#green-input");
const $blueInput = document.querySelector("#blue-input");
const $alphaInput = document.querySelector("#alpha-input");
const $redLabel = document.querySelector("#red-label");
const $greenLabel = document.querySelector("#green-label");
const $blueLabel = document.querySelector("#blue-label");
const $alphaLabel = document.querySelector("#alpha-label");
const $container = document.querySelector(".container");
const body = document.body;

const savedColor = JSON.parse(localStorage.getItem("color"));

const color = {
    "red":0,
    "green":0,
    "blue":0,
    "alpha":1
}

if(savedColor){
    $redLabel.innerText = savedColor.red;
    $greenLabel.innerText = savedColor.green;
    $blueLabel.innerText = savedColor.blue;
    $alphaLabel.innerText = savedColor.alpha;
    color.red = savedColor.red;
    color.green = savedColor.green;
    color.blue = savedColor.blue;
    color.alpha = savedColor.alpha;
    body.style.backgroundColor = `rgba(${savedColor.red}, ${savedColor.green}, ${savedColor.blue}, ${savedColor.alpha})`;
}

$redInput.addEventListener("input", ()=>{
    $redLabel.innerText = $redInput.value;
    color.red = $redInput.value;
    let newColor = `rgba(${color.red}, ${color.green}, ${color.blue}, ${color.alpha})`;
    body.style.backgroundColor = newColor;
    localStorage.setItem("color", JSON.stringify(color));
})

$greenInput.addEventListener("input", ()=>{
    $greenLabel.innerText = $greenInput.value;
    color.green = $greenInput.value;
    let newColor = `rgba(${color.red}, ${color.green}, ${color.blue}, ${color.alpha})`;
    body.style.backgroundColor = newColor;
    localStorage.setItem("color", JSON.stringify(color));
})

$blueInput.addEventListener("input", ()=>{
    $blueLabel.innerText = $blueInput.value;
    color.blue = $blueInput.value;
    let newColor = `rgba(${color.red}, ${color.green}, ${color.blue}, ${color.alpha})`;
    body.style.backgroundColor = newColor;
    localStorage.setItem("color", JSON.stringify(color));
})

$alphaInput.addEventListener("input", ()=>{
    $alphaLabel.innerText = $alphaInput.value;
    color.alpha = $alphaInput.value;
    let newColor = `rgba(${color.red}, ${color.green}, ${color.blue}, ${color.alpha})`;
    body.style.backgroundColor = newColor;
    localStorage.setItem("color", JSON.stringify(color));
})