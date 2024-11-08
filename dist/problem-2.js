"use strict";
{
    //
    const removeDuplicates = (numbersWithDuplicates) => {
        const setWithoutDuplicates = new Set(numbersWithDuplicates);
        return [...setWithoutDuplicates];
    };
    const ans = removeDuplicates([1, 3, 4, 2, 2, 4, 5]);
    console.log(ans);
    //
}
