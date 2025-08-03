# Learning Typescript with [Sumit Saha](https://www.youtube.com/playlist?list=PLHiZ4m8vCp9PgOOjdyNpc6AoBmKNrp_u3)

### Lesson 2

So the `tsc` command will take my typescript file and create a new js file containing the translated to javascript version of the typescript code i've written in the ts file.
sounds kinda complicated but i suppose its due to my poor language skills.

The `tsconfig` is a vast config file. We can control many things with it. Like where our ts files are located and where the compiled js files should be etc.

Since we've configured where our ts files are located, from now on we don't have to provide the file name after the `tsc` command. We now just have to type the `tsc` command.

Typing `tsc` everytime is tough. So we just have to enable the `tsc -w` watch flag. which will compile all the ts files right after we save it.

### Lesson 3

When we declare and assign a value to a variable at the same time, the type of the value becomes the type of the variable. And if we try to assign another type of value to that variable, it shows error. Because typescript is smart.

But if we just declare the variable not assign anything then typescript sets the type to `any` which results in assigning to any type of value in future.

Same thing happens with objects and arrays as well. if we try to put a different type to a arrays element or a objects property than the one that got firstly set by typescript, we gonna get error.

### Lesson 4

When defining objects and arrays we can set the type of each property or which types of elements the array will contain.

### Lesson 5

When we declare a variable it is set to any by default. or we can also explicitly set `: any` to the variable. But its not a good practice since the point of using typescript is to prevent this behavior.

### Lesson 6

When defining functions we have to use the type `Function`. Now, the reason its capitalized is cause the word `function` is a keyword in javascript. just like `String`. that's why, to prevent collision typescript uses `Function`, `string` etc.

To make an optional parameter we have to use `?:` instead of just `:` before setting the type.

We can also set a default value of a parameter by using `=` after it. Tho its a javascript feature I really forgot about it and thought worth mentioning.

By default js returns `undefined` if we don't return anything ourself. But ts returns `void` by default.

Typescript can also predict what will the type of the return of the function will be based on the operations we do inside the function.

### Lesson 7

Just like functions, we sometimes have to use the same types over and over again. which may lead to duplication of code. That's where type aliases comes in. We can create a alias and use it multiple times to reduce code duplication.

### Lesson 8

We can set-up the type of the parameters and return before declaring the function with function signatures.

### Lesson 9

We can create better signatures with class in typescript.

### Lesson 12

When working with interfaces we will face error when we pass an extra parameter. but if we pass on a extra property inside another object and pass the name of the object in the parameter instead of the object itself, it will not mind. But it will surely check for the ones that really needs. This is because javascripts pass by reference or something.

### Lesson 13

When we don't know what the type of a variable that's inside the interface we're building, we can use the <T> to take the type from the programmer that will use the interface in future.

### Lesson 14

Enums are set of prebuilt types. And when we use it, it returns the index of the type that we selected.

### Lesson 15

Tuples are just arrays that we can set type for each index. We can use all the array methods in tuples.

# Learning typescript with BootDev and Web Dev simplified.

## Chapter 1: Types

-   Typescript can automatically detect what the type of the variable is when assigning.

-   Typescript is less of a programming language and more of a linter to javascript.

-   Modifying a codebase is much easier in typescript because of the errors than javascript. Because js will not show any errors and the bugs will sometimes make it to production.

-   `tsc` or typescript compiler is a tool built by the typescript team to remove all the typescript code and make a few tweak and finally turning everything into plain javascript code.

-   The any type is kind of self explanatory. It tells typescript to skip all the type checking and let it just be a plain javascript variable.

## Chapter 2: Functions

-   In typescript, we can set the type of the parameters and the return. And if we don't return the type that we've set earlier it will show errors cause typescript can detect what the type of the return will be from the body of the function.

-   Explicit typing when we ourselves define what the function will return when writing that function.

    Meanwhile Implicit typing is when we let typescript decide what the type of the return will be based on what we do inside the functions body.

-   Both explicit and implicit types has their advantages. And it depends on the situation who this function will be used by. If you're the only person that'll use this function, then there's no need to explicitly type what the will return, but if there're multiple people working on the same codebase, then there's gonna be a problem and we should explicitly type what the return type will be.

-   If a function doesn't have a return value, then typescript will set the return type to `void`. We can provide the void return explicitly typed or let typescript implicitly decide what the return values type will be.

-   Function types/signatures are the type structure of what will be the type of the parameters and return value.

-   We can create predefined types for our variables. Make sure to write the in PascalCase.

-   When importing types created in another file, we should use `import type` syntax like this:

    ```
    import type { User, Post } from "./models";
    ```

    to reduce the bundle size.

# Chapter 3

-   Optional parameter has to always come the last in the parameters list.

-   If a parameter has a default value, it automatically becomes a optional parameter.

-   Literal types are a really useful feature of typescript. It lets us have strict values of a variables values can be.

    ```
    type buttonSize: "sm" | "md" | "lg";

    // We can also add all the regular types in here as well. So the possibilities are insane.
    ```

-   Another cool thing we can do inside typescript is to create template literals. How this work is, it'll create a something like a brute force with all the strict types that we got.

    ```
    type Class = "wizard" | "warrior" | "rogue";
    type Race = "elf" | "human" | "dwarf";
    type Hero = `Hero: ${Race} ${Class}`;
    // Hero: elf wizard | Hero: elf warrior | Hero: elf rogue | Hero: human wizard | Hero: human warrior | Hero: human rogue | Hero: dwarf wizard | Hero: dwarf warrior | Hero: dwarf rogue
    ```

-
