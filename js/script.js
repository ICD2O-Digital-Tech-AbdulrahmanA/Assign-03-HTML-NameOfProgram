"use strict";

// function to calculate and display surface area and volume of an octagonal prism
function calculateOctagonalPrism() {
  // convert user inputs into variables
  let a = parseFloat(document.getElementById("base").value);
  let h = parseFloat(document.getElementById("height").value);

  // square root of 2
  let sqrt2 = Math.sqrt(2);

  // surface area
  let surfaceArea = 8 * a * h + 4 * (1 + sqrt2) * a * a;

  // volume
  let volume = 2 * (1 + sqrt2) * a * a * h;

  // show results with if statement
  let resultText = "Surface Area: " + surfaceArea.toFixed(2) + " cm²\nVolume: " + volume.toFixed(2) + " cm³";

  if (surfaceArea > 500 || volume > 500) {
    resultText += "\nThat's a big prism!";
  }

  document.getElementById("result").innerText = resultText;
}
