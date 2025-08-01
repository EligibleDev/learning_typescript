// strings
let fighter = "makhachev";
fighter = "aspinall";
// fighter = 45
// this will result error cuz if declared and assigned once, we cant put another type of value

// function parameters
const multiply = (num1: number, num2: number) => {
    return num1 * num2;
};

const answer = multiply(34, 12);
console.log(answer);

// arrays
const fighters = ["makhachev", "topuria", "tsarukyan", "jdm"];

fighters.push("gaethje");
// fighters.push(23);
// error because typescript has set the arrays type to 'an array of strings only'

const mixed = ["Mikail", false, []];
mixed.push(true);
// mixed.push({})
// cant push the object because typescript has set the arrays type in a way that it can only accept string, boolean, and arrays.

// objects
const fighterDetails = {
    name: "Mikail",
    division: 170,
    ranked: true,
};

fighterDetails.name = "makhachev";
// fighterDetails.name= true
// it happens with objects also, if you try to set a value of something to another type than the one typescript set, you gonna get an error.
