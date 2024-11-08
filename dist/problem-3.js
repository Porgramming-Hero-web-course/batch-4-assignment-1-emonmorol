"use strict";
{
    //
    const countWordOccurrences = (sentence, word) => {
        let cnt = 0;
        const lowStr = sentence.toLowerCase();
        const wordArr = lowStr.split(' ');
        wordArr.forEach(targetWord => {
            if (targetWord === word)
                cnt++;
        });
        return cnt;
    };
    const ans = countWordOccurrences("I Typescript love typescript", "typescript");
    console.log(ans);
    //
}
