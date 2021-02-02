function stopWatch (){                  /**there is a function in another function. in this function return or use */
    let count = 0;
    return function(){
        count++;
        return count;
    }
}

const clock1 = stopWatch();         /** call same function by different variable */
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());

const clock2 = stopWatch();         /** call same function by different variable */
console.log(clock2());
console.log(clock1());              /** clock1 count unique value */
console.log(clock2());          /** clock2 count unique value */