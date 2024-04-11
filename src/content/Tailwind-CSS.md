# Tailwind CSS Reference

## Introduction

Tailwind CSS is basically a Utility-First CSS Framework for rapidly building Custom User Unterfaces. It is a Highly Customizable, low-level CSS Framework that gives you all of the building blocks you need to build designs without any Styles.

### Contents

1. [Installation](#installation)

2. [Square Bracket Notation](#square-bracket-notation)

3. [Directives](#directives)

   - [Apply Directive](#apply-directive)

   - [Layer Directive](#layer-directive)

4. [Tailwind Configuration File](#tailwind-configuration-file)

5. [References](#references)

---

## Installation

Tailwind is compatible with most of the Frameworks like React, Angular and Vue and also with Traditional HTML,CSS and JS Files.

There are Multiple way to Install Tailwind CSS.

1. Play CDN - Development Purpose

   Tailwind can be included using `script` Tag inside the HTML File.

   ```html
   <script src="https://cdn.tailwindcss.com"></script>
   ```

   Configuring the _tailwind.config_ within HTML File is possible as well.

   ```html
   <script>
     tailwind.config = {
       theme: {
         extend: {
           colors: {
             // External Configuration
             clifford: "#da373d",
           },
         },
       },
     };
   </script>
   ```

2. Tailwind CLI - Production Purpose

   Tailwind can be installed using _Node Package Manager_.

   Other Modules are also required along with Tailwind

   ```bash
   npm install -D tailwindcss postcss autoprefixer
   ```

   _tailwind.config.js_ File is created and configured to Target the required HTML, CSS and JS File.

   To create Tailwind and PostCSS Configuration, Tailwind CLI is used.

   ```bash
   npx tailwindcss init -p
   ```

   This can be done inside the _content_ Array.

   ```js
   /** @type {import('tailwindcss').Config} */
   module.exports = {
     // content: ["./src/**/*.{html,js}"],
     content: ["*"],
     theme: {
       extend: {},
     },
     plugins: [],
   };
   ```

   The CSS File named _style.css_ is Created.

   ```css
   /* style.css File */
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

   The _input.css_ and is linked with the HTML File.

   ```html
   <link rel="stylesheet" href="style.css" />
   ```

---

## Square Bracket Notation

Sqaure Brackets are used to give Custom Values to any Property.

_Example:_

```html
<div class="mx-[32px]">Hello World!</div>
```

In above code, the Custom value for the Margin is Given.

The Notation supports any Unit like rem,em,vh etc

```html
<div class="before:content-['Hello_World']">...</div>
```

In above code, Custom Content is given to place it before the `div`.

## Directives

### Apply Directive

Apply Directive is used to reduce the Rendundancy of Multiple Tailwind Classes.

A single class can hold Multiple Tailwind classes. This class can be Applied to any Element.

```css
/* style.css */

.my-class {
  @apply text-white bg-black text-sm px-5 my-2;
}
```

Custom classes can be Placed Either above or below the `@tailwind utilites` based on Requirements.

### Layer Directive

Layer Directive helps in Appyling a Custom Defined Class in required Layer.

The Layers are _base_, _components_, _utilities_.

```css
/* style.css */

@layer components {
  .my-class {
    @apply text-white bg-black text-sm px-5 my-2;
  }
}
```

## Tailwind Configuration File

The Customzation for Tailwind can be defined within _tailwind.config.js_ File.

```js
module.exports = {
  content: ["*"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

The Above is the Base Configurations of Tailwind.

Custom Classes can be created within the _extend_ Object.

```js
module.exports = {
  content: ["*"],
  theme: {
    spacing: {
      12: "3.15rem", // Overriding Tailwind Class
    },
    extend: {
      // Adding Extra Class
      spacing: {
        13: "3.25rem",
      },
      fontSize: {
        "10xl": ["10rem", { lineHeight: "1.25" }],
      },
    },
  },
  plugins: [],
};
```

A Complete Configuration File can be generated with the Command:

```bash
npx tailwindcss init fileName.js --full
```

---

## References

1. [_Official Tailwind Documentation_](https://tailwindcss.com/docs/installation)

2. [_Tailwind CSS Cheat Sheet_](https://tailwindcomponents.com/cheatsheet/) - **tailwindcomponents**

3. [_The Tailwind CSS Starter Kit_](https://drive.google.com/file/d/1YbsGF8EltbZbecwmaxFIZSd5aMd7kFF7/view) - **JS Mastery**

---
