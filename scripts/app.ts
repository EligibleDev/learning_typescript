// using generics

type applicant = {
    age: number;
    name: string;
};

const citizen = <T extends applicant>(person: T) => {
    console.log(`create NID card for ${person.age} year old ${person.name}`);
};

const newCitizen = {
    name: "Rahul",
    age: 18,
};

citizen(newCitizen);

// using generics inside interfaces

interface apiRes<T> {
    ok: boolean;
    status: number;
    data: T;
}

type dataType = {}[];

const newResponse: apiRes<dataType> = {
    ok: true,
    status: 200,
    data: [{}, {}],
};

// NOTE: when we don't know what the type of a variable that's inside the interface we're building, we can use the <T> to take the type from the programmer that will use the interface in future.
