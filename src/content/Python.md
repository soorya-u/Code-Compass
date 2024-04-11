# Python Reference

## Introduction

Python is a High-Level, General-Purpose, Dynamic Programming Language which supports Multiple Programming Paradigms.

The Extention of Python File is **.py** .

### Contents

1. [Comments](#comments)

2. [Print Function](#print-function)

   - [Escape Sequence](#escape-sequence)

3. [Variable and Datatypes](#variables-and-datatypes)

   - [Integers](#integers)

   - [Floating Point](#floating-point)

   - [String](#string---primitive)

   - [Boolean](#boolean)

   - [None](#none)

4. [Operators](#operators)

   - [Arithmetic Operators](#arithmetic-operators)

   - [Assignment Operators](#assignment-operators)

   - [Comparirison Operators](#comparision-operators)

   - [Logical Operators](#logical-operators)

5. [Type Casting](#typecasting)

6. [Input Function](#input-function)

7. [String](#string)

   - [Accessing Single Index](#accessing-single-index)

   - [Accessing Multiple Indices](#accessing-multiple-indices)

   - [String Methods](#string-methods)

     - [Length](#length---string)

     - [Ends With](#ends-with---string)

     - [Count](#count---string)

     - [Capitalize](#capitalize---string)

     - [Find](#find---string)

     - [Replace](#replace---string)

   - [F-String](#f-string)

8. [List](#list)

   - [List Slicing](#list-slicing)

   - [List Methods](#list-methods)

     - [Append](#append---list)

     - [Sort](#sort---list)

     - [Reverse](#reverse---list)

     - [Insert](#insert---list)

     - [Pop](#pop---list)

     - [Remove](#remove---list)

9. [Tuples](#tuples)

   - [Tuple Methods](#tuple-methods)

     - [Count](#count---tuple)

     - [Index](#index---tuple)

10. [Dictionary](#dictionary)

    - [Dictionary Methods](#dictionary-methods)

      - [Keys](#keys---dictionary)

      - [Values](#values---dictionary)

      - [Items](#items---dictionary)

      - [Update](#update---dictionary)

      - [Get](#get---dictionary)

11. [Sets](#sets)

    - [Set Methods](#set-methods)

      - [Add](#add---set)

      - [Length](#length---set)

      - [Remove](#remove---set)

      - [Pop](#pop---set)

      - [Clear](#clear---set)

      - [Union](#union---set)

      - [Intersection](#intersection---set)

12. [Conditional Statements](#conditional-statements)

    - [If Statement](#if-statement)

    - [If-Else Statement](#if-else-statement)

    - [If-Else Ladder](#if-else-ladder)

13. [Is and In Keywords](#is-and-in-keywords)

14. [Range Function](#range-function)

    - [Range Function Parameters](#range-function-parameters)

15. [Iterative Statements](#iterative-statements)

    - [While Loop](#while-loop)

    - [For Loop](#for-loop)

16. [Jump Statements](#jump-statements)

    - [Break Statement](#break-statement)

    - [Continue Statement](#continue-statement)

    - [Pass Statement](#pass-statement)

17. [Function](#functions)

    - [Types of Functions](#types-of-functions)

    - [Arguments and Return Value](#arguments-and-return-value)

    - [Default Argument Value](#default-argument-value)

    - [Recursion](#recursion)

18. [File IO](#file-io)

    - [Opening and Closing a File](#opening-and-closing-a-file)

    - [Modes of Opening a File](#modes-of-opening-a-file)

    - [File Methods](#file-methods)

      - [Read](#read)

      - [Read Line](#read-line)

      - [Write](#write)

      - [Append](#append)

    - [With Statement](#with-statement)

19. [Object Oriented Programming](#objected-oriented-programming)

    - [Class](#class)

    - [Object](#object)

    - [Class Attributes](#class-attributes)

    - [Instance Attributes](#instance-attributes)

    - [self Parameter](#self-parameter)

    - [Constructor](#constructor)

      - [Default Constructor](#default-constructor)

      - [Parameterized Constructor](#paramterized-constructor)

    - [Inheritance](#inheritance)

      - [Single Inheritance](#single-inheritance)

      - [Multiple Inheritance](#multiple-inheritance)

      - [Multilevel Inheritance](#multilevel-inheritance)

      - [Super Function](#super-function)

20. [Decorators](#decorators)

    - [@staticmethod](#staticmethod)

    - [@classmethods](#classmethod)

    - [@property](#property)

    - [@setter](#setter)

21. [Dunder Methods](#dunder-methods)

    - [Class](#class-dunder-method)

    - [Name](#name-dunder-method)

    - [Operator Overloading](#operator-overloading-dunder-method)

    - [Other Dunder Methods](#other-dunder-methods)

22. [Exception Handling](#exceptional-handling)

    - [Try with Else](#try-with-else)

    - [Try with Finally](#try-with-finally)

23. [Global Keyword](#global-keyword)

24. [Enumerate Function and Comprehensions](#enumerate-function-and-comprehensions)

    - [Enumerate Function](#enumerate-function)

    - [Comprehensions](#comprehension)

25. [Lambda Functions](#lambda-functions)

26. [Other Methods](#other-methods)

    - [Join Method](#join-method)

    - [Format Method](#format-method)

    - [Map Method](#map-method)

    - [Filter Method](#filter-method)

    - [Reduce method](#reduce-method)

27. [Extras](#extras)

    - [Execution](#execution)

    - [PIP](#pip)

      - [Install](#install)

      - [Freeze](#freeze)

    - [Virutal Environment](#virtual-environment)

      - [Installation](#installation)

      - [Activation](#activation)

28. [References](#references)

---

## Comments

Comments are Piece of Line in the Program that is Ignored by the Compiler or Interpreter.

```py
# or '' or "" is used to Add Comments
'''
You can add
multiline Comment
as well
'''
```

---

## Print Function

Print Function is used to print on the Terminal or Console.

```py
print("Hello World")
print('Nice to Meet you!',end="")
```

`end` is a Parameter used to add any word at the end of the Statement.

By Default it is set to `\n` which is New Line.

### Escape Sequence

Escape sequence are Special Characters which helps in adding Several things to a String

Some of the Are:

- '\n' -> helps in creating a new line
- '\t' -> helps in creating tab space
- '\\' -> Used to add Backslash

_Example:_

```py
print(" Escape Sequence.\nThis \\helps the \'sentence \t change")
```

---

## Modules

modules are basically Inbuilt or external library that is supported by Python.

Some Modules come along with Python, but some should be Installed using [pip](#pip).

The Installed Module can be imported to the Python File.

```py
import module_name
```

The Imported Module can be given an Alias

```py
import module_name as mn
```

We can Import only Required Elemetns from the Module

```py
from module_name import module_elements
from module_name import * # To import All Elements
```

---

## Variables and Datatypes

Variables are containers to store data values. Variable can be Created just by variable name.

We can Determine the Datatype of Variable using `type()` Function.

```py
print(type(a))
```

> **Syntax: variable_name=value**

The Primary Datatypes are:

1. ### Integers

   ```py
   a = 45
   print(a)
   ```

2. ### Floating Point

   ```py
   b = 99.45
   print(b)
   ```

3. ### String - Primitive

   ```py
   c = 'Hello World'
   print(c)
   ```

4. ### Boolean

   ```py
   d = True
   e = False
   print(d)
   print(e)
   ```

5. ### None

   ```py
   f = None
   print(f)
   ```

---

## Operators

Operators are used to perform operation on 2 variables of same datatype.

1. ### Arithmetic Operators

   _Example:_ **\+** , **\-** , **\*** , **\/** , **\%**

   _Note:_ Any Variable which undergoes through **( / )** Operator becomes Float

   ```py
   a = 20
   b = 10

   print("The Sum is:",a+b)
   print("The Difference is:",a-b)
   print("The Multiple is:",a*b)
   print("The Quotient is:",a/b)
   print("The Reminder is:",a%b)
   ```

2. ### Assignment Operators

   _Example:_ **\+\=** , **\-\=** , **\*\=** , **\/\=**

   These operators can alter the value of a varible

   ```py
   a += 10
   a -= 10
   a *= 2
   a /= 2
   ```

3. ### Comparision Operators

   _Example:_ **==** , **&lt;** ,**>** , **&lt;=** , **>=** , **!=**

   These give _Boolean_ Result

   ```py
   print(a==b)
   print(a!=b)
   print(a>b)
   print(a<=b)
   ```

4. ### Logical Operators

   _Example:_ **and** , **or** , **not**

   These are also Keywords

   ```py
   t = True
   f = False
   print(t and f)
   print(t or f)
   print(not t)
   print(not f)
   ```

---

## Typecasting

Typecasting is Changing of Datatype of certain Variable.

_Example:_

```py
# String to Float
a = "343"
print(type(a))
a = float(a)
print(type(a))

# Float to Integer
b = 15.75
print(type(b))
b = int(a)
print(type(b))

#
c = "Hello"
b = int(b) #Not Possible
```

---

## Input Function

Input Function assigns Value to a Variable based on User's input.

The Value assigned to the variable is always String. It is then typecasted to Desired Datatype.

```py
a = input("Enter a Number ")

c = int(input("Enter Number"))
```

---

## String

Concatination is Adding of 2 Strings

Two Strings can be Added using '+' Operator

```py
name = "Bob"
greeting = "Hello"
print(greeting + name)
```

Every Value from a String can be Seperated.

All Individual Values are given Numbers from 0 called _Index_ .

_Example_: In String "Hello", **H** is _0_, **e** is _1_, **l** is _2_ etc

Individual value can also be accessed by Negetive Indices

_Example_: In String "Hello", **o** is _-1_, **l** is _-2_, **l** is _-3_ etc

Accessing one or more indices of the string is called _String Slicing_ .

String in _Immutable_ which means the value present in String cannot be Changed.

```py
name[2] = "e" # not possible
```

### Accessing Single Index

> **Syntax: stringname[index of particular value'(position of value in string -1)']**

_Example:_

```py
print(greeting[0])
print(greeting[1])
print(greeting[-3])
print(greeting[-2])
print(greeting[-1])
```

### Accessing Multiple Indices

> **Syntax: stringname[first value index : last value index +1]**

```py
print(greeting[1:4]) #Here the 4th Index is excluded
print(greeting[0:5])
print(greeting[-5:-1])
print(greeting[:4]) #The blank space is replaced by the min or max Index
print(greeting[0:])
```

### String Methods

The Function applied to string is not overwritten in the Original string.

```py
sentence = '''this Paragraph is just to explain the working of
of few String function.require'''
```

To apply function to the original string:

```py
sentence = sentence.capitalize()
print(sentence)
```

#### Length - String

`len(string_name)` is the function which returns the Number of Letters present in the String.

```py
l = len(sentence)
print(l)
```

#### Ends With - String

`stringname.endswith("end_word")` tells whether the string ends with "end_word" by returning boolean value

```py
e = sentence.endswith("functions")
print(e)
```

#### Count - String

`stringname.count("letter_or_number_or_word")` returns the number of "letter_or_number_or_word" present in the String

```py
c = sentence.count("r")
print(c)
```

#### Capitalize - String

`stringname.capitalize()` changes the first letter of the string into capital Letter

```py
ca = sentence.capitalize()
print(ca)
```

#### Find - String

`stringname.find("first_word_or_letter")` finds the "first_word_or_letter" and displays its index.The result is -1 if not found

```py
f = sentence.find("t")
print(f)
```

#### Replace - String

`stringname.replace("old_word","new_word")` replaces all the "old_word" in the string with "new_word".

```py
r = sentence.replace("require","request")
print(r)
```

### F-string

This is a String in which Variables can be Included can also be Evaluated.

```py
a = 5
print(f"The value of Square of {a} is {a*a}")
```

`f` is necessary before the Double Quotation.

variables and expressions are written inside curly braces **( { } )**

---

## List

List are Containers which can Store a Set of Values of any Datatype.

Lists are in Order and Indexing and Reverse Indexing is Possible.

The value stored in List can be Changed (Unlike String)

```py
a = [7,5,13,0]
a[2] = 15 # Possible
```

### List Slicing

```py
b = [16,"Hello",False,32.32]
print(b)
print(b[0:3])
print(b[-5:])
```

### List Methods

All the Functions are Applied to the Original List.

```py
l1 = [3,7,5,0,6,8,1]
```

#### Append - List

`listname.append('element')` Adds the 'element' at the End of list.

```py
l1.append(99)
print(l1)
```

#### Sort - List

`listname.sort()` arranges the Values in Ascending Order.

```py
l1.sort()
print(l1)
```

#### Reverse - List

`listname.reverse()` arranges the Values in Reverse Order.

```py
l1.reverse()
print(l1)
```

#### Insert - List

`listname.insert('index','number')` adds any Value of given Index in the List

```py
l1.insert(3,676)
print(l1)
```

#### Pop - List

`listname.pop('index')` deletes the Value of given Index in the List

```py
l1.pop(2)
print(l1)
```

#### Remove - List

`listname.remove('number')` deletes the 'number' Present in the List.

```py
l1.remove(8)
print(l1)
```

---

## Tuples

Tuple is like a list but it is Immutable

```py
a = (1,3,5,6,8,0)
b = () # This is an Empty Tuple
d = (1,) #This is tuple with one element.Comma is Compulsory
```

### Tuple Methods

```py
t= (2,3,4,7,5,7,7,7,7,8,9,0,7,7)
```

#### Count - Tuple

`tuplename.count('number')` counts the number of 'number' present in tuple

```py
c = t.count(7)
print(c)
```

#### Index - Tuple

`tuplename.index('number')` returns the index value of the 'number'

```py
i = t.index(0)
print(i)
```

---

## Dictionary

Dictionary is Collection of Key-Value Pairs

It is Unordered

Dictionary is Mutable

It is Indexed. Since it is unordered, _Key_ becomes the Index. The value can be accessed only by Keys.

There cannot be Multiple Keys. Hence any Changes done is directly Applied to the Dictionary.

There can be only one Key. If there is more than one Key, then the value of the latest key gets Overwritten.

```py
d = {
    "hello" : "bob",
    "marks" : [1,3,5,5,1,2],
    1 : 1350,
    "another_dict" : {"annual_marks" : [7,39]}
}

print(d['hello'])
print(d["marks"])
print(d["anotherdic"]["annualmarks"])
d["marks"] = [0,1,2,3,4,5]
print(d["marks"])
```

```py
emptydic = {}
print(type(emptydic)) # This is an empty dictionary
```

### Dictionary Methods

```py
ndic = {
    "hello" : "bobby",
    1 : 100,
    "num" : [1,2,3,4,5,6],
    "newdic" : {"newnum" : [6,5,4,3,2,1]}
}
```

#### Keys - Dictionary

`dictionaryname.keys()` returns all the Keys in the Dictionary

The datatype of keys are called `dict_keys`.

Keys can be converted into **List** and **Tuple** .

```py
k = ndic.keys()
print(k)
print(type(k))
```

#### Values - Dictionary

`dictionaryname.values()` returns all values of the dictionary

The datatype of values are called `dict_values`.

It can also be converted into **List** and **Tuple**

```py
v = ndic.values()
print(v)
print(type(v))
```

#### Items - Dictionary

`dictonaryname.items()` returns both Key and Value of the dictionary

```py
i = ndic.items()
print(i)
```

#### Update - Dictionary

`olddictionaryname.update(newdictionaryname)` merges the _new dictionary_ into _old dictionary_.

This function overwrites the _old dictionary_.

If the Key present in _old dictionary_ is repeated in _new dictionary_, then the Value of that Key is overwritten by the Value in the _new dictionary_.

```py
updatedic = {
    "newkey" : "newvalue",
    10 : 10000
}

ndic.update(updatedic)
print(ndic)
```

#### Get - Dictionary

`dictionaryname.get("word")` returns the value if _word_ is a Key in the Dictionary or returns `None` if 'word' is not a Key in the Dictionary

```py
he = ndic.get("hello")
hi = ndic.get("hi")
print(he)
print(hi)
```

---

## Sets

Set is Collection of Non-Repetative Number.

Set is Unordered and Index cannot be Used.

Set is Mutable.

Sets Cannot have same Value Multiple times.

```py
a = {1,4,6,3,7,7,5,5,5,5,3,3}
print(a)
```

Set can have same value only if one of them is String. _does not work with float_

```py
h = {18,"18"} # Valid
print(h)
```

Empty Set can be Created using `set()` function.

```py
b =set()
print(type(b))
```

### Set Methods

```py
s = {3,5,7,9,0}
```

#### Add - Set

Values can be Added using `setname.add()` function.

```py
s.add(8)
s.add(1)
print(s)
```

Adding List to set is Impossible because List can be changed.

```py
s.add([3,4,6,78,2]) # Invalid
```

Adding Tuple to set is Possible because tuple Cannot be Changed/

```py
s.add((3,4,6,78,2)) # Valid
```

Adding Dictionary to set is Impossible because Dictionary can be Changed.

```py
s.add({1:40000}) # Invalid
```

#### Length - Set

`len(setname)` returns the number of Values present in Set

```py
l = len(s)
print(l)
```

#### Remove - Set

`setname.remove('value'/'number')` Removes the _number_/_value_ from the Set.

```py
s.remove(0)
print(s)
```

#### Pop - Set

`setname.pop()` Removes any random value from the Set.

```py
s.pop()
print(s)
```

#### Clear - Set

`setname.clear()` Removes all Element from Set and makes it an Empty Set.

```py
s.clear()
print(s)
```

#### Union - Set

`set_name.union({set_b})` returns a New Set which has all the Elements from _set_name_ and _set_b_

```py
u = s.union({7,9,79,0,3,5,7,46,24})
print(u)
```

#### Intersection - Set

`set_name.intersection({set_b})` returns a New Set which has only the Elements common between _set_name_ and _set_b_.

```py
i = s.intersection({7,9,79,0,3,5,7,46,24})
print(i)
```

---

## Conditional Statements

Statements which are executed only if Condition is True are called Conditional Statements.

`if`, `else`, `elif` are statements used to Verify the Required Conditions.

1. ### If Statement

   ```py
   a = 10

   if(a>7):
       print("Greater")
   ```

2. ### If-Else Statement

   ```py
   if(a>14):
       print("Greater")
   else:
       print("Smaller")
   ```

3. ### If-Else Ladder

   ```py
   if(a>10):
       print("Greater")
   elif(a<10):
       print("Smaller")
   else:
       print("Equal")
   ```

The Conditions inside `if`, `else`, `elif` are either [Comparision Operators](#comparision-operators) or [Logical Operator](#logical-operators) or `is` or `in` or [Some Functions](#functions)

---

## Is and In Keywords

`is` and `in` returns Boolean datatype. _(in this condition )_

_Example:_

```py
o = 187
if(type(o) is int):
    print("It is Integer")
```

```py
l = [18,12,15,76]
if(76 in l):
    print("The Element is present")
```

---

## Range Function

Range function is used to genrate a sequence of numbers.

We can also specify the _start_, _stop_ and _step_size_.

_step_size_ is basically used for skipping cerain numbers in sequence

> **Syntax: range(start number, stop number+1, step_size)**

```py
r = range(1,10,2)
print(r)
print(type(r))
```

### Range Function Parameters

1. Single Argument

   Range Function generates numbers from 0 to 7 excluding 8

   ```py
   r = range(8)
   print(r)
   ```

2. Two Arguments

   Here range function generates numbers from 8 to 16 excluding 17

   ```py
   r = range(8,17)
   print(i)
   ```

3. Three Arguments

   Here the numbers 2, 4, 6 and so on are skipped.

   ```py
   r = range(1,20,2)
   print(i)
   ```

---

## Iterative Statements

Iterative Statements are Statements which Repeats the Required Codes any number of times based on certain Condition

Types of Loops: `while` and `for`

1. ### While Loop

   ```py
   a = 5
   while(a<10):
       print(str(a) + " is less than 10")
       a += 1
   ```

   If the condition never becomes _False_, then the loop is executed Infinite Times.

2. ### For Loop

   1. For in Iterating Variables

      ```py
      li = [1,2,5,7,9,"bobby"]
      for i in li:
          print(i)
      ```

      Here **i** is a new Variable also known as _item_ which is used to assign the Values inside **li**.

      Here **li** can be any Iterable Variable.

   2. For using Range Functions

      ```py
      for i in range(8):
          print(i)
      print()
      ```

   3. For with Else:

      ```py
      for c in range(1,11):
          print(c*2)
      else:
          print("The above is the Table of 2")
      ```

      The Statements within Else is executed only when condition is False or when the Loop is finished.

      Statements written in `for with else` is not executed when `break` is encountered since the loop is manually stopped.

---

## Jump Statements

1. ### Break Statement

   `break` is used to come out of the loop manually even thoough the `for` condition is `True` when encountered inside the loop.

   ```py
   li = [0,1,2,3,4,5,6,7,8,9]

   for c in li:
       if(c == 7):
           break
       print(c)
   else:
       print("All the Elements in List are executed")
   ```

   Here the code below else is not executed

2. ### Continue Statement

   `continue` is used to skip a Loop only if condition is `True`.

   ```py
   li = [0,1,2,3,4,5,6,7,8,9]

   for c in li:
       if(c == 7):
           continue
       print(c)
   else:
       print("All the Elements in List are executed")
   ```

   In this Case, The Number **7** cannot be Printed as the Loop is Skipped.

3. ### Pass Statement

Pass statement is null statement

```py
for c in li:
    if(c == 0):
        pass
```

If a code inside `for` or `if` statement is empty,then the interpreter throws `error`.

In order to keep a code inside a statement empty,`pass` is used.

---

## Functions

Function is a group of code kept together and can be used multiple times with simple command.

To create a function, `def` keyword is Used.

```py
def gd(): # Function Definition
    name = input("Enter Your Name: ")
    print("Good Day,"+name)

gd() # Function Call
```

### Types of Functions

1. Built in Funtion
   Functions which already exists
   _Example:_ `print`, `input`, `int`, `range` etc

2. User Defined Function
   Funtions which are created by users
   _Example:_ **gd()** etc

### Arguments and Return Value

Function can accepts arguments and can use it for Computations.

Functions are also Capable of Returning a Value which can be Assigned to a Variable

The arguments/variables are placed inside the paranthesis.

```py
def mysum(n1,n2):
    return n1+n2

s = mysum(1,2)
print(s)
```

### Default Argument Value

The argument in the function is given a default value so that the program doesn't throw Error.

```py
def hello(name = "Stranger"):
    print("Hello " + name)

hello() # If the name variable is not Assigned with value, then the function throws error.
```

### Recursion

It is a Function which calls itself

```py
def factorial(n):

    if(n == 0 or n == 1):
        return 1
    else:
        return n * factorial(n-1)

print(factorial(5))
```

Therefore the function _factorial(n)_ calls _factorial(n-1)_ i.e itself.

---

## File IO

File is a data stored in a storage device.Python program can access the file and can also overwrite it.

Types of Files:

1. Text files: **.txt** etc
2. Binary Files: **.jpg** etc

### Opening and Closing a File

`open()` function is used to open a file. The file name and mode is passed as Arguments.

> **Syntax: open('file_name','mode')**

`filename.close()` closes the file

### Modes of Opening a File

1. **r** -> for Reading a File
2. **w** -> for Writing in a File
3. **a** -> for Appending in a File (adding something at end)
4. **\+\\\-** -> for Updating a File
5. **rb** -> will Read a Binary File
6. **rt** -> will Read a Text File

**rt** is applied by default

default mode is **r** i.e read

### File Methods

1. #### Read

   `read()` function is used to read the content of the file.

   You cannot run the read function on same file twice.

   > **Syntax:functionname.read(number of character if required)**

   ```py
   f = open('test.txt')

   data = f.read()
   print(data)

   f.close()
   ```

2. #### Read Line

   > **Syntax: functionname.readline()**

   ```py
   f = open('test.txt')

   l = f.readline()
   print(l) #prints first line

   l = f.readline()
   print(l) #prints second line and so on

   f.close()
   ```

3. #### Write

   > **Syntax: functionname.write("The Sentence to be added")**

   _Note:_ All the Previous data will be Erased when using _Write Mode_

   The Write Mode does not erases any data until it encounters Close funtion.

   It also creates a File if there is no File with the given name

   ```py
   f = open('test.txt','w')

   f.write("This Sentence will be added to the File 1")
   f.write("This Sentence will be added to the File 2")
   f.write("This Sentence will be added to the File 3")
   f.write("This Sentence will be added to the File 4")

   f.close()
   ```

4. #### Append

   This is to Append a line to the File

   ```py
   f = open('16_test.txt','a')
   f.write("\nThis Sentence will be added at the end")
   f.close()
   ```

### With Statement

This is the also a way to open and close a file.But with function automatically closes the file.

```py
with open("16_test.txt",'r') as f:
    a = f.read()
print(a)

with open("16_test.txt",'w') as f:
    a = f.write("No")
print(a)

with open("16_test.txt",'a') as f:
    a = f.write("No")
print(a)
```

Since this closes file automatically, it is considered the best way to open a file.

---

## Objected Oriented Programming

Object Oriented Programming makes the program easy and less complicated

### Class

Class is a blueprint for creating an object.

It is Basically a Custom created variable.

Classname is preffered to be in PascalCase. _(not necessay)_

```py
class Employee:
    company = 'Google'
    salary = 15000
```

### Object

An Object is instantiation of class

When a class is assigned with a value, it is called object

Class acts more like a function.Hence there can be many objects based on a single class.

```py
bobby = Employee()
```

### Class Attributes

An attribute that belongs to Class rather than the Object.

When the Class attribute is changed, that Attribute in all the Objects created on the basis of that Class is also changed.

_Example:_

```py
print(bobby.company)
print(bobby.salary)
```

### Instance Attributes

An attribute that belongs to an object

When the Instance Attribute is changed,it affects only that particular Object, rather than other object or its class.

```py
bobby.code = 151234
print(bobby.code)
```

_Note:_ Instance Attributes take preferance over Class Attributes in Assignment and retrival

```py
bobby.salary = 18000
print(bobby.salary)
```

### self Parameter

`self` refers to the object created with the help of that class.

```py
class Employee2:

    company = 'Infosys'

    def printinfo(self,greet):
        print(f"Name: {self.name}")
        print(f"Name: {self.company}")
        print("Salary: 15000")
        print(greet)

bob = Employee2()
bob.name = 'Bob M'
bob.printinfo('Thank You!')
Employee2.printinfo(bob,'Thank You!')
```

The line `bob.printinfo('Thank You!')` is converted into `Employee2.printinfo(bob,'Thank You!')` because the function is in the class.

While accessing the function, the object name(bob,'Thank You!') sends 2 argument,but in the original function,there is only 1 argument

Therefore it throws `error`. In order to avoid this error, `self` parameter is given

You should also place `self` before the Instance Attribute and class attributes for the function to access it.

### Constructor

It is a Special Function which Calls itself as soon as an Object is created.

It has a self argument,but can also contain other arguments.

#### Default Constructor

```py
class Hello:
    def __init__(self):
        print("This Sentence is printed as soon as an Object is Created")

hi = Hello()
```

#### Paramterized Constructor

```py
class Employee:
    def __init__(self,name,age):
        self.name = name
        self.age = age
        print("Object has been Created")

    def getdetails(self):
        print(f'Name: {self.name}')
        print(f'Age: {self.age}')

g = Employee('Bob',21)
g.getdetails()
```

### Inheritance

It is a way of creating a new class from an existing class.

The new Class is called _Derived Class_ and the existing class is called _Base Class_

All the Functions and variables in Base class is inherited by Deriveed class.

If there is a Function or a Variable with the same name in both Base and Derived class, then the value given to variable or functon overwrites the inherited one from base class.

You can create any number of derived classes and also a derived class can inherit any number of base classes.

#### Single Inheritance

An Inheritance where there is only 1 base class and 1 derived class.

_Example:_

```py
class bc:
    def bcf(self):
        print("This Funtion is from Base Class.")
    def ccf(self):
        print("This Function will be changed in Derived class.")

class dc(bc):
    def ccf(self):
        print('This Function has been Overwritten in Derived Class')
    def dcf(self):
        print("This Function is from Derived class")

print("Base Class:")
bo = bc()
bo.bcf()
bo.ccf()

print("\nDerived Class:")
do = dc()
do.bcf()
do.ccf()
do.dcf()
```

#### Multiple Inheritance

Multiple Inheritance is an inheritance where a single derived class inherits more than 1 base class.

_Example:_

```py
class levelofp:
    hello = 0
    def showlevel(self):
        level = 121
        return level
class scoreofp:
    hello = 1
    def showscore(self):
        score = 5
        return score

class player(levelofp,scoreofp):
    def showname(self,name):
        self.name = name
        return self.name

p1 = player()
print(f"Name: {p1.showname('LowLife')}")
print(f"Level: {p1.showlevel()}")
print(f"Score: {p1.showscore()}")
print(p1.hello)
```

The value of **hello** of object **p1** is inherited from **levelofp** rather than **scoreofp**.

This is because the first base class to be inherited is **levelofp**.

The Inheritance of base class should be in the priority order.

#### Multilevel Inheritance

This is an inheritance where the derived class becomes base class and this is inherited by another derived class.

_Example:_

```py
class base1:
    a1 = "This is from Base1"
    a2 = "This will be changed by base2"
class base2(base1):
    a2 = "This was from base1 and base2 changed it"
    b1 = "This is from base2"
    b2 = "This will be changed in derived"
class derived(base2):
    b2 = "This was from base2 and derived changed it"
    c1 = "This is from derived"

d = derived()
print(d.a1)
print(d.a2)
print(d.b1)
print(d.b2)
print(d.c1)
```

Unlike Multiple Inheritance, there is no priority here, the latest one overwites the old one.

#### Super Function

`Tsuper()` function helps in running the funtions of the base class which has Same Name as in the Derived Class.

It is also used to call the Constructor of Base Class.

_Example:_

```py
class c1:

    def greet(self):
        print("Hello!")


class c2(c1):

    def greet(self):
        super().greet()
        print("Nice to Meet You")

class c3(c2):

    def greet(self):
        super().greet()
        print("How is Your Day?")

o1 = c3()
o1.greet()
```

If there is a Single super() and Multiple base classes, it Either gives Priority (in case of multiple) or Executes Latest (in case of multilevel)

---

## Decorators

1. ### @staticmethod

   `@Staticmethod` Decorator is used to create a function in a class without self parameter.

   ```py
   class Greet:
       @staticmethod
       def greet():
           print("Hello! Have a Good Day")

   gd = Greet()
   gd.greet()
   ```

   Static Methods avoids convertion of `gd.greet()` to `Greet.greet(gd)`

   Therefore Self is not required. If `self` is added,it throws error.

2. ### @classmethod

   The `@classmethod` is a Decorator that makes a function executable only by the Class.

   The `cls` parameter is used for a Class Method

   ```py
   class Freelancer2:
       name = "Bobby"
       fees = 12000

       @classmethod
       def extrafee(cls,pay):
           cls.fees = pay

   of2 = Freelancer2()
   print("Before Class Method: ",of2.fees)
   of2.extrafee(18000)
   print("After Class Method: ",of2.fees)
   ```

3. ### @property

   The `@property` decorator makes a function look like a variable externally

   The Function definition is as usual,but the function call is like a calling variable

   This is used so that if there is any change in the class variable(salary,salarybonus,savings) in the future, it should not affect the class variable which depends on another class variable`totalsalary`

   This is also called `getter method`.

   ```py
   class Employee1:
       name = "Alex"
       salary = 13000
       salarybonus = 700
       savings = 200

       @property
       def totalpayment(self):
           return self.salary + self.salarybonus - self.savings

   oe1 = Employee1()
   print(oe1.totalpayment)
   ```

4. ### @setter

   Since the property based function acts as a class variable, it can be changed like a normal variable

   This is used when dependable class variable's value is given and we have to adjust the other class variables

   ```py
   class Employee2:
       name = "Alexa"
       salary = 14000
       salarybonus = 700

       @property
       def totalpayment(self):
           return self.salary + self.salarybonus

       @totalpayment.setter
       def totalpayment(self,val):
           self.salarybonus = val - self.salary

   oe2 = Employee2()
   print(oe2.totalpayment)
   oe2.totalpayment = 14500
   print(oe2.salary)
   print(oe2.salarybonus)
   ```

---

## Dunder Methods

Dunder Methods are also Called as Magic Methods

1. ### class Dunder method

   There are methods to change the value of a class variables after creating an object.

   It is used as `__class__`.

   ```py
   class Freelancer1:
       name = "Bob"
       fees = 10000

       def extrafee(self,pay):
           self.__class__.fees = pay

   of1 = Freelancer1()
   print("Before Dunder Class: ",of1.fees)
   of1.extrafee(15000)
   print("After Dunder Class: ",of1.fees)
   ```

2. ### Name Dunder Method

   You can import any program file using `import` statement.

   `__name__` is the name given to the program file.

   But while working on the program or while executing that proram file, its name is changed to `__main__`.

   Once the program file is imported to another program file,its `__name__` becomes the programmer _given file name_.

   ```py
   print(f"__name__ of this file is {__name__}")
   ```

   ```py
   # This is Main File

   import pyFile
   ```

   Here the program _pyFile_ is getting fully executed.

   But we neither want the full part to be executed nor want to change the Program File.

   In that case, the below Condition is Used.

   ```py
       if(__name__ == __main__):
   ```

   This `if` statement is placed inside the program file which is to be imported.

   If the code inside _pyFile_ is below `if` condition, the code which will be executed in _pyFile_ but not in the program which imported it.

   ```py
   # This is a pyFile

   print(f"__name__ of pyFile.py is {__name__}")

   def greet(name):
       print(f"Hello, {name}")
       print("Have a Good Day")

   if __name__ == "__main__":
       a = input("Enter your Name: ")
       greet(a)
   ```

3. ### Operator Overloading Dunder Method

   The Operators are overloaded using dunder method.

   These Methods are called when a given operator is used on Objects i.e. when 2 objects are added or multiplied etc.

   Operator Overoadings are:

   - `__add__()` -> **a \* b**
   - `__sub__()` -> **a \* b**
   - `__mul__()` -> **a \* b**
   - `__truediv__()` -> **a / b**
   - `__floordiv__()` -> **a // b**

   ```py
   class Number1:
       def __init__(self,num):
           self.num = num

       def __add__(self,obj2):
           print(type(num2))
           print("Lets Add")
           return self.num + obj2.num

       def __mul__(self,obj2):
           print("Lets Mutiply")
           return self.num * obj2.num

   obj1 = Number1(10)
   obj2 = Number1(6)
   print(obj1 + obj2)
   print(obj1 * obj2)
   ```

4. ### Other Dunder Methods

   - `__str__()`: used to set what gets displayed upon calling str(object)

   - `__len__()`: used to set what gets displayed upon calling len(object)

   ```py
   class Number2:
       def __init__(self,num):
            self.num = num
       def __str__(self):
           return f"The Entered Number is {self.num}"
       def __len__(self):
           return 13

   numb1 = Number2(15)
   print(numb1)
   print(len(numb1))
   ```

---

## Exceptional Handling

There are many Built-in Exceptions which are Raised in Python.

Exceptions can be Handled in Python using a `try` statement

```py
while(True):

    print("Press q to Quit")

    a = input('Enter a Number: ')

    if(a == 'q'):
        break

    try:

        if(int(a) > 50):
            print("The Entered Number is Greater than 50")

    except Exception as e:
        print(f"You have Entered the Wrong Value: {e}.Try Again")

print("Thank You for Using the Program")
```

`try` and `except` statements helps in avoiding the error.

The `try` Statement runs the code inside it.As soon as it faces any error,it ignores the code below error and the except statement is executed.

`try` statement should be paired with atleast 1 `except` statement. There can also be multiple `except` statements.

```py
try:
    b = int(input("Enter a Number: "))
    c = 1/b
    print(c)

except ValueError as e:
    print(f"The Entered Value is not a Number: {e}")

except ZeroDivisionError:
    print(f"Your Entered Value is 0 and 0 cannot be divisor")

print("Thank You for Using the Program.")
```

You can also specify the error and write the code according to it.

```py
def increment(num):
    try:
        return int(num) + 1
    except ValueError:
        raise ValueError("Entered Value is not Integer.")

d = increment('df364')
print(d) # (Outdated)
```

You can also add custom Messages to the Errors.

### Try with Else

```py
try:
     i = int(input("Enter a Number: "))
     c = 1/i
except Exception as e:
     print(e)
else:
     print("There is no Error")
```

`else` statement only gets executed when the code inside try statement is fuly executed and there is no error.

### Try with Finally

```py
try:

    i = int(input("Enter a Number: "))
    c = 1/i

except Exception as e:

    print(e)
    exit()

finally:

     print("The Program ends here.")

print("Thanks for Using the Program")
```

The code in `finally` gets executed if either try or execute gets executed.

What makes it different is that, even it we end the program in try or execpt statement, it still gets executed

---

## Global Keyword

Global variable are variables which are used anywhere within the program.

Local Variable are variables which are used only inside where it is defined

Even If they have the same name, both of them are seperate variable and do not have any connection between them.

```py
a = 36 # This a is global variable
def fun1():
    a = 8 # This a is local variable
    return a
print(fun1())
print(a)
```

In order to use a global variable inside a funtion or class or object, `global` keyword is used.

```py
b = 100
d = 500
class cls:
    def __init__(self):
        global b
        b = 50
        d = 250
        print(f"Inside Funtion: {b}")
        print(f"Inside Funtion: {d}")
c = cls()
print(f"Outside Funtion: {b}")
print(f"Outside Funtion: {d}")
```

---

## Enumerate Function and Comprehensions

### Enumerate Function

The `enumerate` function counts the repetition in a loop.

```py
l1 = [3,53,2,False,6.2,"bob"]
```

```py
for index,item in enumerate(l1):
    print(item,index) # The index in for loop should always be written first.
```

The Above Piece of Code does the Same Function as the Below One.

```py
index = 0
for item in l1:
    print(item,index)
    index += 1
```

### Comprehension

It helps in sorting a list by creating another list based on conditions.

This is called List Comprehension

```py
a = [3,6,8,9,32,4,645,1,322,42,54654,2,342,4]
```

```py
b = [i for i in a if i%2==0]
print(b)
```

The Above Piece of Code does the Same Function as the Below One.

```py
b = []
for item in a:
    if(item%2 == 0):
        b.append(item)
print(b)
```

The Same Thing can be done with sets and this is called Set Comprehension.

```py
l = [1,1,2,2,3,3,4,4,4,5,5,6,6,7]
s = {i for i in l}
print(s)
```

---

## Lambda Functions

Lambda functions is used to Simplify any small funtion.

This can be used when a function needs to be passed as an argument.

> **Syntax: functionname = lambda argument1,argument2,.. : returning code**

```py
func = lambda a: a + 100
```

The Above Piece of Code does the Same Function as the Below One.

```py
def func(a):
    return a + 100
```

Multiple arguments can be Added to Lambda Function.

```py
sum = lambda a,b,c: a+b+c
print(sum(200,500,300))
square = lambda a: a*a
print(square(25))
```

---

## Other Methods

### Join Method

`join` method creates a String from Iterable Object(list,tuple etc) and can also add a specific string between them.

```py
l = ['laptop','camera','hard disk','Phone']

sentence1 = " and ".join(l)
sentence2 = "\n".join(l)
print(sentence1)
print(sentence2)
```

The Function is only Applicable for String.

The Elements inside the iterable object must be String.

### Format Method

The `f-string` is updated version of format method.

Since the `f-string` was introduced recently,the older program still has .format method and hasn't been changed.

```py
name = 'Bobby'
company = 'Google'
id = 54321
```

You can either arrange the argument accordingly or type the index number inside the bracket.

```py
a = "Hello, {1}.You are working in {2} and your id is {0}".format(id,name,company)
```

The Above Piece of Code does the Same Function as the Below One.

```py
a = f"Hello, {name}.You are working in {company} and your id is {id}"
```

### Map Method

`map` applies a function to all the items in the input list.

`map` sends all the elements of the list to the function and creates the list with the returned value.

```py
l = [1,2,3,4]

def square(num):
    return num*num
```

> **Syntax: map(functionname,input_list)**

```py
print(list(map(square,l)))
```

The Above Piece of Code does the Same Function as the Below One.

```py
l2 = []

for item in l:
    l2.append(item*item)

print(l2)
```

### Filter Method

`filter` returns the only items in the list for which the function returns `True`.

`filter` send all the elements of list to the function and creates another list with only those elements which returns `True`.

```py
l1 = [1,2,3,4,5,6,5,3,2,4,2,34,4,23,43,42,1,342,343,4,33]

def greater_than_5(num):
    if(num>5):
        return True
    else:
        return False

print(list(filter(greater_than_5,l1)))

```

### Reduce Method

reduce applies a computation of sequential pair of elements

```py
from functools import reduce

sum = lambda a,b:a+b
l2 = [1,2,3,4,5]

val = reduce(sum,l2)
print(val)
```

In the above example,1 and 2 are taken as a and b and the function returns 3.

Later the returned value is taken as a and 3 is taken as b and the funtion returns 6.

This Process is repeated until the last element of the list.

_Note:_ The function used in `reduce` must take atleast 2 arguments.

---

## Extras

### Execution

The Command in Terminal is:

```bash
python fileName.py
```

### PIP

`pip` or Preferred Installer Program is a Module Manager of Python.

#### Install

To Download external module, the `install` Command is Used.

```bash
pip install module_name
```

#### Freeze

`freeze` command returns all the packages or modules installed in the given interpretor along with its version.

```bash
pip freeze
```

You can also create a file with the returned value.

```bash
pip freeze > textfile.txt
```

You can use the a File to download all the extention in another Interpretor.

```bash
pip install -r textfile.txt
```

### Virtual Environment

Virtual Environment creates a copy of old Interpreter or Module and it can be used anytime.

Virtual Environment is similar to system Interpreter but is isolated from the other python environments on the System.

#### Installation

To use a Virtual Environment, we need a package called `virtualenv`.

A new virtual environment can be Created using a command:

```bash
virtualenv projectname/foldername
```

#### Activation

Commands for Activating Virtual Environment is different is each OS.

For Linux\MacOS:

```bash
source projectname/bin/activate
```

For Windows:

```bash
.\projectname\Scripts\activate.ps1 #there are shortcuts using tab
```

_Note:_ The Modules downloaded in System interpreter and virual Environment has no Link.

You have to install the modules again in the interpreter even if one of them has it.

A new Terminal must be Created to change the Interpreter.

You can find _project name_ in the terminal if the Virtual environment is active in that terminal.

Since the Virtual Environment creates another interpretor and also installs new modules, its size is Huge.

You can delete it by deleting the folder you have created.

You can use `exit()` to exit from the Virtual Environment.

---

## References

1. [_Official Python Documentation_](https://docs.python.org/3/tutorial/index.html)

2. [_Python Bootcamp_ - **Stark Security**](https://github.com/starksecurity/Pierian-Data-Complete-Python-3-Bootcamp)

---
