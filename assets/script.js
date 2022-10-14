// Current Date & added current time
var currentDay = $("#currentDay");

function displayDate() {
    var today = moment().format('dddd, MMM DD, YYYY hh:mm:ss a');
    currentDay.text(today);
};

setInterval(displayDate, 1000);
