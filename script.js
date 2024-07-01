"use strict"

let currentDay = document.getElementById("day");
let currentTimeUTC = document.getElementById("time");

let today = new Date().getDay();
let displayDay;

switch (today) {
    case 0:
      displayDay = "Sunday";
      break;
    case 1:
      displayDay = "Monday";
      break;
    case 2:
      displayDay = "Tuesday";
      break;
    case 3:
      displayDay = "Wednesday";
      break;
    case 4:
      displayDay = "Thursday";
      break;
    case 5:
      displayDay = "Friday";
      break;
    case 6:
      displayDay = "Saturday";
  }
  
  currentDay.innerHTML = displayDay;

  let displayTime = () => {
    let currentUTCHour = new Date().getUTCHours();
    let currentUTCMinutes = new Date().getUTCMinutes();
    let currentUTCSeconds = new Date().getUTCSeconds();
  
    currentTimeUTC.innerHTML = `${currentUTCHour}:${currentUTCMinutes.toString().padStart(2, '0')}:${currentUTCSeconds}`;
  };
  
  setInterval(displayTime, 1000);