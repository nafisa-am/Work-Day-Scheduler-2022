$(document).ready(function () {
  const m = moment();
  const todaysDate = m.format("dddd Do MMMM YYYY");
  $("#currentDay").html(todaysDate);

  var timeArray = [
    "08 AM",
    "09 AM",
    "10 AM",
    "11 AM",
    "12 PM",
    "1 PM",
    "2 PM",
    "3 PM",
    "4 PM",
    "5 PM",
    "6 PM",
    "7 PM",
    "8 PM",
  ];

  const output = "";

  $.each(timeArray, function (index, hour) {
    const currentHour = m.set("hour", hour.slice(0, 2)).format("kk");
    currentHour = Number(currentHour);
    const date = new Date();
    const hours = date.getHours();

    output += `
      <div data-time=${hour} class="time-block-wrapper ">
          <div class="time">${hour}</div>
          <form onsubmit="insertEvent(event)">
          <input type="text" name="schedule" class="${
            hours == currentHour
              ? "input present "
              : "input"
              ? hours > currentHour && "input past "
              : "input"
              ? currentHour > hours && "input future "
              : "input"
          }input" data-time=${hour} type="text" />
          <button ><i class="fa fa-lock"></i></button>
          </form>
      </div>
      `;
    $(".container").html(output);
  });
});
