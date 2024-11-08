"use strict";
{
    //
    function validateKeys(mainObject, keys) {
        let isValid = true;
        keys.forEach(key => {
            if (!(key in mainObject))
                isValid = false;
        });
        return isValid;
    }
    const person = { name: "Alice", age: 30, email: "alice@example.com" };
    console.log(validateKeys(person, ["name", "age"]));
    // console.log(validateKeys(person, ["name", "address"]));
    //
}
