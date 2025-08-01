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
