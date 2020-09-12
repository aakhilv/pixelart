$("#downloadbtn").click(function() {
  html2canvas($("#art"), {
    onrendered: function(canvas) {
      var a = document.createElement("a");
      a.href = canvas.toDataURL("image/png");
      a.download = "pixelart.png";
      a.click();
    }
  });
});