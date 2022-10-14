# daily-planner

## Acceptance Criteria
GIVEN I am using a daily planner to create a schedule

WHEN I open the planner
THEN the current day is displayed at the top of the calendar

WHEN I scroll down
THEN I am presented with timeblocks for standard business hours

WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future

WHEN I click into a timeblock
THEN I can enter an event

WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage

WHEN I refresh the page
THEN the saved events persist

WHEN I scroll down, THEN I am presented with timeblocks for standard business hours
  - Possibly needs a div for each block of time?
  - May use the jQuery row function for making the two columns with the time and the body of the calendar, with buttons on the right side of it
  Ex: https://getbootstrap.com/docs/4.0/layout/grid/
  - May need to mess around with styling to get it to look right
  - Or consider the versions of jQuery and jQuery UI that are linked appropriately on what version it is
  - Of note, jQuery adds in a style sheet of its own that messes with formatting and presentation

WHEN I view the timeblocks for that day, THEN each timeblock is color coded to indicate whether it is in the past, present, or future
  - Will need to coordinate the classes/ids from the CSS to match the appropriate HTML
  - Past is gray, current hour is red, future is green
  - Need a function that checks what time it currently is and changes the color
  - Might need an if statement
  Moment.js docs might have some clues

WHEN I click into a timeblock, THEN I can enter an event
WHEN I click the save button for that timeblock
  - <form>
  - If need to delete a calendar event, consider the following from activity 05/06
  - Ex:   // Clear input fields
  $('input[type="text"]').val('');
  $('input[type="email"]').val('');
  $('input[type="checkbox"]').prop('checked', false);
}
  - May consider using the jQuery button options: https://api.jqueryui.com/button/#event-create


THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
  - Reference 21-24 in the Web APIs activities
  - https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

