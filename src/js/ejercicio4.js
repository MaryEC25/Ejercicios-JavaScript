/*
Exercise #4 (sugerencia filter() e includes())
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.
*/

let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

const commonCourses = () => {
    const common = student1Courses.filter(course =>
        student2Courses.includes(course)
    );
    console.log(`Common courses: ${common}`);
    const resultElement = document.getElementById('ejercicio4');
    resultElement.innerText = `Common courses: ${common}`;
    return common;        
};
commonCourses();