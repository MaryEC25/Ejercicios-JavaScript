/*
Exercise #5
For each of the exercises below, assume you are starting with the following people array.
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
1.	Write a command that prints out all of the people in the list.
2.	Write the command to remove "Dani" from the array.
3.	Write the command to remove "Juan" from the array.
4.	Write the command to move "Luis" to the front of the array.
5.	Write the command to add your name to the end of the array.
6.	Using a loop, iterate through this array and after console.log "Maria", exit from the loop.
7.	Write the command that gives the indexOf where "Maria" is located.
At the end of the exercise, there should be 4 people in the array.
*/

let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

const arrayPeople = () => {
    const arrayInit = () => {
        console.log(`People: ${people.join(", ")}`);
    };

    const deletePeople = () => {
        const withoutDani = people.filter(person => person !== "Dani");
        console.log(`People without Dani: ${withoutDani.join(", ")}`);
        const withoutJuan = withoutDani.filter(person => person !== "Juan");
        console.log(`People whithout Juan: ${withoutJuan.join(", ")}`);
        return withoutJuan;
    };

    const movePeople = () => {
        const people2 = deletePeople();
        people2.unshift(people2.splice(people2.indexOf("Luis"), 1)[0]);
        console.log(`Luis at the beginning of array: ${people2.join(", ")}`);
        return people2;
    };

    const addPeople = () => {
        const people3 = movePeople();
        people3.push("Mariana");
        console.log(`Adding my name: ${people3.join(", ")}`);
        return people3;
    };

    const processPeople = () => {
        arrayInit();
        const people4 = addPeople();
        for (let person of people4) {
            console.log(person);
            if (person === "Maria") break;
        }
        const mariaIndex = people4.indexOf("Maria");
        console.log("Maria Index:", mariaIndex);
        console.log(`There are ${people4.length} people in the array: ${people4.join(", ")}`);
        const resultElement = document.getElementById('ejercicio5');
        resultElement.innerText = `There are ${people4.length} people in the array: ${people4.join(", ")}`;
        return people4;
    };
    processPeople();
};

arrayPeople();



