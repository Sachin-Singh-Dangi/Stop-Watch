// Initialize variables for seconds and interval
let seconds = 0;
let interval = null;

// Attach click event handlers to HTML elements
$("#start").on("click", start);
$("#stop").on("click", stop);
$("#reset").on("click", reset);

// Timer function: Increments time and updates display
function timer() {
  seconds++;

  // Calculate hours, minutes, and seconds
  let hrs = Math.floor(seconds / 3600);
  let mins = Math.floor((seconds - hrs * 3600) / 60);
  let secs = seconds % 60;

  // Format single-digit values with leading zeros
  if (hrs < 10) hrs = "0" + hrs;
  if (mins < 10) mins = "0" + mins;
  if (secs < 10) secs = "0" + secs;

  // Update the displayed time
  $(".time").html(`${hrs}:${mins}:${secs}`);
}

// Start the timer (if not already running)
function start() {
  if (interval) {
    return;
  }
  interval = setInterval(timer, 1000);
}

// Stop the timer and clear the interval
function stop() {
  clearInterval(interval);
  interval = null;
}

// Reset the timer to zero and update the display
function reset() {
  stop();
  seconds = 0;
  $(".time").html("00:00:00");
}
