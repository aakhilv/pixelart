function setPixelColor(pixel) {
    var penColor = document.getElementById("pen").value;
    pixel.style.backgroundColor = penColor;
};

function resetbtn() {
    var cols = document.getElementsByClassName("pixel");
    for (i = 0; i < cols.length; i++) {
        cols[i].style.backgroundColor = "white";
    };
};

function gridtoggle() {
    if (document.getElementById("art").style.borderSpacing !== "0px") {
        document.getElementById("art").style.borderSpacing = "0px";
        document.getElementById("gridtoggle").style.backgroundColor = "tomato";
    } else if (document.getElementById("art").style.borderSpacing === "0px") {
        document.getElementById("art").style.borderSpacing = "1px";
        document.getElementById("gridtoggle").style.backgroundColor = "limegreen";
    };
};

function bordertoggle() {
    if (document.getElementById("art").style.borderStyle !== "hidden") {
        document.getElementById("art").style.borderStyle = "hidden";
        document.getElementById("bordertoggle").style.backgroundColor = "tomato";
    } else if (document.getElementById("art").style.borderStyle === "hidden") {
        document.getElementById("art").style.borderStyle = "solid";
        document.getElementById("bordertoggle").style.backgroundColor = "limegreen";
    };
};

function downloadbtn() {
    var art = document.getElementById("art");
    html2canvas(art, {
        onrendered: function (canvas) {
            var a = document.createElement("a");
            a.href = canvas.toDataURL("image/png");
            a.download = "pixelart.png";
            a.click();
        };
    });
};
