{
    //

    const removeDuplicates=(numbersWithDuplicates:number[]):number[]=>{
        
        const setWithoutDuplicates:Set<number> = new Set(numbersWithDuplicates);

        return [...setWithoutDuplicates];
    }
    const ans:number[] = removeDuplicates([1, 3, 4, 2, 2, 4, 5]);
    console.log(ans);    

    //
}