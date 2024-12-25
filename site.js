class Rectangle {
    constructor(width, height, colorName, colorCode) {
        this.width = width;
        this.height = height;
        this.colorName = colorName;
        this.colorCode = colorCode;
    }

    serialize() {
        return JSON.stringify(this);
    }
}

function createRectangle() {
    const width = document.getElementById('width').value;
    const height = document.getElementById('height').value;
    const colorName = document.getElementById('colorName').value;
    const colorR = document.getElementById('colorR').value;
    const colorG = document.getElementById('colorG').value;
    const colorB = document.getElementById('colorB').value;

    if (!width || !height || !colorName || colorR === "" || colorG === "" || colorB === "") {
        alert('404');
        return;
    }

    const colorCode = `${colorR},${colorG},${colorB}`;
    const rectangle = new Rectangle(`${width}px`, `${height}px`, colorName, colorCode);
    console.log('Serialized Rectangle:', rectangle.serialize());

    const rectangleDiv = document.createElement('div');
    rectangleDiv.className = 'rectangle';
    rectangleDiv.style.width = `${width}px`;
    rectangleDiv.style.height = `${height}px`;
    rectangleDiv.style.backgroundColor = `rgb(${colorCode})`;
    rectangleDiv.textContent = `${colorName} (rgb(${colorCode}))`;

    const output = document.getElementById('rectangleOutput');
    output.innerHTML = '';
    output.appendChild(rectangleDiv);
}
