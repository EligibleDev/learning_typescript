let userDetails;
userDetails = (nid, user) => {
    console.log(`${user === null || user === void 0 ? void 0 : user.name}s nid number is ${nid}`);
};
userDetails(234234234, { name: "Razib", age: 34 });
export {};
// NOTE: we can set-up the type of the parameters and return before declaring the function with function signatures.
//# sourceMappingURL=app.js.map