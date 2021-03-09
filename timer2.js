/**
 * INTERACTIVE TIMER
 *
 * The user can press b and it should beep right away
 * The user can input any number from 1 to 9 and it should:
 *   - immediately output "setting timer for x seconds..."
 *   - beep after that number of seconds has passed
 * The user can use ctrl + c to exit the program, at which point the program should say "Thanks for using me, ciao!" before terminating
 */

const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding('utf8');

console.log("USAGE:");
console.log("- Press B to beep right away");
console.log("- Press 1-9 to set a timer for x seconds");
console.log("- Press CTRL + C to terminate");

// On any input from stdin (standard input)...
stdin.on('data', (key) => {
  // If the user presses B, it should beep right away.
  if (key === 'b') {
    process.stdout.write('\x07');
    console.log("BEEP!");
  // If the user presses 1-9, start a timer and beep after x seconds
  } else if ('123456789'.includes(key)) {
    console.log(`Setting timer for ${key} seconds...`);
    setTimeout(() => {
      process.stdout.write('\x07');
      console.log("BEEP!");
    }, Number(key) * 1000);
  // If the user presses CTRL + c, terminate
  } else if (key === '\u0003') {
    console.log("Thanks for using me, ciao!");
    process.exit();
  }
});