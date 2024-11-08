# The significance of union and intersection types in TypeScript

TypeScript is an updated version of JavaScript that brings additional tools and keywords to make our code more efficient and readable. Among those there are union and intersection types. Union and intersection types allow us to combine multiple types and that increase flexibility and safety.

## What Are Union and Intersection Types?

### Union Types

A union type allows variable to accept more than one variable type. and this offers flexibility while representing multiple possibilities.

 
For example:

```typescript
let status: number | string;
status = 'success';
status = 1; 
status = true; // Error. not valid
```

Here we can see that status can accept type number and string. And when we try to assign boolean value, it throws error. But it accepts number and string.

### Intersection Types

An Intersection type allows to combine multiple types into one type. When we want to create a new type that has properties of multiple type.

 
For example:

```typescript
type Car = {
    company: string;
    model:string;
}
type Invoice = {
    price:number;
    discount:number;
}

type CarInvoice = Car & Invoice;

const car: CarInvoice = {
    company:"Toyota",
    model:"Fortuner",
    price:2500000,
    discount:100000
}
```

Here we can see that , Using Car and Invoice type we created CarInvoice type and using that type we created car object.


## Why Union and Intersection Types Matter
Union and intersection types improved type safety,code readability , flexibility, reusability and maintainability. 

Using union and intersection types we can define variable , function etc. more precisely. And because of this our code becomes more bug-free. Union and intersection type empower developers to write more flexible code. Without union and intersection type , it is difficult to make our typescript program flexible and versatile. These are the significance of union and intersection type in typescript.