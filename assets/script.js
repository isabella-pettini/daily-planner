// Var for date/time for moment.js
var currentDay = $("#currentDay");

// use function for moment.js for date/time
function displayDate() {
    var today = moment().format('dddd, MMM DD, YYYY hh:mm:ss a');
    currentDay.text(today);
};
setInterval(displayDate, 1000);

// event listener
$('.saveBtn').on('click', function () {
    var text = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id')
// set items to local storage 
    localStorage.setItem(time, text);
});

// get items for local storage
$('#hour9 .description').val(localStorage.getItem('hour9'));
$('#hour10 .description').val(localStorage.getItem('hour10'));
$('#hour11 .description').val(localStorage.getItem('hour11'));
$('#hour12 .description').val(localStorage.getItem('hour12'));
$('#hour13 .description').val(localStorage.getItem('hour13'));
$('#hour14 .description').val(localStorage.getItem('hour14'));
$('#hour15 .description').val(localStorage.getItem('hour15'));
$('#hour16 .description').val(localStorage.getItem('hour16'));
$('#hour17 .description').val(localStorage.getItem('hour17'));

// time tracker to change colors based on past, present, future
function timeTracker() {
    
    var currentTime = moment().hour();
    // loop for each time block
    $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").split("hour")[1]);

    // check time and change color of the block depending on time
        if (blockHour < currentTime) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        else if (blockHour === currentTime) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
}

timeTracker(); 
