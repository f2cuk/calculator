let calcBtn = "";
let calcDisplay = "";

function clearScreen() {
  const calcScreen = document.querySelector("#calcDisplay");
  console.log(calcScreen);
  calcScreen.style.fontSize = "55px";
  calcScreen.textContent = "0";
  calcDisplay = "";
}

function buttonPressed (num) {
  const calcScreen = document.querySelector("#calcDisplay");

  if (calcDisplay.length < 22) {
    calcBtn = "#button" + num;
    if (!isNaN(num)) {
      const button = document.getElementById(calcBtn);
      calcDisplay = calcDisplay + num; 
    }
    else
    {
      calcDisplay = calcDisplay + num;
    }

    if (calcDisplay.length > 15) {
      calcScreen.style.alignContent = "center";
      calcScreen.style.fontSize = "25px";
    }
    if ((calcDisplay.length > 9) && (calcDisplay.length < 14)) {
      calcScreen.style.fontSize = "35px";
    }
    calcScreen.textContent = calcDisplay;
  }  
}

function equals () {
  const calcScreen = document.querySelector("#calcDisplay");

  if (calcDisplay != "") {
    if (calcDisplay.slice(-2) == '/0') {
      calcScreen.textContent = 'Division by 0';
    }
    else
    {
      try {
        calcScreen.textContent = eval(calcDisplay);
      }
      catch (err) {
        if (err instanceof SyntaxError) {
          calcScreen.textContent = "Error!";
        }
        else
        {
          calcScreen.textContent = eval(calcDisplay);
        }
      }
    }
  }
}