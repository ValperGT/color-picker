const $redInput = document.querySelector("#red-input");
const $greenInput = document.querySelector("#green-input");
const $blueInput = document.querySelector("#blue-input");
const $alphaInput = document.querySelector("#alpha-input");
const $redLabel = document.querySelector("#red-label");
const $greenLabel = document.querySelector("#green-label");
const $blueLabel = document.querySelector("#blue-label");
const $alphaLabel = document.querySelector("#alpha-label");
const $container = document.querySelector(".container");
const $buttonClipboard = document.querySelector(".input__copy-button");
const body = document.body;

const redRandomValue = Math.floor(Math.random() * (255 + 1));
const greenRandomValue = Math.floor(Math.random() * (255 + 1));
const blueRandomValue = Math.floor(Math.random() * (255 + 1));

const color = {
    "red":redRandomValue,
    "green":greenRandomValue,
    "blue":blueRandomValue,
    "alpha":1
}

body.style.backgroundColor = `rgba(${color.red}, ${color.green}, ${color.blue}, ${color.alpha})`;
$redLabel.innerText = color.red;
$greenLabel.innerText = color.green;
$blueLabel.innerText = color.blue;
$alphaLabel.innerText = color.alpha;
$redInput.value = color.red;
$greenInput.value = color.green;
$blueInput.value = color.blue;
$alphaInput.value = color.alpha;

$redInput.addEventListener("input", ()=>{
    $redLabel.innerText = $redInput.value;
    color.red = $redInput.value;
    let newColor = `rgba(${color.red}, ${color.green}, ${color.blue}, ${color.alpha})`;
    body.style.backgroundColor = newColor;
})

$greenInput.addEventListener("input", ()=>{
    $greenLabel.innerText = $greenInput.value;
    color.green = $greenInput.value;
    let newColor = `rgba(${color.red}, ${color.green}, ${color.blue}, ${color.alpha})`;
    body.style.backgroundColor = newColor;
})

$blueInput.addEventListener("input", ()=>{
    $blueLabel.innerText = $blueInput.value;
    color.blue = $blueInput.value;
    let newColor = `rgba(${color.red}, ${color.green}, ${color.blue}, ${color.alpha})`;
    body.style.backgroundColor = newColor;
})

$alphaInput.addEventListener("input", ()=>{
    $alphaLabel.innerText = $alphaInput.value;
    color.alpha = $alphaInput.value;
    let newColor = `rgba(${color.red}, ${color.green}, ${color.blue}, ${color.alpha})`;
    body.style.backgroundColor = newColor;
})

$buttonClipboard.addEventListener("click", ()=>{
    navigator.clipboard.writeText(`rgba(${color.red},${color.green},${color.blue},${color.alpha});`);
    $buttonClipboard.classList.add("active");
    setTimeout(()=>{
        $buttonClipboard.classList.remove("active");
    },2000)
})