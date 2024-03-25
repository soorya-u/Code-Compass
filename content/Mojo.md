# Mojo Reference

## Introduction

Mojo is a compiled programming language that combines the Python syntax with systems programming and metaprogramming.

The Extention of Python File is **.mojo** .

### Contents

1. [Main Function](#main-function)

2. [Syntax](#syntax)

3. [Variables](#variables)

4. [Functions](#functions)

   - [Optional arguments and Keyword arguments](#optional-arguments-and-keyword-arguments)
   
   - [Argument Mutability and Ownership](#argument-mutability-and-ownership)

5. [Structures](#structures)

6. [Python Integration](#python-integration)

7. [Extras](#extras)

    - [Execution](#execution)

    - [Building an Executable](#building-an-executable)

8. [References](#references)

---

## Main Function

Like other compiled languages, Mojo programs require a `main()` function as the entry point to the program.

```mojo
fn main():
    print("Hello World")
```

---

## Syntax

Mojo supports all of Python’s syntax and semantics.

Mojo uses line breaks and indentation to define code blocks.

Mojo supports all of Python’s control-flow syntax such as `if` conditions and `for` loops.

---

## Variables

Variables are declared using `let` and `var` Keyword.

`var` is used to create a mutable value while `let` is used to create an immutable value.

Also variables may have an explicit Type specification.

Type specification is not required within Function Definition.

```mojo
var y = 2

let x: Int
let y = 2 # No Type Specification for Assigned Variables
```

---

## Functions

Mojo functions can be declared with either `fn` or `def`.

The `fn` declaration enforces strongly-typed and memory-safe behaviors, while `def` provides Python-style dynamic behaviors.

Type specification are required for arguments and return values for an `fn` function.

```mojo
fn add(x: Int, y: Int) -> Int:
    return x + y
```

### Optional arguments and Keyword arguments

Default values can be specified to an argument.

Also the Argument values can be passed with keyword argument names.

```mojo
fn pow(base: Int, exp: Int = 2) -> Int:
    return base ** exp

z = pow(3) # Optional Argument

z = pow(exp=3, base=2) # Keyword Argument
```

### Argument Mutability and Ownership

Mojo allows you to share references to values (instead of making a copy every time you pass a value to a function).

This Feature is Implemented with the help of ownership rules.

1. `borrowed` Keyword

   The functions cannot modify the Arguments because `fn` arguments are immutable references by default.

   This is called _borrowing_ and it is the default for fn functions.

   ```mojo
   fn add(borrowed x: Int, borrowed y: Int) -> Int:
       x += 1 # Throws Error
       y += 1 # Throws Error
       return x + y
   ```

2. `inout` Keyword

   If the arguments should be mutable, you need to declare each argument convention as `inout`.

   This means that changes made to the arguments inside the function are visible outside the function.

   ```mojo
   fn add_inout(inout x: Int, inout y: Int) -> Int:
       x += 1
       y += 1
       return x + y

   fn main():
       var a = 1
       var b = 2
       let c = add_inout(a, b)
       print(a) # Values are Incremented
       print(b) # Values are Incremented
       print(c)
   ```

3. `owned` Keyword

   Declare the argument as `owned` provides the function full ownership of the value.

   This means the function can modify the value and not worry about affecting variables outside the function.

   ```mojo
   fn add_owned(owned x: Int, owned y: Int) -> Int:
       x += 1
       y += 1
       return x + y

   fn main():
       var a = 1
       var b = 2
       let c = add_owned(a, b)
       print(a) # Values remains Same
       print(b) # Values remains Same
       print(c)
   ```

4. _transfer operator_

   The function can be given ownership of the value without making a Copy.

   This can be done with the help of `^` _transfer operator_.

   The _transfer operator_ effectively destroys the local variable after passing to the Function.

   ````mojo
   fn add_owned(owned x: Int, owned y: Int) -> Int:
       x += 1
       y += 1
       return x + y

   fn main():
       var a = 1
       var b = 2
       let c = add_owned(^a, ^b)
       print(a) # Throws Error
       print(b) # Throws Error
       print(c)
   ```
   ````

---

## Structures

A `struct` in Mojo is similar to a `class` in Python.

They both support methods, fields, operator overloading, decorators for metaprogramming, etc.

Mojo structs are completely static i.e they are bound at compile-time.

```mojo
struct MyPair:
    var first: Int
    var second: Int

    fn __init__(inout self, first: Int, second: Int):
        self.first = first
        self.second = second

    fn dump(self):
        print(self.first, self.second)

let mine = MyPair(2, 4)
mine.dump()
```

---

## Python Integration

Mojo has Mechanisms to import Python modules as-is and can be run right away.

Under the hood, this mechanism uses the CPython interpreter to run Python code.

```mojo
from python import Python

let np = Python.import_module("numpy")

ar = np.arange(15).reshape(3, 5)
print(ar)
print(ar.shape)
```

---

## Extras

### Execution

The Command in Terminal is:

```bash
mojo fileName.py
```

## Building an Executable

A stand-alone executable can be buit with the `build` command in the Terminal.

The executable runs on your system like any C or C++ executable.

```bash
mojo build fileName.mojo -o executableName
```

---

## References

1. [_Official Mojo Documentation_](https://docs.modular.com/mojo/manual/basics/)

---