
function circle1Clicked() {
    console.log("Circle 1 was clicked"); 
    let text = document.getElementById("circle1Text");
	text.innerHTML++;
}

function circle2Hovered() {
    console.log("Circle 2 was hovered"); 
    let circle = document.getElementById("circle2");
    circle.style.stroke = "black";
}

function circle2Unhovered() {
    console.log("Circle 2 was unhovered"); 
    let circle = document.getElementById("circle2");
    circle.style.stroke = "none";
}

function circle3Clicked() {
    console.log("Circle 3 was clicked"); 
    let circle = document.getElementById("circle3");
    console.log(circle.style.opacity);
    if (circle.style.opacity == 0) {
        circle.style.opacity = 1;
        console.log("first case", circle.style.opacity);
    }
    else {
        circle.style.opacity = 0;
        console.log("second case", circle.style.opacity); 
    }
}