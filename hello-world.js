// My first JavaScript Program by Ian Nicholson

// Don't worry that my code is different colors from yours, that's called "syntax highlighting"
// Syntax highlighting depends on your text editor settings, and it doesn't affect your code execution

// "Hello, World!" program - make computer display "Hello, World!"
console.log("Hello, World!");

// Use a variable that is a string
var greeting = "Hello, World!"; // This var is a string, "=" sign means assignment

console.log(greeting);

// We can call console.log() with a different variable
var shout = "HELLO, WORLD!";

console.log(shout);

// Interpolate a variable
var username = "Ian";

var customGreeting = `Hello, ${username}!`; // variable names in JS are camelCase

console.log(customGreeting);

// Our program output is getting crowded, let's "comment out" some code so it doesn't run
// Comments let us put notes in our code

// What if I want to say "Hello, World!" multiple times?

console.log(greeting);
console.log(greeting);
console.log(greeting);
console.log(greeting);
console.log(greeting);
console.log(greeting);

// It's better to use a loop to repeat
for (i = 0; i < 6; i++ ) {
  console.log(shout);
}

// Variables can be numbers, too
var x = 4;
var y = 10;

console.log(x*y);

// You can have variables inside of loops
// for (i = 0; i < 10; i++) {
//   console.log(`pushup number ${i}`); // i is a variable inside this loop
// }

// Now let's write a function to make it easy to do those pushups

function doPushups() {
  for (i = 0; i < 10; i++) {
    console.log(`pushup number ${i}`); // i is a variable inside this loop
  }
}

doPushups(); // use "()" to call a function

// Let's add some situps

function doSitups() {
  for (i = 0; i < 10; i++) {
    console.log(`situp number ${i}`); // i is a variable inside this loop
  }
}

doSitups();

// Let's add chinups

function doChinups() {
  for (i = 0; i < 10; i++) {
    console.log(`chinup number ${i}`); // i is a variable inside this loop
  }
}

doChinups();

// I can write a function that executes other functions

function doExercises() {
  console.log("Doin' my exercises to get swole:");
  doPushups();
  doSitups();
  doChinups();
}

doExercises();

// What if I don't want to do 10 pushups every time, but want to choose the number?

function doPushups(count) { // "count" is a parameter here
  for (i = 1; i <= count; i++) {
    console.log(`pushup number ${i}`); // i is a variable inside this loop
  }
}

doPushups(12); // the function "doPushups" is executed with an arguemnt of "12"