/*
==
!=
< > 
<= >=
&&
||
Falsy value false, 0, "", undefined, NaN
NEVER USE == USE ===

*/

let age = 20;

if (age >= 25) {
  console.log("You're eligible to get married");
} else if (age < 18) {
  console.log("You're not eligible to get married");
} else {
  console.log("Shaadi hi mat kar bro");
}
