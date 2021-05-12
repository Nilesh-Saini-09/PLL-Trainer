var msDisplay = document.querySelector("#milliSec");
var secDisplay = document.querySelector("#second");
var minDisplay = document.querySelector("#minute");
var minColon = document.querySelector("#minColon");
var displayTime = document.querySelector("#displayTime");
var generateScram = document.querySelector("#newScram");
var algName = document.querySelector('#algName');
var scramDisplay = document.querySelector("#scramDisplay");


var running = false;
 
var milliSec = 0;
var second = 0;
var minute = 0;
var cs = 0;
let interval;



          
function timer() {
  milliSec++;
  cs++; //counts time in centiseconds
  msDisplay.textContent  = milliSec;
  
  //once milliseconds === 100 we start increasing sec
  
  if (milliSec >= 100) {
    milliSec = 0;
    second++;
    
    //once sec > 59 we increase minute

    if (second > 59) {
      second = 0;
      minute++;
      minColon.innerHTML = ":";
      minDisplay.innerHTML = minute;
    }
    
    //for single digit seceonds we give an additional zero
    
    if (second <= 9 && minute > 0) {
      second = "0" + second;
    }
    secDisplay.innerHTML = second;
  }

  // for single digit milliseconds we give an additional second
  
  if (milliSec <= 9) {
    milliSec = '0' + milliSec;
    msDisplay.innerHTML = milliSec;
  }

}

//.............timer function ends here..................
//.......................................................
//.............Run function starts here..................

function run() {
  if (!running) {
    milliSec = 0;
    second = 0;
    minute = 0;
    cs = 0;
    secDisplay.innerHTML = "0";
    minDisplay.innerHTML = "";
    minColon.innerHTML = "";
    running = true;
    // scramble = "";
    pll();
    interval = setInterval(timer, 10);
  } else if (running) {
    running = false;
    clearInterval(interval);
    displayTime.push(" " + displayTime.innerHTML);
    csTimes.push(cs);
    timesList.innerHTML = timesDisplay;
    calculateStats();
  }
}

//.............Run function ends here......................

// timer will work when the key goes up
window.onkeyup = run;

pll();

generateScram.addEventListener('click', pll);




