function changeColor(color) {
    document.body.style.backgroundColor = color;
    document.getElementById('selectedColor').innerHTML = `Background color is ${color}`;
}