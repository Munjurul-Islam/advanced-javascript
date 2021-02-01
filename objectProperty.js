const student = [
    {id: 1, name:'nahid'},
    {id: 2, name:'urmi'},
    {id: 3, name:'sabbir'},
    {id: 4, name:'shafwan'},
];
// const output = [];
// for (let i = 0; i < student.length; i++) {
//     const element = student[i];
//     const result = element.name;
//     const result1 = element.id;
//     output.push(result, result1);
// }
// console.log(output)

// maping method 
const names = student.map(s => s.name);
const ids = student.map(s => s.id);
console.log(ids)

// filter & find
const bigger = student.filter(s => s.name.length > 5);
const bigger1 = student.find(s => s.name.length > 5);
console.log(bigger1)