// function signatures
type userObj = {
    name: string;
    age: number;
};

let userDetails: (id: string | number, user: userObj) => void;

userDetails = (nid: string | number, user) => {
    console.log(`${user?.name}s nid number is ${nid}`);
};

userDetails(234234234, { name: "Razib", age: 34 });

// NOTE: we can set-up the type of the parameters and return before declaring the function with function signatures.
