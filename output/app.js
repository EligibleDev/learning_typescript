// enums
var citizenType;
(function (citizenType) {
    citizenType[citizenType["illiterate"] = 0] = "illiterate";
    citizenType[citizenType["poor"] = 1] = "poor";
    citizenType[citizenType["middleClass"] = 2] = "middleClass";
    citizenType[citizenType["rich"] = 3] = "rich";
    citizenType[citizenType["billionaire"] = 4] = "billionaire";
})(citizenType || (citizenType = {}));
const newCitizen = {
    name: "Rajib",
    age: 54,
    citizenType: citizenType.rich,
};
console.log(newCitizen);
export {};
// NOTE: think of enums as set of prebuilt types. and when we use it, it returns the index of the type that we selected.
//# sourceMappingURL=app.js.map