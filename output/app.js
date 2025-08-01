// strings
let fighter = "makhachev";
fighter = "aspinall";
// fighter = 45
// this will result error cuz if declared and assigned once, we cant put another type of value
// function parameters
const multiply = (num1, num2) => {
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
const fighter = {};
export {};
//# sourceMappingURL=app.js.map