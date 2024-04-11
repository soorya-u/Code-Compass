# TypeScript Reference

## Introduction

TypeScript is SuperScript of JavaScript with a TypeCheck Ability.

The Extension of TypeScript File is **.ts** .

It warns about the Errors which are usually found during Runtime in Javascript.

### Contents

1. [Datatypes Assignment](#datatypes-assignment)

2. [TypeScript Datatypes](#typescript-datatypes)

   - [Any](#any)

   - [Arrays](#arrays)

   - [Tuple](#tuple)

   - [Enums]($enums)

3. [Functions](#functions)

4. [Objects](#objects)

5. [Type Keyword](#type-keyword)

6. [Multiple Datatypes](#multiple-datatypes)

   - [Union Types](#union-types)

   - [Insertion Types](#intersection-types)

   - [Literal Types](#literal-types)

   - [Nullable Types](#nullable-types)

7. [Optional Chaining](#optional-chaining)

   - [Optional Property Access Operator](#optional-property-access-operator)

   - [Optional Element Access Operator](#optional-element-access-operator)

   - [Optional Call](#optional-call)

8. [Extras](#extras)

   - [Execution](#execution)

9. [References](#references)

---

## Datatypes Assignment

The Decleration of variable should include the Datatype of the Variable.

> **Syntax: state_of_variable variable_name : variable_datatype = value;**

State of Variables are `let`, `const` or `var`

```ts
let a: number;
let b: number = 15;

b = "Hello World"; // Statement Throws Error as String cant be Assigned to Number Datatype.
```

Typescript Automatically Assigns the datatype when the variable is Initialized.

```ts
let c = "String"; // c is Automatically set to String
```

JavaScript Datatypes:

- number
- string
- boolean
- null
- undefined
- object

The Long Numbers can be seperated by underscores **( \_ )** for easier Reading.

```ts
let n: number = 123_456_890;
console.log(n);
```

Other Examples:

```ts
let str: string = "Hello World";
console.log(str);

let stat: boolean = true;
console.log(stat);
```

---

## TypeScript Datatypes

The Datatypes of TypeScript are: any,unknown,never,enum,tuple

### Any

When a Variable is Declared without initializing or specifying its datatype, the Variable automatically becomes Any Datatype.

```ts
let v; //v is Automatically set to Any Datatype. This brings back the Features of Javascript.
```

The Function throws Error when the parameters belongs to Any Datatype Implicitely.

In order to remove the Error, we have to explicitly specify that it belongs to Any Datatype.

```ts
function f(doc: any) {
  console.log(doc);
}
```

### Arrays

In TypeScript, Array can hold variables of a similar datatypes.

An Empty Array is Automatically Set to Any Datatype.But it can be set to any Datatype.

> **Syntax: state_of_array array_name : element_type[] = [element1,element2,....,element n];**

```ts
let arr: number[] = [0, 9];

console.log(arr[0]);
console.log(arr[1]);
```

### Tuple

Tuple is Similar to Array but has Fixed Elements and its Datatypes.

Tuple is concept of Typescript, so after transpiling, the Tuple becomes a regular Array.

> **Syntax: state_of_tuple tuple_name : [element1_type,element2_type,....,element_n_type] = [element1,element2,.....element n];**

```ts
let t: [string, number] = ["Alex", 1];

console.log(t[0]);
console.log(t[1]);
```

### Enums

Enum is similar to Array but the Values will be Assigned Automatically or can be Assigned Manually.

> **Syntax: enum enum_name = {'{element1=value1,element2=value2,....,element_n=value_n}'};**

```ts
enum letters {
  a,
  b,
  c,
}

let myLetters: letters = letters.b;
console.log(myLetters);
```

a=0 and b=1 and so on.

A custom number can be assigned to a and the next elements will be incremented by 1.

The Elements can be set to other Datatypes too but there will not be any Incrementation.

---

## Functions

Typescript prefers to specify the Datatype of Parameters as Well as Return type of a function.

> **Syntax: function function_name(parameter1:datatype,...,parameter_n:datatype): return_type{'{...}'}**

Sometime we need to ignore few Parameters.

In that case, a Question Mark **( ? )** can be used at the end of that variable to indicate it.

When the parameter is not passed,it becomes undefined causing errors.

There are 2 Ways to Solve it.

- To use OR Operator **( || )**

  ```ts
  function calcTax(income: number, multiplier?: number): number {
    return income * (1 / (multiplier || 2));
  }
  ```

- To set a Default Value to Parameter

  ```ts
  function calcTax1(income: number, multiplier: number = 2): number {
    return income * (1 / multiplier);
  }
  ```

In Javascript, even though the parameters of the Function is two,it can accept more than 2 parameters.

But in Typescript, it strictly accepts only 2 Parameters

```ts
let tax = calcTax(50_000);
console.log(tax);

tax = calcTax1(50_000);
console.log(tax);

tax = calcTax(50_000, 5);
console.log(tax);

tax = calcTax1(50_000, 5);
console.log(tax);

tax = calcTax(50_000, 5, 30);
console.log(tax); // Error

tax = calcTax1(50_000, 5, 30);
console.log(tax); // Error
```

---

## Objects

> **Syntax: let object_name:{'{key1:value1_datatype,..,key_n:value_n_datatype}'}={'{key1:value1,..,key_n:value_n}'}**

All the Value Datatypes can be Specified Explicitely.

Initialization of Keys can be ignored just by adding Question Mark **( ? )** in front of the key.

`readonly` Keyword can be used to make a key similar to that of Constant.

Datatypes of Functions can be Used in object like an Arrow Function.

```ts
let student: {
  readonly id: number;
  name: string;
  brain?: boolean;
  admissionDate: (date: Date) => void;
} = {
  id: 1,
  name: "Bob",
  admissionDate: (date: Date) => {
    console.log(date);
  },
};

student.brain = false;
console.log(student);
```

---

## Type Keyword

Type is basically a blueprint of a Object. It specifies the Keys and the Datatype of its Value pairs.

> **Syntax: type type_name={'{key1:value1_datatype,..,key_n:value_n_datatype}'}**

```ts
type employee = {
  readonly id: number;
  name: string;
  dateOfRetire: (date: Date) => void;
};

let emp1: employee = {
  id: 1,
  name: "Bob",
  dateOfRetire: (date: Date) => {
    console.log(date);
  },
};
```

## Multiple Datatypes

### Union Types

When a Variable has 2 or more Datatype but can act as only one, it is called Union Type.

Union Types can be assigned using Vertical Bar **( | )**

The Union Type Variable cannot access built in function of all the Datatype at same time.

> **Syntax: variable_state variable_name: datetype1 | datatype2 | ... | datatype_n;**

```ts
let kgToLbs = (weight: number | string) => {
  if (typeof weight === "number")
    return (
      weight * 2.2 /* All the Built-in Function for Number is Available here. */
    );
  else
    return (
      parseInt(weight) * 2.2
    ); /* All the Built-in Function for String is Available here. */
};

console.log(kgToLbs(10));
console.log(kgToLbs("10"));
```

### Intersection Types

When a Variable has 2 or more Datatype but can act as both at same time, it is called Intersection Type.

Intersection Types can be assigned using Ampersand **( & )**.

The Intersection Type Variable can access built in function of all the Datatype at same time.

> **Syntax: variable_state variable_name: datetype1 & datatype2 ... & datatype_n;**

```ts
type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

let UIWidget: Draggable & Resizable;
```

### Literal Types

Assigns the Specific Value as datatype.

> **Syntax: variable_state variable_name: value1|value2|....|value_n;**

```ts
type option = 1 | 2 | 3 | false | "s";
let choice: option;
// choice Variable can only be assigned 1,2,3,false or 's'.

let metric: "cm" | "m";
// metric can only be assigned 'cm' or 'm'.
```

### Nullable Types

The types such as null and undefined can be used for functioning as well.

```ts
let ud: undefined;
let nu: null;
```

---

## Optional Chaining

### Optional Property Access Operator

It is used to check whether the Entered Value gives Null or Undefined.

The Operator is Question Mark followed by Period Operator **( ?. )**.

_Example:_

```ts
type Customer = {
  birthday?: Date;
};
function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
```

The Birthday can be Null as it is an Optional Key which may or maynot be Passed.

Similarly if the condition 0 is satisfied, the getCustomer function may return null.

In order to check it, we use Optional Property Access Operator.

```ts
console.log(customer?.birthday?.getFullYear);
```

The Above Statement is same as:

```js
if (customer != null || customer != undefined) {
  if (customer.birthday != null || customer.birthday != undefined) {
    console.log(customer.birthday.getFullYear);
  }
}
```

### Optional Element Access Operator

It is Similar to the Optional Element Access Operator but it used on Array Elements.

```ts
let arra = [1, 2, 3];
console.log(arra?.[0]);
```

This is the same as:

```js
if (arra != null || arra != undefined) console.log(arra[0]);
```

### Optional Call

It is Similar to the Optional Element Access Operator but it used on Function Call.

It calls the function only if the function is a valid function.

```ts
let func: any = null;
func?.(2);
```

This is same as:

```js
if (func != null || func != undefined) func(2);
```

---

## Extras

### Execution

TypeScript can be executed in Terminal using **TypeScriptCompiler** or **tsc** .

The Command in Terminal is:

```bash
tsc fileName.ts
```

---

## References

1. [_Official TypeScript Documentation_](https://www.typescriptlang.org/docs/handbook/)

---
