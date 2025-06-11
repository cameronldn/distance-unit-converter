function convert() {
    const inputValue = document.getElementById("userInput").value;
    const unit = document.getElementById("unit").value;
    const milesToKm = unit === "milesToKm";
    let result = 0;
    const resultElement = document.getElementById("resultElement");

    if (milesToKm) {
      result = inputValue * 1.60934;
    } else {
      result = inputValue / 1.60934;
    }
    let resultString1 = " miles are ";
    let resultString2 = " km";
    if (!milesToKm) {
      resultString1 = " kms are ";
      resultString2 = " miles";
    }
    const resultString = inputValue + resultString1 + result + resultString2;
    console.log(resultString);
    resultElement.innerHTML = resultString;
  }
  