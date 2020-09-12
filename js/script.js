var penColor = "black";

function setPenColor(pen) {
  penColor = pen;
}

function setPixelColor(pixel) {
  pixel.style.backgroundColor = penColor;
}

function removegrid() {
  document.getElementById("art").style.borderSpacing = "0px";
}

function enablegrid() {
  document.getElementById("art").style.borderSpacing = "1px";
}

function removeborder() {
  document.getElementById("art").style.borderStyle = "hidden";
}

function enableborder() {
  document.getElementById("art").style.borderStyle = "solid";
}
