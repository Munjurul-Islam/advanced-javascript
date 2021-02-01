const numbers = [1,3,4,45,6,7,7,765,77,5,4];
// loop method 
// const output = [];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
// console.log(output)

// Map()
const result = numbers.map(function(element, index, array){
    return element * element;
})
console.log(result)

// Map()1
const result = numbers.map(element => element * element);
console.log(result)

// filter 
const result = numbers.filter(x => x > 25);
console.log(result)

// find 
const result = numbers.find(x => x > 25);
console.log(result)