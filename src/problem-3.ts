{
    //

    const countWordOccurrences=(sentence:string,word:string):number =>{
        let cnt = 0;
        const lowStr = sentence.toLowerCase();
        const wordArr:string[] = lowStr.split(' ');
        wordArr.forEach(targetWord=> {
            if(targetWord===word) cnt++;
        });
        return cnt;
    }
    const ans:number = countWordOccurrences("I Typescript love typescript", "typescript");
    console.log(ans);    

    //
}