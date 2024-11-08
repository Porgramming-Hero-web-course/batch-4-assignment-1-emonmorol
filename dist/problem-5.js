"use strict";
{
    //
    const getProperty = (person, personKey) => {
        return person[personKey];
    };
    const person = { name: "Alice", age: 30 };
    console.log(getProperty(person, "name"));
    //
}
