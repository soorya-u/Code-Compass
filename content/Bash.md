# Bash Reference

## Introduction

Bash is a command-line interpreter or Unix Shell used to automate the execution of the tasks

The File might not have an extension or the extension might be **.sh**.

### Contents

1. [Shabang](#shabang)

2. [Echo Command](#echo-command)

3. [Execution of Bash Files](#execution-of-bash-files)

4. [Variables](#variables)

5. [Read Command](#read-command)

6. [Operators](#operators)

7. [Let Command](#let-command)

8. [Conditional Statements](#conditional-statements)

   - [If-Else Stament](#if-else-stament)

   - [Case Statement](#case-statement)

9. [Iterative Statements](#iterative-statements)

   - [For Loop](#for-loop)

   - [While Loop](#while-loop)

   - [Until Loop](#until-loop)

10. [Alias Command](#alias-command)

11. [References](#references)

---

## Shabang

Shabang is used to Speicfy the Executable Type.

It is always specified on the top of the File.

```sh
#!/bin/bash
```

---

## Echo Command

`echo` Keyword is used to print on Screen.

```sh
#!/bin/bash

echo "Hello World"
echo 'Hello World'
echo Hello World
```

The above statement is printed on the Screen.

---

## Execution of Bash Files

There are 2 Ways of Executing a BASH File.

1. By using bash Interpreter.

   ```sh
   bash filename.sh
   ```

2. By Providing Executable Permission to the File.

   ```sh
   chmod u+x filename.sh && ./filename.sh
   ```

---

## Variables

Variables are used to Store a Value.

> **Syntax:** variable_name=value

The Created Variables can be used with a **( $ )** sign as Prefix

```sh
#!/bin/bash

score=17
name=Alex

echo $name
echo $score

echo $name has Scored a Marks of $score out of 20.
```

The Output of an Executable Commands can also be stored within a Variable

> **Syntax:** variable_name=$(command)

```sh
host=$(whoami)
echo $host
```

---

## Read Command

The Input from the User can be Read by _read_ command and can be stored in a Variable.

> **Syntax:** read variable_name

```sh
#!/bin/bash

echo "Enter your Name: "
read username
echo Welcome $username
```

---

## Operators

The Relational Operators are Indicated Differently

1. _==_ OR _-eq_ &rarr; Equal
2. _-ge_ &rarr; Greater than or Equal to
3. _-le_ &rarr; Less than or Equal to
4. _!=_ OR _-ne_ &rarr; Not Equal to
5. _-gt_ &rarr; Greater than
6. _-lt_ &rarr; Less than

---

## Let Command

_let_ is the Keyword used while performing an Expression or Operation.

> Syntax: let expression/operation

```sh
a=0
let a++
let a=a+9
echo $a
```

---

## Conditional Statements

Relational Operators can be used to execute Statements that should be executed only when the Conditions are satisfied.

Conditional Statements can be used to do the Above.

### If-Else Stament

_if_ is used to start the If-Else Statement with conditions.

_then_ is used to execute the Statements if condition is True.

_else_ .is used to execute the Statements if condition is False.

_fi_ is used to end the If Statement.

**Syntax:**

```sh
if [ condition ] then
 statements
else
 statements
fi
```

**Example:**

```sh
echo "Enter the Number:"
read number

if [ $number -lt 20 ] then
  echo The Number is Less than 20
else
  if [ $number -gt 20 ] then
    echo The Number is Greater than 20
  else
    echo The Number is Equal to 20
  fi
fi
```

### Case Statement

Case Statement is similar to that of Switch in C or Match in Python.

**Syntax:**

```sh
case $variable_name in

  variable_value_1)
    statement_1
    statement_2
  ;;

  variable_value_2)
    statement_3
    statement_4
  ;;

  *)
    statement_5
esac
```

_case_ and _in_ are keywords.

**( ;; )** is used to End a Condition.

**( \*) )** is similar to that of Default

_esac_ is used to End Case Statement

**Example:**

```sh
echo "Enter a Color(RGYB): "
read color

case $color in
  R)
    echo Red
    ;;
  Y)
    echo Yellow
    ;;
  G)
    echo Green
    ;;
  B)
    echo Blue
    ;;
  *)
    echo Invalid Choice
    ;;
esac
```

---

## Iterative Statements

There are three types of Loops

### For Loop

It is used when the Number of Iteration to be done is known.

**Syntax:**

```sh
for i in values_of_i do
  statements
done
```

**Example:**

```sh
for string in This is Bash Script do # Iterating through String
  echo $string
done
```

```sh
for i in {1..8} do # Iterating through Numbers
  echo $i
done
```

### While Loop

It is used when the number of iterations is Unknown.

**Syntac:**

```sh
while [ condition ] do
  statement
done
```

**Example:**

```sh
i=0
n=9

while [ $i -le $n ] do
  echo The Number is $i
  let i++
done
```

### Until Loop

It is used to execute the loop atleast once.

**Syntax:**

```sh
until [ condition ]
do
 statement
done
**Example:**
```

**Example:**

```sh
i=10

until [ $i == 1 ] do
 echo "$i is not equal to 1";
 i=$((i-1))
done
```

---

## Alias Command

Alias Command is used to make a Shortcut for any command

```sh
alias dir="ls -ltr"

dir
```

---

## References

---
