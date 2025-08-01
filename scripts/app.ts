// arrays
const arrayOfNumbers: number[] = [];

arrayOfNumbers.push(234);
// arrayOfNumbers.push("mikail")
// NOTE: gonna show error cuz we defined the its gonna be a array of numbers.

//union types in an array
const stringNumberArray: (string | number)[] = [];
stringNumberArray.push("bear");
stringNumberArray.push(34);
// stringNumberArray.push(true)
// NOTE: will show errors cuz we only allowed the array to contain strings and numbers

// objects
let person: {
    name: string;
    age: number;
    isMarried: boolean;
};

person = {
    name: "mikail",
    age: 34,
    isMarried: true,
};

// person = {
//     name: "mikail",
//     age: 23,
//     isMarried: [],
// };
// NOTE: the array is not set as an acceptable type for isMarried.

// person = {
//     name: "badhon"
// }
// NOTE: we didn't set the value of all the properties of the object.

let object: object;

object = [];
// NOTE: this will not show an error because arrays are a type of object in javascript. so when defining
// NOTE: objects we have to define a specific pattern like {} with properties.
