const  circumference = parseFloat(prompt("Enter the circumference of the circle:"));
const  squarePerimeter = parseFloat(prompt("Enter the perimeter of the square:"));

const  circleDiameter = circumference / Math.PI;
const  squareSide = squarePerimeter / 4;

if (circleDiameter <= squareSide) {
    console.log("The circle will fit inside the square");
} else {
    console.log("The circle will not fit inside the square");
}
