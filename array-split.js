const numbers = [3, 34, 54,32, 39, 76, 8, 6, 4,44];
const separate = numbers.slice(4, 8);            /**(start)index,  to before (end)index*/
console.log(separate)

const removed = numbers.splice(3, 4, 25,39)       /**(start)index,  to deletecount(end), add/replace in their place 25, 39*/
console.log(removed)
console.log(numbers)                                 /**after splice the array has been changed */

const  together = numbers.join('')             /**the join method convarted arry to string */
const space = numbers.join(' ')                 /**after every element add space */
const and = numbers.join('&')  
console.log(and)
console.log(numbers)