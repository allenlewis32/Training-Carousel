let currentPage = 0;
let pageColor = [];
let totalPages = 5;

for(let i = 0; i < totalPages; i++) {
    pageColor[i] = ['white', 'black'];
}

updateColor();

function changeColor(colorPicker) {
    let backgroundColor = colorPicker.value;
    let r = parseInt(backgroundColor.substring(1, 3), 16);
    let g = parseInt(backgroundColor.substring(3, 5), 16);
    let b = parseInt(backgroundColor.substring(5, 7), 16);
    let brightness = Math.round((r * 299 + g * 587 + b * 114) / 1000);
    let textColor = brightness > 125?'black':'white';
    
    pageColor[currentPage] = [backgroundColor, textColor];

    updateColor();
}

function updateColor() {
    let backgroundColor = pageColor[currentPage][0];
    let textColor = pageColor[currentPage][1];
    let colorPicker = document.getElementById('colorPicker');

    document.body.style.backgroundColor = backgroundColor;
    document.getElementById('selectedColor').innerHTML = `Background color is ${backgroundColor}`;
    document.body.style.color = textColor;
    colorPicker.style.borderColor = textColor;

    colorPicker.value = backgroundColor;    
}

function nextPage() {
    currentPage = (currentPage + 1) % totalPages;
    updateColor();
}

function previousPage() {
    currentPage = (currentPage - 1 + totalPages) % totalPages;
    updateColor();
}