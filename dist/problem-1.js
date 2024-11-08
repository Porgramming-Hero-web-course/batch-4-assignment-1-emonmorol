"use strict";
{
    //
    const sumArray = (numbers) => {
        let sum = 0;
        numbers.forEach(number => sum += number);
        return sum;
    };
    console.log(sumArray([4, 6, 2, 5]));
    //
}
