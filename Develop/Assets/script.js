// Displays calendar times
var timeBlock = [];
var timeArray = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00"
];

// Variable for current time to reference if time slot has passed
var currentTime = moment().format("HH") + ":00";

var domContainer = document.querySelector("#timeslot-container");
// Inserting time/day into Current day

window.setInterval(function () {
  $("#currentDay").text(moment().format("MMMM " + "Do, " + "YYYY HH:mm" ));
}, 1000);
