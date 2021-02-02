const numbers = [1,2,3,4,5,6,7,8,9,];
for (let i = 0; i < numbers.length; i++) {
   
    // console.log(numbers[i])                  /**output 1-------8 */
    if(numbers[i] > 7){
        break;                              /**when [i]>7 loop are stop */
    }
    // console.log(numbers[i])                  /**output 1-----7 */
}


const nums = [1,2,-3,4,5,-6,7,8,9,];
for (let i = 0; i < nums.length; i++) {
    if(nums[i] < 0){
        continue;                               /**skip negetive value */
    }
    console.log(nums[i])
}
