# Rust Reference

## Introduction

Rust is a blazing fast and memory-efficient static compiled language with a rich type system and ownership model.

The Extention of Python File is **.rs** .

### Contents

1. [Comments](#comments)

2. [Main Function](#main-function)

3. [Prelude and Crates](#prelude-and-crates)

4. [Variables](#variables)

5. [Print Macros](#print-macros)

6. [Console Input](#console-input)

7. [Datatypes](#datatypes)

   - [Scalar Datatypes](#scalar-datatypes)

   - [Compound Datatypes](#compound-datatypes)

   - [Other Datatypes](#other-datatypes)

8. [Type Casting](#type-casting)

9. [Conditional Statements](#conditional-statements)

10. [Iteration Statements](#iteration-statements)

11. [Functions](#functions)

12. [Generics](#generics)

13. [Closures](#closures)

14. [Memory Management](#memory-management)

    - [Copy Trait](#copy-trait)

    - [Ownership](#ownership)

    - [Borrowing](#borrowing)

    - [Slices](#slices)

15. [Structs](#structs)

16. [Traits](#traits)

17. [Smart Pointers](#smart-pointers)

18. [Modules](#modules)

19. [References](#references)

---

## Comments

Comments are Piece of Line in the Program that is Ignored by the Compiler or Interpreter.

```rs
// This is a Comment
```

---

## Main Function

Any Code that is written is placed within _main_ Function.

```rs
fn main() {
    let a:i32 = 1;
}
```

---

## Prelude and Crates

Prelude is list of Functionalities that are automatically imported in every Rust Program.

Example: Datatypes, Print Macros etc

Crates are packages or libraries of Rust.

To import crates, we use `use` Keyword.

```rs
// use crate::module
use std::io;
```

**( : : )** is a Path Seperator Operator.
It is used to import module from crates or Functions from Creates etc.

---

## Variables

`let` Keyword is used to Declare a Variable

The Scope of Variable is defined by the block of code in which it is declared.

```rs
let a = 4;
let b:u32;
```

All the Variables within Rust are Immutable by default.

This Behavior can be changed with the help of `mut` Keyword.

Once a variable is declared, it cannot be assigned any other Datatype.

```rs
let mut name = 1;
name = "Hellow"; // Throws Error
```

In Rust, a Variable of same name can be Declared and Used.

```rs
let x = 4;
let x = 5; // Completely Valid
let x = x + 1; // Completely Valid
```

Constant can be created with `const` Keyword.

While declaring a Constant, mentioning its type is also Essential.

Unlike Variables, Constants cannot be Redeclared with same name.

```rs
const CONSTANT_NUMBER:f64 = 3.14;
```

---

## Print Macros

print! or prinln! Macros is used to print on the Terminal or Console.

```rs
fn main() {
    print!("Hello World");
    println!("Hello World");
}
```

For Formating String, **{ }** can be used.

```rs
fn main() {
    let x = 5;
    println!("x: {}", x);
}
```

---

## Console Input

To take Input from user, we have to import _io_ from Standard Library

```rs
use std::io;

fn main() {
    println!("Enter your Name: ");
    let mut name = String::new(); // Creating a new String
    io::stdin()
        .read_line(&mut name) // Passing Mutable Reference of an Object
        .expect("Failed to Read Line."); // Handles Error
    println!("Hello, {}", name);
}
```

---

## Datatypes

Datatypes are of 2 Types:

### Scalar Datatypes

Scalar Datatypes is the Datatype with single Value.

1. Integer

   _i32_ is the Default in Integers.

   Although _i8_, _i16_, _i64_ and _i128_ is also available.

   _u8_, _u16_, _u32_, _u64_, _u128_ are the Datatypes for Unsigned Integers.

   ```rs
   let x:i32 = -200;
   let y:u32 = 670;
   ```

2. Floating Point

   _f32_, _f64_ are the Datatypes for Floating points.

   _f64_ is the Default in Floating Point.

   ```rs
   let x:f32 = -0.200;
   let y:f64 = 67.090;
   ```

3. Boolean

   _bool_ is the Datatypes for Boolean.

   ```rs
   let b:bool = true;
   ```

4. Character

   _char_ is the Datatypes for Character.

   ```rs
   let c:char = 's';
   ```

### Compound Datatypes

Compound Datatypes is the Datatype with Multiple Values.

1. Tuples

   It is a Fixed Length of Collection of Elements of Different Datatypes.

   ```rs
   let tup = (1, true, 3.14);
   ```

   The Elements of Tuples are Accesssed via their Index with the help of Dot Operator **( . )**.

   ```rs
   println!("Tuple: ({}. {}, {})", tup.0, tup.1, tup.2);
   ```

   The Values within the Tuple can be Changed with the help of Index.

   ```rs
   let mut tup: (i32, bool, f64) = (1, true, 3.14);
   tup.0 = 10; // Valid
   tup.1 = (10, false, 6.28); // Valid
   ```

2. Array

   It is a Collection of Elements of Same Datatypes.

   ```rs
   let arr = [1, 2];
   ```

   The Elements of Tuples are Accesssed via their Index with the help of Square Brackets **( [ ] )**.

   ```rs
   println!("Array: ({}. {}, {})", arr[0], arr[1]);
   ```

   The Values within the Tuple can be Changed with the help of Index.

   ```rs
   let mut arr: [i32; 2] = [1, 2];
   arr[0] = 10; // Valid
   arr = [10, 20]; // Valid
   ```

### Other Datatypes

1. String -> `String`

   There are 2 Types of Strings Datatypes.

   1. String

      - Dynamically allocated string.
      - is mutable
      - takes ownership

      ```rs
      let s_1 = String::new(); // Empty String
      let s_2 = String::from("Hello World");

      let s_3 = &s_2; // Converts to &str
      ```

   2. String Literals -> `&str`

      - Reference to a static string literal.
      - is immutable
      - Borrowed reference

      ```rs
      let s_4: &str = "Hello World";
      let s_5 = s_4.to_string(); // Converts to &str
      ```

2. Enums

We can create enums using the Keyword `enum`.

```rs
enum Day {
   Monday,
   Tuesday,
   Wednesday,
   Thursday,
   Friday,
   Saturday,
   Sunday,
}
```

We can create Custom Functions for enums using `impl` Keyword. The Name given after _impl_ should be the same as the name of Enum.

```rs
impl Day {
   fn is_weekend(&self) -> bool {
      match self {
         Day:: Saturday | Day:: Sunday => true,
         _ => false,
      }
   }
}

let today:Day = Day::Monday;
println!("Result: {}", today.is_weekend());
```

---

## Type Casting

No operations can be performed between 2 Different Datatypes in Rust. Hence, typcasting is required.

Typecasting is Converting a Variable from One Datatype to another.

There are Multiple Ways for Type Conversion.

We can Specify type during the Declarations.

```rs
let x: i8 = 9;
let x = 9i8;
let x = 9_i8;
let x = 9 as i8;
```

All of them Produce the same Output.

During Arithmetic Operations, `as` Keyword can be Used.

```rs
let x = 64;
let y = 64.0;
let z = (x as f32) + y;
```

While accepting an input from Console, we need to convert String to Integer.

_trim_ Function removes Null Character at the End of String.

_parse_ Function Returns a Integer.

_unwrap_ Function unwraps the result to Correct Datatype.

```rs
let mut str = String::new();
println!("Enter a Number: ");
io::stdin()
   .read_line(&mut str)
   .expect("Unable to Fetch Input");

let number: i32 = str.trim().parse().unwrap();
```

---

## Conditional Statements

1. If Statment

   ```rs
   if string == 'Hello' {
      println!("World")
   }
   ```

2. If-Else Statment

   ```rs
   if age > 18 {
      println!("Eligible")
   } else {
      println!("Not Eligible")
   }
   ```

3. If-Else Ladder

   ```rs
   if age == 18 {
      println!("I Dont know")
   } else  if age > 18 {
      println!("Eligible")
   } else {
      println!("Not Eligible")
   }
   ```

4. Match Statement

   ```rs
   match age {
      1..=18 => println!("Important Birthday"),
      20 | 26 => println!("Very Important Birthday"), // OR Operation
      _ => println!("Not Important"), // Default Statement
   };
   ```

   Comparing 2 Values using Match

   ```rs
   let user_age = 16;
   let eligible_age = 16;

   match user_age.cmp(&eligible_age) {
      Ordering::Less => println!("cant Vote"),
      Ordering::Equal => println!("I Dont Know"),
      Ordering::Greater => println!("can Vote"),
   }
   ```

---

## Iteration Statements

```rs
let arr = [1, 2, 3, 4, 5];
let mut i = 0;
```

1. Loop Statement

   ```rs
   loop {
      if i != arr.len() {
         print!("{} ", arr[i]);
         i += 1;
      } else {
         break;
      }
   }
   ```

2. While Statement

   ```rs
   while i < arr.len() {
      print!("{} ", arr[i]);
      i += 1;
   }
   ```

3. For Statement

   ```rs
   for val in arr {
      print!("{} ", val);
   }
   ```

---

## Functions

The Naming Conventions in Rust are Prefered to be Snake case.

The Function can be declared with the help of `fn` Keyword.

```rs
fn main() {
   test_one();
}

fn test_one() {
   println!("Funtion Test 1");
}
```

Function can accept Arguments to further be used in the Code.

```rs
fn adder(x: i32, y: f64) {
   println!("The Sum is {}", ((x as f64) + (y));
}
```

Function is capable of returning a Value that can be further used in the Code.

```rs
fn adder(x: i32, y: f64) -> f64 {
   (x as f64) + y // Returning a Value (`;` should not be used.)
   // or
   return (x as f64) + y;
}
```

We can Pass a Variable as a Reference to a Function.

```rs
let arr = [1, 2, 3, 4, 5];
let sum = list_adder(&arr);

fn list_adder(list: &[i32]) -> i32 {
   let mut sum = 0;
   for val in list {
      println!("{}", val);
      sum += val;
   }
   sum
}
```

---

## Generics

Generics are used to Support Unknown Datatypes or to Assign Datatypes during Runtime.

Generics are usually Contained within **< >**.

Any Name can be Assigned to a Datatype within Generics such as T, U, V etc.

```rs
use std::ops::Add;

fn get_sum_gen<T: Add<Output = T>>(x: T, y: T) -> T {
   x + y
}
```

---

## Closures

Closures are the Functions without Name. They are similar to the Arrow Function in Javascript.

We pass the Parameters to our Closures within **| |**.

```rs
let can_vote = |age: i32| {
   age>=18
}
```

The Special thing about Closures are it can access the Variables outside its Scope unlike Functions.

```rs
let a = 5;

let print_val = || println!("Variables: {}", a);

print_val();
```

It is also capable of changing the Mutable Variables.

```rs
let mut a = 5;

let change_val = || a+=10;

change_val();
```

Closures can also be Passed as Arguments to the Functions.

```rs
fn use_function<T>(a:i32, b:i32, func: T) -> i32 where T: Fn(i32, i32) -> i32 {
   func(a,b)
}

let sum = |a:i32, b:i32| a+b;
let prod = |a:i32, b:i32| a*b;

println!("5 + 4 = {}", use_function(5, 4, sum))
println!("5 x 4 = {}", use_function(5, 4, prod))
```

---

## Memory Management

There are 2 Aprts of Memory:

1. Stack:

   - Stores Values in a LIFO Format.
   - The Data stored must be of Fixed Size.

2. Heap:
   - Request must be sent to OS for certain amount od Space in memory to store the Data in Heap.
   - The OS finds the space available and returns the Address of that space as Pointer.

### Copy Trait

The Scalar Datatypes usually have a _Copy Trait_ whereas the other Datatype does not have it.

The Datatypes which does not have Copy Trait are called _Non-Trivial Type_.

### Ownership

In Rust, when a Variable that are of Non-Trivial type is Copied to another variable, the former one gets Deallocated. This is Called _Move_.

This Property is Known as _Ownership_.

There are 3 rules to be Followed in Rust in terms of Ownership:

1. Each value in Rust has a variable that's called its Owner.
2. There can only be one Owner at a time.
3. When a owner goes out of Scope, the value will be Dropped.

When one variable is Copied to Another, ownership of the heap-allocated Varible is transferred from former to latter.

```rs
let s_1 = String::from("Hello");
let s_2 = s_1; // Throws Error
let s_2 = s_1.clone();
println!("{}", s_1);
```

When a Non-Trivial type is passed as Argument to a Function, it is moved to the Function rather than sending a Copy.

```rs
fn new_fn(s: String) {
   println!("{}", s);
}

let s = String::from("Hello");
new_fn(s);
println!("{}", s); // Throws Error
```

### Borrowing

To Negate this Behavior, we use References. We can add References using `&`. This is Called _Borrowing_.

There are 2 rules to be Followed in Rust in terms of Borrowing:

1. At a Given time, one can only have 1 Mutable Reference or any number of Immutable References.
2. References must always be Valid.

Also, When the Variable is Borrowed, it is Immutable by Default.

```rs
fn new_fn(s: &String) {
   println!("{}", s);
}

let s = String::from("Hello");
new_fn(&s);
println!("{}", s); // Fixes Error
```

In order to Add Mutability without taking the Ownership, we use `mut` Keyword.

The Keynote is that there can only be a Single Mutable Reference to a Variable in a Particular Scope.

```rs
let s = String::from("Hello");
let r1 = &mut s;
let r2 = &mut s; // Throws Error
```

Also, a Mutable Reference cannot exist until when there is already a Mutable References.

```rs
let s = String::from("Hello");
let r1 = &s;
let r2 = &mut s; // Throws Error
```

### Slices

We can add Reference to Only few Parts of a Non Trival Datatype.

```rs
let mut s = String::from("Hello World");
let hello = &s[..5];
let hello = &s[6..];
```

---

## Structs

Struct is a Custom Datatype that is capable of Storing Multiple different types of Data.

```rs
struct Customer {
   name: String,
   address: String,
   balance: f32
}
```

A Variable can be Assigned the Datatype of the Created Struct.

```rs
let mut bob = Customer {
   name: String::from("Bob"),
   address: String::from("555 Main St")
   balance: 234.56
};

bob.address = String::from("505 Main Street");
```

Struct can also implement Function using `impl` Keyword.

```rs
impl Customer {
   fn print_details() {
      println!("{} : {}")
   }
}
```

Structs also Support Generics.

```rs
struct Rectangle<T, U> {
   length: T,
   breadth: U
}

let r = Rectangle{
   length: 4,
   breadth: 10.5
}
```

---

## Traits

Traits are Interfaces which consists of Function Declarations that can be Used by the any Structs.

```rs
trait Shape {
   fn new(length: f32, width: f32) -> Self;
   fn area(&self) -> f32;
}
```

Traits can be Implemented by Structs.

```rs
struct Rectangle {
   length: f32,
   width: f32,
}


impl Shape for Rectangle {
   fn new(length: f32, width: f32) -> Rectangle {
      return Rectangle { length, width };
   }

   fn area(&self) -> f32 {
      return self.length * self.width;
   }
}
```

This way, we can implement Interfaces for Structs in Rust.

---

## Smart Pointers

Smart Pointers are variables which holds the Address to the Location of the Value of Another Variable.

Smart Pointers are used using **&**.

Box is a pointer stores the Data on Heap rather than Stack.

Box can be created using _Box_ Module.

```rs
let bsp = Box::new(10);
println!("{}", bsp);
```

Box can be Understood while creating a Tree Node.

```rs
struct TreeNode<T> {
   pub left: TreeNode<T>,
   pub right: TreeNode<T>,
   pub key: T
}
```

This emits Erros as left and right Cannot be assigned Null Values but has have Null values at Some point.

Using Box Smart Pointer, we can use Null Values

```rs
struct TreeNode<T> {
   pub left: Option<Box<TreeNode<T>>>,
   pub right: Option<Box<TreeNode<T>>>,
   pub key: T
}
```

This is how Box can be Implemented during Assignment.

```rs
impl<T> TreeNode<T> {
   pub fn new(key: T) -> Self {
      TreeNode {
         left: None,
         right: None,
         key,
      }
   }

   pub fn add_left(mut self, node: TreeNode<T>) -> Self {
      self.left = Some(Box::new(node))
      self
   }
}
```

---

## Modules

Modules are used to Bifurcate Codes.

The Modules can be Created by Creating a Directory within a **_src_** _Directory_ and a file Named _mod.rs_ within it.

The File starts with the keyword of `mod` to represent module.

The keyword `pub` is used to make anything within a Module Public.

A Module can have another Submodule within it.

A Keyword `super` is used to access the Base Module from Sub Module.

To access the Modules, we use the keyword `crate`.

```rs
// mod.rs file within resaurant Directory

mod pizza_order {
   pub struct Pizza {
      pub dough: String,
      pub cheese: String,
      pub toppings: String
   }

   impl Pizza {
      pub fn lunch(topping: &str) -> Pizza {
         Pizza {
            dough: String::from("Regular"),
            cheese: String::from("Mozzarella"),
            toppings: String::from(topping)
         }
      }
   }

   pub mod help_customer {
      fn seat_at_table() {
         println!("Customer Seated at Table!");
      }

      pub fn take_order() {
         seat_at_table();
         let customer_pizza: super::Pizza = super::Pizza::lunch("Veggies");

         serve_customer(customer_pizza);
      }

      fn serve_customer(pizza: super::Pizza) {
         println!("The Customer is Served a Pizza with {} Topping", pizza.topping);
      }
   }
}

pub fn order_food() {
   crate::resaurant::pizza_order::help_customer::take_order()
}
```

To use the Function in _main.rs_ file, we need to use keywords `use` and `mod`.

```rs
// main.rs

mod restaurant;
use crate::restaurant::order_food;

fn main() {
   order_food();
}
```

---

## References

1. [Rust Cheetsheet](https://docs.google.com/document/d/1kQidzAlbqapu-WZTuw4Djik0uTqMZYyiMXTM9F21Dz4/edit?lid=69165&pli=1#heading=h.gjdgxs) - _Lets Get Rusty_

---
