/*
Exercise # 6
Write a function that performs the bubble algorithm.
Input [3, 6, 12, 5, 100, 1]
Output [1, 3, 5, 6, 12, 100]
*/

const input = [3, 6, 12, 5, 100, 1];

const compareNumbers = (a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
};

const compareNumbers2 = (a, b) => a - b;

const compareNumbersDescending = (a, b) => {
    if (a < b) return 1;
    if (a > b) return -1;
    return 0;
};

const compareNumbersDescending2 = (a, b) => b - a;

const sortNumbers = (unsortedNumbers, callbackFn) => {
    const sortedNumbers = unsortedNumbers;
    sortedNumbers.sort(callbackFn);
    return sortedNumbers;
};

console.log(`Input: ${input.join(", ")}`);
const resultElement = document.getElementById('ejercicio6');
resultElement.innerText = `Input: ${input.join(", ")}`;

console.log("Output:", sortNumbers(input, (a, b) => a - b).join(", "));
const resultElement2 = document.getElementById('ejercicio6-2');
resultElement2.textContent = `Output: ${sortNumbers(input, (a, b) => a - b).join(", ")}`;
