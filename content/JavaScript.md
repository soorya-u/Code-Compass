# JavaScript Reference

## Introduction

JavaScript is a Dynamically Programming Language used in both Frontend and Backend Development.

The Extension of Javascript File is **.js** .

### Contents

1. [Javascript Environment](#javascript-environment)

   - [Javascript in HTML](#javascript-in-html)

   - [Javascript File](#javascript-file)

2. [Comments](#comments)

3. [JavaScript Console API](#javascript-console-api)

4. [Variables and Datatypes](#variables-and-datatypes)

   - [Primitive Datatypes](#primitive-datatypes)

     - [Numbers](#numbers)

     - [String](#string)

     - [Symbols](#symbols)

     - [Booleans](#booleans)

     - [Undefined](#undefined)

     - [Null](#null)

   - [Reference Datatypes](#reference-datatypes)

     - [Objects](#objects)

     - [Arrays](#arrays)

   - [Alternatives of Variable](#alternatives-of-variable)

     - [Constant](#constant)

     - [Let](#let)

5. [Operators](#operators)

   - [Arithmetic Operators](#arithmetic-operators)

   - [Assignment Operators](#assignment-operators)

   - [Comparision Operators](#comparision-operators)

   - [Logical Operators](#logical-operators)

6. [Functions](#functions)

   - [Arrow Functions](#arrow-functions)

7. [Conditional Statements](#conditional-statements)

   - [Simple If Statement](#simple-if-statement)

   - [If-Else Statement](#if-else-statement)

   - [If-Else Ladder](#if-else-ladder)

8. [Iterative Statements](#iterative-statements)

   - [For Loop](#for-loop)

   - [Using Array Function](#using-array-function)

   - [While Loop](#while-loop)

   - [Do While Loop](#do-while-loop)

9. [Jump Statements](#jump-statements)

   - [Break Statement](#break-statement)

   - [Continue Statement](#continue-statement)

10. [Array Methods](#array-methods)

    - [Length](#length---array)

    - [Pop](#pop---array)

    - [Push](#push---array)

    - [Shift](#shift---array)

    - [Unshift](#unshift---array)

    - [To String](#tostring---array)

    - [Sort](#sort---array)

11. [String Methods](#string-methods)

    - [Length](#length---string)

    - [IndexOf](#indexof---string)

    - [LastIndexOf](#lastindexof---string)

    - [Slice](#slice---string)

    - [Replace](#replace---string)

12. [Date - InBuilt Module](#date---inbuilt-module)

    - [Methods of Dates](#methods-of-date)

13. [DOM Manipulation](#document-object-model-dom-manipulation---client-side-js)

    - [Methods of DOM Manipulation](#methods-of-dom-manipulation)

14. [Events](#events---client-side-js)

    - [Window/Webpage Events](#function-that-is-called-when-the-website-is-loaded)

    - [Events assigned in HTML](#function-that-is-called-when-button-is-clicked)

    - [Element Events](#function-executed-when-an-event-is-triggered-in-the-divisionid-of-div)

15. [Set Timeout](#set-timeout)

16. [Set Interval](#set-interval)

17. [Local Storage](#local-storage---client-side-js)

18. [JSON](#json---java-script-object-notation)

19. [Template Literals](#template-literals)

20. [Extras](#extras)

    - [Execution](#execution)

21. [References](#references)

---

## Javascript Environment

JavaScript can be written either in a New File or within HTML code.

### Javascript in HTML

You can create a **.html** file and write Javascript Code inside it.The Code of JavaScript is always written inside `<script>` tag.

`<script>` tag is recommended to be placed just above the closing body tag because it is easy to check the working of the website.

```html
<script>
  // Code Here...
</script>
```

### Javascript File

JavaScript file can later be imported to the HTML code.

```html
<script src="sample.js"></script>
```

## Comments

Comments are Piece of Line in the Program that is Ignored by the Compiler or Interpreter.

```js
// is used to add comment in javascript
/*
You can add 
multiline Comment
as well
*/
```

---

## JavaScript Console API

Console can be accessed by rightclicking and selecting inspect element in any Website.

`console.log()` is used to print in the console.
_Example:_

```js
console.log("Hello World");
console.log(4 + 6);
console.log(10 - 5);
```

`console.warn()` is used to throw a Warning.

```js
console.warn("This is a Warning");
```

`console.error()` is used to throw a Error.

```js
console.error("This is an Error");
```

`console.clear()` is used to clear everything in the console.

```js
console.clear();
```

`console.assert()` is used to check if the condition is true or not.

```js
console.assert(2 + 2 == 4);
console.assert(2 + 2 == 5);
```

---

## Variables and Datatypes

Variables are containers to store data values.
We use the keyword `var` in order to declare a variable.We do not have to specify the datatype of variable.

You can also find a variable's datatype by using `typeof()` funtion.

> **Syntax: typeof(variable_name)**

_Example:_

```js
var x = "1";
console.log(typeof x);
```

There are 2 types of datatypes:

1. Primitive Datatypes
2. Reference Datatypes

### Primitive Datatypes

1. #### Numbers

   ```js
   var num1 = 55;
   console.log(num1);

   var num2 = 21.98;
   console.log(num2);
   ```

2. #### String

   ```js
   var str1 = "This is string 1";
   var str2 = "This is string 2";

   console.log(str1);
   console.log(str2);

   console.log(str1, str2);
   ```

3. #### Symbols

   ```js
   Symbol();
   ```

4. #### Booleans

   ```js
   var a = true;
   var b = false;

   console.log(a);
   console.log(b);
   ```

5. #### Undefined

   Any variable which is not assigned with anything becomes undefined.

   ```js
   var und;
   console.log(und);
   ```

6. #### Null

   It was created to differentiate undefined

   ```js
   var n = null;
   console.log(n);
   ```

### Reference Datatypes

1. #### Objects

   ```js
   var marks = {
     Bob: 34,
     John: 58,
     Bobby: 97,
   };

   console.log(marks);
   ```

2. #### Arrays

   Index(counting) of array always starts from 0

   ```js
   var arr = [70234, "Hello bro", 3453, 4345, 4535];

   console.log(arr);
   console.log(arr[1]);
   console.log(arr[0]);
   console.log(arr[3]);
   ```

### Alternatives of Variable

1. #### Constant

   The value of variable can never be changed.

   ```js
   const z = 100;

   //Throws error
   z++;
   //Throws error
   z = z - 1;

   console.log(z);
   ```

2. #### Let

   It is a datatype whose scope is only inside curly braces or a function.It is used for memory management.

   ```js
   function add() {
     let j;
     j = 15;
     return j;
   }

   console.log(add());
   //Throws Error
   console.log(j);
   ```

---

## Operators

Operators are used to perform operation on 2 variables of same datatype.

1. ### Arithmetic Operators

   _Example:_ **\+** , **\-** , **\*** , **\/** , **\%**

   ```js
   a = 100;
   b = 12;

   console.log("The Sum of a and b is", a + b);
   console.log("The Difference of a and b is", a - b);
   console.log("The Product of a and b is", a * b);
   console.log("The Quotient of a and b is", a / b);
   console.log("The Reminder of a and b is", a % b);
   ```

2. ### Assignment Operators

   _Example:_ **\+\=** , **\-\=** , **\*\=** , **\/\=**

   ```js
   var c = a;
   c += b; //c = c+b
   c -= 13; //c = c-13

   console.log(c);
   ```

3. ### Comparision Operators

   _Example:_ **==** , **&lt;** ,**>** , **&lt;=** , **>=** , **!=**

   ```js
   console.log(c == a);
   console.log(c < a);
   ```

4. ### Logical Operators

   _Example:_ **&&** , **||** , **!**

   ```js
   console.log(true && false);
   console.log(true || false);
   console.log(!true);
   console.log(!false);
   ```

---

## Functions

Functions are used to repeat the same part of code whenever required.

```js
function avg(x, y) {
  return (x + y) / 2;
}

console.log(avg(3, 5));
console.log(avg(15, 45));
```

### Arrow Functions

```js
function sum(m, n) {
  return m + n;
}
```

The Above function can also be written as

```js
sum = (p, q) => {
  return p + q;
};
```

---

## Conditional Statements

Conditional statements are used to run a piece of code upon passing certain requirements.

```js
var age = 17,
  h = 10,
  num = 5;
```

1. ### Simple If Statement

   ```js
   if (h == 10) {
     console.log("Hello");
   }
   ```

2. ### If-Else Statement

   ```js
   if (age >= 18) {
     console.log("You are eligible to Vote!");
   } else {
     console.log("You are not eligible to Vote!");
   }
   ```

3. ### If-Else Ladder

   There can be n number of else if inside if and else.

   ```js
   if (num < 5) {
     console.log("The Number is below 5");
   } else if (num > 5) {
     console.log("The Number is above 5");
   } else {
     console.log("The Number is equal to 5");
   }
   ```

---

## Iterative Statements

Loops are a piece of code which is repeatedly executed until the condition becomes true.

```js
var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr);
```

1. ### For Loop

   ```js
   for (let i = 0; i < arr.length; i++) {
     console.log(arr[i]);
   }
   ```

2. ### Using Array Function

   ```js
   arr.forEach(function (element) {
     console.log(element);
   });
   ```

3. ### While Loop

   ```js
   let j = 0;
   while (j < arr.length) {
     console.log(arr[j]);
     j++;
   }
   ```

4. ### Do While Loop

   The While Loop Works same as while loop but the code inside the loop is executed atleast once.

   ```js
   let k = 0;
   do {
     console.log(arr[k]);
     k++;
   } while (k < arr.length);
   ```

---

## Jump Statements

1. ### Break Statement

   Break Statement is used to forcefully break the loop if the given condition is satisfied.

   ```js
   for (let u = 0; u < arr.length; u++) {
     if (u == 5) break;
     else console.log(arr[u]);
   }
   ```

2. ### Continue Statement

   Continue Statement is sused to skip a part of loop if the condition is satisfied.

   ```js
   for (let v = 0; v < arr.length; v++) {
     if (v == 5) continue;
     else console.log(arr[v]);
   }
   ```

---

## Array Methods

Array Methods are the inbuilt functions that can be used on Arrays. All the functions are applied to the original array.

```js
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
```

1. ### Length - Array

   - It shows the total number of elements inside array

   > **Syntax: arrayname.length**

   ```js
   var l = arr.length;
   console.log("The Length is", l);
   ```

2. ### Pop - Array

   - It Removes the last element from the array

   > **Syntax:arrayname.pop();**

   ```js
   arr.pop();
   console.log("The Array After Pop Function is", arr);
   ```

3. ### Push - Array

   - It adds an element at the last place to an array

   > **Syntax:arrayname.push();**

   ```js
   arr.push("Hello");
   console.log("The Array After Push Function is", arr);
   ```

4. ### Shift - Array

   - It removes the first element from the array

   > **Syntax:arrayname.shift();**

   ```js
   arr.shift();
   console.log("The Array After Shift Function is", arr);
   ```

5. ### Unshift - Array

   - It adds an element at the first place to an array

   > **Syntax:arrayname.unshift();**

   ```js
   arr.unshift("Hello");
   console.log("The Array After Unshift Function is", arr);
   ```

6. ### ToString - Array

   - Converts Array to String

   > **Syntax: arrayname.toString();**

   ```js
   str_arr = arr.toString();
   console.log(str_arr);
   ```

7. ### Sort - Array

   - Sorts the numbers in array Alphabatically

   > **Syntax: arrayname.sort();**

   ```js
   var arr2 = [4, 6, 3, 6, 7, 4, 3, 6, 4, 2, 5];
   console.log(arr2);
   sort_arr = arr2.sort();
   console.log(sort_arr);
   ```

---

## String Methods

String Methods are the inbuilt functions that can be used on Strings. All the functions are applied to the original String

```js
var str = "How are you";
```

1. ### Length - String

   - It shows the total number of characters inside String

   > **Syntax: stringname.length**

   ```js
   var l = str.length;
   console.log("The Length is", l);
   ```

2. ### IndexOf - String

   - It Returns the index of a given first(if repeated) letter or word

   > **Syntax: stringname.indexOf("word");**

   ```js
   console.log("First Index of the o is", str.indexOf("o"));
   ```

3. ### LastIndexOf - String

   - It Returns the index of a given last(if repeated) letter or word

   > **Syntax: stringname.lastIndexOf("word");**

   ```js
   console.log("Last Index of the o is", str.lastIndexOf("o"));
   ```

4. ### Slice - String

   - It Returns only letters between the specified starting and ending indeces

   - Note: The letter in Ending Index is not printed

   > **Syntax: stringname.slice(starting index number,ending index number);**

   ```js
   console.log("The Sliced Word is", str.slice(0, 3));
   ```

5. ### Replace - String

   - It Replaces a letter or word with another in a string

   > **Syntax: stringname.replace("to be replaced word","replcaing word")**

   ```js
   r = str.replace("How", "Where");
   console.log(r);
   ```

---

## Date - InBuilt Module

Date stores the date and time of the system.

```js
let myDate = new Date();
console.log(myDate);
```

### Methods of Date

1. Get Time Function

   - Prints time in seconds

   ```js
   console.log(myDate.getTime());
   ```

2. Get Full Year Function

   - Prints the year

   ```js
   console.log(myDate.getFullYear());
   ```

3. Get Day Function

   - Prints the day in number
     - sun-0
     - mon-1
     - tue-2
     - wed-3
     - thurs-4
     - fri-5
     - sat-6

   ```js
   console.log(myDate.getDay());
   ```

4. Get Minutes Function

   - Prints the Minutes

   ```js
   console.log(myDate.getMinutes());
   ```

5. Get Minutes Function

   - Prints the Hour

   ```js
   console.log(myDate.getHours());
   ```

---

## Document Object Model (DOM) Manipulation - Client Side JS

DOM Manipulation is manipulation of a document's content or its appearance of HTML using Javascript

### Methods of DOM Manipulation

```html
<div class="container">
  <button id="click">Click Me</button>
</div>
```

1. Get Element by ID

   - This helps in getting access to certain element from HTML

   > **Syntax: document.getElementById('element_id');**

   ```js
   b = document.getElementById("click");
   ```

2. Get Element by Class

   - This helps in getting access to certain class from html

   > **Syntax: document.getElementByClassName('class_name');**

   ```js
   c = document.getElementsByClassName("container");
   ```

---

## Events - Client Side JS

The Piece of code which is executed once there is a certain event that takes place in the website.

Example: When clicked on a button

```html
<div id="division" class="container">
  <button id="click" onclick="clicked()">Click Me</button>
</div>
```

### Function that is Called when the Website is Loaded

```js
window.onload = function () {
  console.log("The Document was Loaded");
};
```

### Function that is called when Button is Clicked

```js
function clicked() {
  console.log("The Button was clicked");
}
```

### Function Executed when an Event is triggered in the Division(ID of div)

- Executes when clicked on `div`

```js
division.addEventListener("click", function () {
  console.log("Clicked on division");
});
```

- Executes when cursor is on `<div>`

```js
division.addEventListener("mouseover", function () {
  console.log("The Cursor is on division");
});
```

- Executes when Cursor is out of `<div>`

```js
division.addEventListener("mouseout", function () {
  console.log("The Cursor is out of division");
});
```

- Executes when clicked on `<div>` and Left

```js
division.addEventListener("mouseup", function () {
  console.log("Mouse Up on division");
});
```

- Executes when clicked on `<div>` and hold

```js
division.addEventListener("mousedown", function () {
  console.log("Mouse Down on division");
});
```

---

## Set Timeout

Set timeout is an inbuilt function used to execute another function after a certain time has passed.

> **Syntax: variable_name = setTimeout(functionName,time)**

- Time is entered in milliseconds and it represents after how many milliseconds the function 'functionName' must be executed.

- Here variable 'variable_name' acts as an ID for the Set Timout. The Assignment is Optional.

- Set Timeout can be stopped by `clearTimout(variable_name)` Function.

```js
sec5 = () => console.log("5 seconds has been Passed");
var st = setTimeout(sec5, 5000);
```

---

## Set Interval

Set Interval is an inbuilt function used to execute another function repeatedly after a certain interval of time.

> **Syntax: variable_name = setInterval(functionName,time)**

- Time is entered in milliseconds and it represents after how many milliseconds the function 'functionName' must be executed.

- Here variable 'si' acts as an ID for the setinterval. The Assignment is Optional.

- Set Interval can be stopped by `clearInterval(variable_name)` Function.

```js
function sec3() {
  console.log("3 seconds has been Passed");
}
var si = setInterval(sec3, 3000);
```

---

## Local Storage - Client Side JS

Local Storage helps store the data in User's Computer as a Object

Every Domain has its own Local Storage.

Private Information must not be stored in local storage as it can be visible to anyone.

Note: Use the below codes in the Console API.

1. Storing Data

   > **_Syntax: localStorage.setItem('key','value')_**

   ```js
   localStorage.setItem("name1", "Bob");
   localStorage.setItem("name2", "Bobby");
   ```

2. View all the Data

   ```js
   localStorage;
   ```

3. Retrieving the Stored Data

   > Syntax: localStorage.getItem('key','value')

   ```js
   localStorage.getItem("name1", "Bob");
   localStorage.getItem("name2", "Bobby");
   ```

4. Removing a single Data from the local storage

   > Syntax: localStorage.remove('key')

   ```js
   localStorage.removeItem("name1");
   ```

5. Removing all the Data from local storage

   ```js
   localStorage.clear();
   ```

---

## JSON - Java Script Object Notation

JSON is a type of file which stores Java Script object in the form of string.

JSON is stored in a **.json** File. These file are reversible i.e. it can be turned back into object again. JSON is used to exchange data
JSON does not support single quotes(').

JSON is a Module that helps in Convertions

```js
var marks = {
  Bob: 34,
  John: 58,
  Bobby: 97,
};
```

1. Converting an Object to JSON

   > Syntax: JSON.stringify(objectname)

   ```js
   var jsons = JSON.stringify(marks);
   // jsons is of type String
   ```

2. Converting JSON to an Object

   > Syntax: JSON.parse('json string' or variable)

   ```js
   var parsed = JSON.parse(jsons);
   // parsed is of type Object
   ```

---

## Template Literals

Template Literals also known as backticks **( \` )** are used to print something along with the variables. It acts as fstring in python

```js
var a = 97;
var b = 54;

console.log(`Bob scored ${a} in Maths and ${b} in Physics`);
```

---

## Extras

### Execution

1. Browser

   Javascript can be executed in Browser's Console API.

   It Supports Client Side Features such as DOM Manipulations and Local Storage.

2. Terminal

   Javascript can be executed in Terminal using **Node.js** .

   It does not Supports Client Side Features such as DOM Manipulations and Local Storage as it is made for Backend Purpose.

   The Command in Terminal is:

   ```bash
   node fileName.js
   ```

---

## References

1. [_Mozilla JavaScript Documentation_](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---
