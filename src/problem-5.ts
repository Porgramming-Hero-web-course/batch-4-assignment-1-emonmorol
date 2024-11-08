{
    //

    const getProperty = <P,K extends keyof P>(person:P,personKey:K)=>{
        return person[personKey];
    }

    const person = { name: "Alice", age: 30 };
    console.log(getProperty(person, "name"));

    //
}