// type aliases
type userType = {
    id: number | string;
    name: string;
    age: number;
    hobby: string;
    isAlive: boolean;
};
// NOTE: we can create schemas like this for our duplicated types so we don't have to write the same thing over again.

const printUser = (user: userType) => {
    return console.log(user);
};

const newUser = {
    id: 2304923489,
    name: "Rohan",
    age: 23,
    hobby: "wrestling",
    isAlive: true,
};

printUser(newUser);
