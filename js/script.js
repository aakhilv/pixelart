var penColor = "black";

function setPenColor(pen) {
  penColor = pen;
}

function setPixelColor(pixel) {
  pixel.style.backgroundColor = penColor;
}

function gridtoggle() {
  if (document.getElementById("art").style.borderSpacing !== "0px") {
    document.getElementById("art").style.borderSpacing = "0px";
    document.getElementById("gridtoggle").style.backgroundColor = "tomato";
  } else if (document.getElementById("art").style.borderSpacing === "0px") {
    document.getElementById("art").style.borderSpacing = "1px";
    document.getElementById("gridtoggle").style.backgroundColor = "limegreen";
  }
}

function bordertoggle() {
  if (document.getElementById("art").style.borderStyle !== "hidden") {
    document.getElementById("art").style.borderStyle = "hidden";
    document.getElementById("bordertoggle").style.backgroundColor = "tomato";
  } else if (document.getElementById("art").style.borderStyle === "hidden") {
    document.getElementById("art").style.borderStyle = "solid";
    document.getElementById("bordertoggle").style.backgroundColor = "limegreen";
  }
}
