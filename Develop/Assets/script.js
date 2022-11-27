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


// Variable for current time to reference if time slot has passed
var currentTime = moment().format("HH") + ":00";

var domContainer = document.querySelector("#timeslot-container");
// Inserting time/day into Current day

window.setInterval(function () {
  $("#currentDay").text(moment().format("MMMM " + "Do, " + "YYYY HH:mm" ));
}, 1000);

// Displays time-block

var displayTimeBlocks = function () {
    localTasks();

  // For loop runs for every hour stored in timeArray
  for (i = 0; i < timeArray.length; i++) {
    
    var taskRow = document.createElement("div");
    taskRow.classList = "row time-block justify-content-center";
    //sets id of each elemnt to index value
    taskRow.id = timeArray.indexOf(timeArray[i]);

    // Creates hour time-slots

    var timeSlot = document.createElement("h4");
    timeSlot.classList = "hour col-md-2";
    timeSlot.id = timeArray.indexOf(timeArray[i]);
    timeSlot.textContent = timeArray[i];
    
    taskRow.appendChild(timeSlot);

    // Creates input field
    var taskInput = document.createElement("input");
    taskInput.classList = "time-block clearable col-md-9 description p-0";
    taskInput.id = "input" + timeArray.indexOf(timeArray[i]);
  
    // Space for local storage
    
    if (timeBlock[i]) {
    taskInput.value = timeBlock[i];
    }
    taskRow.appendChild(taskInput);

    taskRow.appendChild(taskInput);


    // Creates the save button
    var saveBtn = document.createElement("button");
    saveBtn.classList = "saveBtn col-md-1";
    saveBtn.id = "btn" + timeArray.indexOf(timeArray[i]);
    saveBtn.innerHTML = "<i class='far fa-save fa-lg'></i>";
    
    
    taskRow.appendChild(saveBtn);
    
    domContainer.appendChild(taskRow);

    if (currentTime === timeArray[i]){
    taskInput.classList = "present col-md-9 description p-0"
    }
    
    if (currentTime < timeArray[i]){
        taskInput.classList = "future col-md-9 description p-0"
        }
        
    if (currentTime > timeArray[i]){
        taskInput.classList = "past col-md-9 description p-0"
        }
    }
  };


displayTimeBlocks();

// Save button for saving 
$("button").on("click", function () {
    var tempTask = [];
    for (var i = 0; i < timeArray.length; i++){
        tempTask.push(document.getElementsByTage("input")[i].value);
    }
    timeBlock = tempTask;
    localStorage.setItem("tasks", JSON.stringify(timeBlock));
});

//function to retrieve from local storage
function localTasks() {
    if (JSON.parse(localStorage.getItem("tasks"))){
      timeBlock = JSON.parse(localStorage.getItem("tasks"));
    }
  }

