let variable: any;

variable = 4;
variable = "micky";
variable = false;
// NOTE: by setting any, we can set any type of value to the variable. kinda self explanatory.

let anyType;

anyType = [];
anyType = {};
anyType = "asdf";
// NOTE: any is also set by default when we don't set any type to a variable.

// arrays
let anyArray: any[] = [];

anyArray.push("Tarek");
anyArray.push(345);
anyArray.push(false);

// objects
let person: {
    name: any;
    age: any;
};

person = { name: true, age: [] };

// NOTE: when using objects, we have don't have to assign any value to it unlike arrays
