/*
Exercise #3 (sugerencia reduce())
Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.
*/

const sumAndProduct = () => {
    const arrayNumbers = [1, 2, 3, 4];
    const sumNumbers = arrayNumbers.reduce((number, total) => {
        return number + total;
    })
    const productNumbers = arrayNumbers.reduce((number, total) => {
        return number * total;
    })
    console.log(`Given an array ${arrayNumbers} the sum is ${sumNumbers}. The product is ${productNumbers}.`);
    const resultElement = document.getElementById('ejercicio3');
    resultElement.innerText = `Given an array ${arrayNumbers} the sum is ${sumNumbers}. The product is ${productNumbers}.`;
}
sumAndProduct();