function rectrangleCalculateArea(){
    const rectrangleWidthArea = document.getElementById('reactangle-width');
    const rectrangleWidthText = rectrangleWidthArea.value;
    const width = parseFloat(rectrangleWidthText);
    

    const rectrangleLengthArea = document.getElementById('reactangle-length');
    const rectrangleLengthText = rectrangleLengthArea.value;
    const length = parseFloat(rectrangleLengthText);
    
    const area = width * length;
    console.log(area);

    const reactangleAareaSpan = document.getElementById('reactangle-area');
    reactangleAareaSpan.innerText = area;

}