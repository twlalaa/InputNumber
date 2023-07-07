"use strict";

let myQuestion = +prompt("Please enter a number:");

console.log(myQuestion);

while (isNaN(myQuestion)) {
  myQuestion = +prompt("Please enter a number:");
  if (!isNaN(myQuestion)) {
    alert(`You entered the number "${myQuestion}"`);
    break;
  }
}
