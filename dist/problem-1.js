"use strict";
{
    //
    const sumArray = (nums) => {
        let sum = 0;
        nums.forEach(num => sum += num);
        return sum;
    };
    console.log(sumArray([4, 6, 2, 5]));
    //
}
