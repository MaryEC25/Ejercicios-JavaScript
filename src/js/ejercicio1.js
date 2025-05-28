/*
Exercise #1 (sugerencia: join())
Copy the code below into your workspace:

let arr = ["This", "is", "a", "sentence."];
Complete the function to print out the string: This is a sentence.
*/

let arr = ["This", "is", "a", "sentence."];

function printOutString() {
  console.log(arr.join(" "));
  const resultElement = document.getElementById('ejercicio1');
  resultElement.innerText = `${arr.join(" ")}`;
}

printOutString();


