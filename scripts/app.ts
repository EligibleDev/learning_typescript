// enums

enum citizenType {
    illiterate,
    poor,
    middleClass,
    rich,
    billionaire,
}

interface citizen<T> {
    name: string;
    age: number;
    citizenType: T;
}

const newCitizen: citizen<citizenType> = {
    name: "Rajib",
    age: 54,
    citizenType: citizenType.rich,
};

console.log(newCitizen);

// NOTE: think of enums as set of prebuilt types. and when we use it, it returns the index of the type that we selected.
