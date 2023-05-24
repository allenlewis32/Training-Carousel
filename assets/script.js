function changeColor(colorPicker) {
    let color = colorPicker.value;
    document.body.style.backgroundColor = color;
    document.getElementById('selectedColor').innerHTML = `Background color is ${color}`;
    let r = parseInt(color.substring(1, 3), 16);
    let g = parseInt(color.substring(3, 5), 16);
    let b = parseInt(color.substring(5, 7), 16);
    let brightness = Math.round((r * 299 + g * 587 + b * 114) / 1000);
    let textColor = brightness > 125?'black':'white';
    document.body.style.color = textColor;
    colorPicker.style.borderColor = textColor;
    document.querySelectorAll('button').forEach((button) => button.style.borderColor = textColor);
}