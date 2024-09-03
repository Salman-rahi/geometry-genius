/**
*Objective : Get base and height of triangle. calculate the area by using the provided formula. Then display the area.
*step-1: get base value of the triangle
*/ 


function calculatedTriangleArea(){
    
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);
    // console.log(base);

    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);
    // console.log(height);

    const area = 0.5 * base * height;
    console.log(area);

    // Display triangle area
    const triangleAreaSpan = document.getElementById('tringle-area');
    triangleAreaSpan.innerText = area;

}

