let myFunc: Function;

myFunc = () => {
    console.log("hellow");
};

// parameters
const printNames = (name1: string, name2: string) => {
    console.log(`welcome ${name1} and ${name2}`);
};

printNames("razib", "shajib");
// printNames(3, "tomal")
// NOTE: error cuz we can only pass strings in the parameters.

// optional parameters
const showNewStudents = (std1: string, std2?: string) => {
    const welcomeMsg = `welcome ${std1} ${std2 ? `and ${std2}` : ""}`;
    console.log(welcomeMsg);
};

showNewStudents("belal", "umar");
showNewStudents("habib");
// NOTE: to make an optional parameter u have to use `?:` before setting the type

// return type
const multiply = (num1: number, num2: number): number => {
    return num1 * num2;
    // return "string";
    // NOTE: error because we are declaring that the function will return a number.
};

multiply(23, 43);
// NOTE: if we hover over this function it will now say => number since typescript can predict the outcome
