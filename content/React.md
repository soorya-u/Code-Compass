# React Reference

## Introduction

The React. js framework is an open-source JavaScript framework and library.

It's used for building Interactive User Interfaces and Web Applications quickly and Efficiently with Significantly Less Code than you would with Vanilla JavaScript.

### Contents

1. [Virtual DOM](#virtual-dom)

2. [JSX](#jsx)

3. [Components and Props](#components-and-props)

4. [States and Events](#states-and-events)

5. [Styles](#styles)

6. [References](#references)

---

## Virtual DOM

Virtual DOM is JavaScript Object and is a light weight Representation of Actual DOM.

Virutal DOM is split into Components.

Whenever the Component is Updated, the Actual DOM is Updated to keep it in sync with Virutal DOM.

## JSX

JSX file is a HTML file that supports JavaScript within it.

It is Compiled using Babel.

Curly Braces **( { } )** are used to use the JavaScript within HTML.

Few of the Attributes are different as compared to HTML.

_Example:_

- `class` is replaced by `className`
- `for` is replaced by `htmlFor`
- `tabindex` is replaced by `tabIndex`

The Tags without closing tags should have a Backward Slash **( / )** before **( > )**.

Only One HTML tag can be Returned by the function App.

In order to return Multiple Tag, the _JSX fragment_ **( <> </> )** is Used and the other tags are kept within it.

---

## Components and Props

React Code can be divided into several Components like Navigation Bar, Footer etc and can be Imported to the Main File

```jsx
// This is App.js

import Navbar from "./components/Navbar"; // Imported Component

function App() {
  return (
    <>
      <Navbar userName="Alex" searchLine={str} />
      {/* The Imported Component is Used */}
    </>
  );
}
```

`props` or Properties are the attributes Passed to the Components.

The passed `attributes` are accessed using Period Operator and used as Follows

```jsx
// This is Navbar.js

import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <>
      <a href="/">{props.userName}</a>
      <input type="search" placeholder={props.searchLine} />
    </>
  );
}
```

`props` are Class of Arguments passed as Attributes in its Tags.

`propTypes` are used to Give the Datatypes of the Passed Attributes

An Error is found in Browser when the Attributes does not matches its prop type

```jsx
Navbar.propTypes = {
  userName: PropTypes.string,
  searchLine: PropTypes.string,
};
```

These Default Values are passed when the Attributes are not Passed.

```jsx
Navbar.defaultProps = {
  userName: "Stranger",
};
```

---

## States and Events

States are the Variables whose value can be modified without refreshing the Page.

In order to use States, we have to import `useState`.

```jsx
import { useState } from "react";
```

The State `text` will be initialized to any values Given as Parameters is useState() Function.

```jsx
export default function TextForm(props) {
  const [text, setText] = useState("Enter Text Here...");
  console.log(text);
}
```

The Value of the state cannot be Manipulated Directly. So setText is used.

The function `setText()` is used to change the Value of the State as Follows:

```jsx
setText("New Text");
```

_Example:_

```jsx
const handleOnChange = (event) => {
  console.log("Text Area was Edited");
  setText(text.toUpperCase()); //Allows us to Change the State `text`
};
```

We can Also change the State of Variable based on the Previous State.

```jsx
export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>;
      <h1>{count}</h1>;
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>;
    </>
  );
}
```

---

## Effects

Similar to States, Effects are also Imported from React Library.

```jsx
import { useEffect } from "react";
```

Effects contains Code which is Called when the Particular Event Occurs.

Effects intake a Array called _Dependency Array_.

Whenever the Variable present in the Dependency Array is Changed, the `useEffect()` Function is called.

_Example:_

```jsx
export default function FirstPage() {
  useEffect(() => {
    alert("Welcome to the Page");
  }, []);
}
```

In the Above Code, `useEffect()` is Called whenever the Page is Loaded.

```jsx
export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count has been Changed");
  }, [count]);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={setCount((prevCount)=>prevCount++;)}>++</button>
    </>
  );
}
```

In the Above Code, `useEffect()` is Called whenever the variable _count_ is Changed.

---

## Styles

Styles are created using an Object.

The Attributes of CSS are written in Camel Case without Hyphen **( - )**.

`useState` can be Used as shown below to change CSS without reloading the Page.

```jsx
const [letStyle, setLetStyle] = useState({
  color: "black",
  backgroundColor: "white",
  border: "0.5px solid black",
});

const switchMode = () =>
  setLetStyle({
    color: "white",
    backgroundColor: "black",
    border: "0.5px solid white",
  });
```

The Creates Styles are used as Follows:

```jsx
export default function About() {
    return (
        <div style={letStyle} >
            <button onClick={switchMode}>
                About You
            <button>
        </div>
    )
}
```

---

## References

1. [_React Dev_](https://react.dev/)

2. [_The Ultimate React.js Guide_](https://drive.google.com/file/d/1tVDVyMNv5VxdoL6xgpr7AAAVaUZhv2WV/view) - **JS Mastery**

---
