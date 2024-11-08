{
    //

    function validateKeys<T extends object>(mainObject: T, keys: (keyof T)[]){
        let isValid:boolean = true;
        keys.forEach(key=>{
            if(!(key in mainObject)) isValid = false;
        })
        return isValid;
    }
    const person = { name: "Alice", age: 30, email: "alice@example.com" };

    console.log(validateKeys(person, ["name", "age"])); // Output: true
    console.log(validateKeys(person, ["name", "address"])); // Output: false
    
    //
}