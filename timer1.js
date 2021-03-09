// Implement an alarm clock/timer which will beep after a specified amount of time has passed.
// The user can specify an unlimited number of alarms using command line arguments.
// Example: node timer1.js 10 3 5 15 9

// Convert command line args into milliseconds & filter out invalid values
const timers = process.argv.slice(2).map((s) => Number(s) * 1000).filter((s) => !isNaN(s) && s > 0);
for (let delay of timers) {
  setTimeout(() => {
    process.stdout.write('\x07'); // Play system sound
    console.log('BEEP!');
  }, delay);
}