// using generics
const citizen = (person) => {
    console.log(`create NID card for ${person.age} year old ${person.name}`);
};
const newCitizen = {
    name: "Rahul",
    age: 18,
};
citizen(newCitizen);
const newResponse = {
    ok: true,
    status: 200,
    data: [{}, {}],
};
export {};
// NOTE: when we don't know what the type of a variable that's inside the interface we're building, we can use the <T> to take the type from the programmer that will use the interface in future.
//# sourceMappingURL=app.js.map