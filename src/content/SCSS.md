# SCSS Reference

## Introduction

Sass or Syntactically Awesome Stylesheet is a CSS pre-processor to process SCSS syntax before compiling to CSS and rendering the elements on the web page.

The Extension of the File is **.scss** .

### Contents

1. [Variables](#variables)

2. [Maps](#maps)

3. [Nesting](#nesting)

4. [Partials](#partials)

5. [Function Decorator](#function-decorator)

6. [Mixin Decorator](#mixin-decorator)

7. [If-Else Decorator](#if-else-decorator)

8. [Extend Decorator](#extend-decorator)

9. [Math Operations](#math-operations)

10. [Reference](#reference)

---

## Variables

Variables are used to store value of a property that if repeatedly used.

Variable in SCSS are Declared using **$**.

The Scope of Variables are Global.

```scss
$foreground-color: ghostwhite;

body {
  background-color: $foreground-color;
}
```

SASS Variables Apply Color Directly rather than using CSS Variables during Compilation.

```css
/* Final Result */

body {
  background-color: ghostwhite;
}
```

---

## Maps

Maps are similar to that of Objects.

They are used to store key Value Pairs.

```scss
$font_weights: (
  "small": 2px,
  "medium": 5px,
  "large": 10px,
);
```

`map-get()` Function is used to get the Value using Key from the Created Maps.

```scss
h1 {
  border: map-get($map: $font_weights, $key: small) solid blue;
}
```

---

## Nesting

When the Elements are Within One another, we can nest one Element within Another as the Elements are arranged in HTML.

```html
<body>
  <div>
    <p>
      Lorem ipsum dolor sit amet.
      <sub>Lorem, ipsum.</sub>
    </p>
  </div>
</body>
```

The Correcsponding Elements can be Designed as given Below.

```scss
div {
  background-color: black;
  height: 50vh;
  width: 50vw;

  p {
    font-size: large;
    color: white;

    sub {
      color: red;
    }
  }
}
```

We can use **&** to refer to the Parent's Class Name or ID.

In order to Target the Child element within the Parent, we use **#{'{&}'}**

```scss
.main {
  background-color: lightblue;
  height: 70vh;
  width: 50vw;

  &-para {
    // This is Compiled as `.main-para`
    font-size: x-large;
    color: maroon;
  }

  #{&}-sup {
    // This is Compiled as `.main .main-sup`
    font-size: normal;
    color: blue;
  }

  &:hover {
    // This is Compiled as `.main:hover`
    background-color: black;
  }
}
```

---

## Partials

Partial is a Scss File with an Underscore Behind the name.

Example: _\_demo.scss_

The Partial acts as a Module for other Scss File.

It does not generate any Compiled CSS File.

Once a Partial File is Imported, all its Properties including Variables and Maps are Imported.

These Maps and Variables are Reusable.

Partials can be Imported using `@import` Directive.

During the import, the underscare and the File Extension is Neglected.

```scss
// main.scss
@import "./config", "./another";
```

The Partial Files are as Follows

```scss
// _config.scss File

$foreground-color: ghostwhite;
$background-color: black;

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
```

```scss
// main.scss

body {
  background-color: $background-color;
  color: $foreground-color;
}
```

---

## Function Decorator

Functions are similar to any other Function in other Programming Language.

It takes Parameter as Variables and returns certain Value.

We use `@function` Decorator to Create a Function and `@return` Decorator to return a Property.

```scss
$width-size: (
  "quarter": 25vw,
  "half": 50vw,
  "half-quarter": 75vw,
  "full": 100vw,
);

// Function Definition

@function getWidthPixels($weight-name) {
  @return map-get($map: $width-size, $key: $weight-name); // Usage of Parameter
}

.main {
  // Function Usage
  width: getWidthPixels(quarter);
}
```

---

## Mixin Decorator

Mixin is Used Group the Common Properties that is frequently used.

If Any Element require all the Property present in mixin, then we include the mixin in that element.

Parameter can also be passed to Mixin similar to Function.

We use `@mixin` Decorator to create mixin and `@include` Decorator to add the Mixin.

```scss
// Mixin Definition
@mixin flexCenter($direction) {
  display: flex;
  flex-direction: $direction; // Usage of Parameter
  justify-content: center;
  align-items: center;
}

body {
  background-color: ghostwhite;
  @include flexCenter(row); // Usage of Mixin
}
```

`@content` Decorator to add Custom Property wihin Mixin.

Using Content, we can define the Extra Properties during Usage of Mixin, rather than in Mixin Definition.

```scss
// Mixin Definition
@mixin short($width: $short-width) {
  @media (max-width: $short-width) {
    @content; // Any other Code can be Added here
  }
}

body {
  @include short {
    // Usage of Mixin
    background-color: red; // Usage of Content
    @include flexCenter(column);
  }
}
```

---

## If-Else Decorator

If and Else Conditional Statement are similar to that of JavaScript.

`@if`, `@else if` and `@else` Decorators are used to check the Conditions.

```scss
$background-color: white;
$foreground-color: black;

@mixin theme($dark: false) {
  @if $dark {
    background-color: darken($background-color, 100%);
    color: lighten($foreground-color, 100%);
  } @else if ($dark: true) {
    background-color: $background-color;
    color: $foreground-color;
  } @else {
    background-color: $background-color;
    color: $foreground-color;
  }
}

body {
  @include theme(true);
}
```

---

## Extend Decorator

Extend is used to Copy all the Properties of an element to another Element.

This can be done with the help of `@extend` Decorator.

The Extended Properties can be Overwritten.

```scss
.head {
  background-color: aqua;
  color: maroon;

  &:hover {
    background-color: black;
    color: white;
  }
}

.main {
  @extend .head; // The Style within the Class is Extended
  background-color: chocolate; // Overwriting Properties
  background-color: lemonchiffon;
}
```

---

## Math Operations

We can Perform Math Operations Directly in SCSS rather than using `calc()` Function of CSS.

But unlike `calc()`, we cannot mix match the types.

All Arithmetic, Relational and Logical Operators are Supported.

```scss
body {
  width: 80%-40%;
  height: 80%-40px; // Causes Error
}
```

---

## Reference

1. [_Official Sass Documentation_](https://sass-lang.com/documentation/)

---
