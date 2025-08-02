Learning Typescript with [Sumit Saha](https://www.youtube.com/playlist?list=PLHiZ4m8vCp9PgOOjdyNpc6AoBmKNrp_u3)

# Lesson 2

So the `tsc` command will take my typescript file and create a new js file containing the translated to javascript version of the typescript code i've written in the ts file.
sounds kinda complicated but i suppose its due to my poor language skills.

The `tsconfig` is a vast config file. We can control many things with it. Like where our ts files are located and where the compiled js files should be etc.

Since we've configured where our ts files are located, from now on we don't have to provide the file name after the `tsc` command. We now just have to type the `tsc` command.

Typing `tsc` everytime is tough. So we just have to enable the `tsc -w` watch flag. which will compile all the ts files right after we save it.

# Lesson 3

When we declare and assign a value to a variable at the same time, the type of the value becomes the type of the variable. And if we try to assign another type of value to that variable, it shows error. Because typescript is smart.

But if we just declare the variable not assign anything then typescript sets the type to `any` which results in assigning to any type of value in future.

Same thing happens with objects and arrays as well. if we try to put a different type to a arrays element or a objects property than the one that got firstly set by typescript, we gonna get error.

# Lesson 4

When defining objects and arrays we can set the type of each property or which types of elements the array will contain.

# Lesson 5

When we declare a variable it is set to any by default. or we can also explicitly set `: any` to the variable. But its not a good practice since the point of using typescript is to prevent this behavior.

# Lesson 6

When defining functions we have to use the type `Function`. Now, the reason its capitalized is cause the word `function` is a keyword in javascript. just like `String`. that's why, to prevent collision typescript uses `Function`, `string` etc.

To make an optional parameter we have to use `?:` instead of just `:` before setting the type.

We can also set a default value of a parameter by using `=` after it. Tho its a javascript feature I really forgot about it and thought worth mentioning.

By default js returns `undefined` if we don't return anything ourself. But ts returns `void` by default.

Typescript can also predict what will the type of the return of the function will be based on the operations we do inside the function.

# Lesson 7

Just like functions, we sometimes have to use the same types over and over again. which may lead to duplication of code. That's where type aliases comes in. We can create a alias and use it multiple times to reduce code duplication.

# Lesson 8

We can set-up the type of the parameters and return before declaring the function with function signatures.

# Lesson 9

We can create better signatures with class in typescript.

# Lesson 12

When working with interfaces we will face error when we pass an extra parameter. but if we pass on a extra property inside another object and pass the name of the object in the parameter instead of the object itself, it will not mind. But it will surely check for the ones that really needs. This is because javascripts pass by reference or something.

# Lesson 13

When we don't know what the type of a variable that's inside the interface we're building, we can use the <T> to take the type from the programmer that will use the interface in future.

# Lesson 14

Enums are set of prebuilt types. And when we use it, it returns the index of the type that we selected.

# Lesson 15

Tuples are just arrays that we can set type for each index. We can use all the array methods in tuples.
