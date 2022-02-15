import React from 'react'

class Logging extends React.Component{ 
 INITIAL_WAIT = 3000000000000000000000000000000000000000000000000000000000000000000000000000000000000000;
 INTERVAL_WAIT = 100000000000000000000000000000000000000000000000000000000000000000000000000000000000000;
 ONE_SECOND = 1000;

 events = ["mouseup", "keydown", "scroll", "mousemove"];
 startTime = Date.now();
 endTime = startTime + INITIAL_WAIT;
 totalTime = 0;
 clickCount = 0;
 buttonClickCount = 0;
 linkClickCount = 0;
 keypressCount = 0;
 scrollCount = 0;
 mouseMovementCount = 0;

setInterval = () => {
  if (!document.hidden && startTime <= endTime) {
    startTime = Date.now();
    totalTime += ONE_SECOND;
    document.getElementById("timer").innerHTML = formatTime(totalTime);
  }
};

render() {
document.addEventListener("DOMContentLoaded", function () {
  events.forEach(function (e) {
    document.addEventListener(e, function () {
      endTime = Date.now() + INTERVAL_WAIT;
      if (e === "mouseup") {
        clickCount++;
        document.getElementById("click").innerHTML = clickCount;
        if (e.target.nodeName === 'BUTTON') {
          buttonClickCount++;
          document.getElementById("button").innerHTML = buttonClickCount;
        }
        else if (e.target.nodeName === 'A') {
          linkClickCount++;
          document.getElementById("link").innerHTML = linkClickCount;
        }
      }
      else if (e === "keydown") {
        keypressCount++;
        document.getElementById("keypress").innerHTML = keypressCount;
      }
      else if (e === "scroll") {
        scrollCount++;
        document.getElementById("scroll").innerHTML = scrollCount;
      }
      else if (e === "mousemove") {
        mouseMovementCount++;
        document.getElementById("mouse").innerHTML = mouseMovementCount;
      }
    });
  });
});
}

formatTime = (ms) => {
  var seconds = Math.floor(ms / 1000);
  seconds = seconds < 10 ? "0" + seconds : seconds;

  var minutes = Math.floor(ms / (1000 * 60));
  minutes = minutes < 10 ? "0" + minutes : minutes;

  var hours = Math.floor(ms / (1000 * 60 * 60));
  hours = hours < 10 ? "0" + hours : hours; 2

  return hours + ":" + minutes + ":" + seconds;
}
}

export default Logging;