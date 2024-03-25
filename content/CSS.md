# CSS Reference

## Introduction

CSS is the acronym of Cascading Style Sheets. CSS is a computer language for laying out and structuring Web Pages (HTML or XML).

The Extension of the File is **.css** .

### Contents

1. [Comments](#comments)

2. [Adding CSS to HTML](#adding-css-to-html)

3. [HTML Class and ID Attributes](#html-class-and-id-attributes)

4. [Selectors](#selectors)

   - [Precedence of Selectors](#precedence-of-selectors)

   - [Important Keyword](#important-keyword)

5. [Colors](#colors)

6. [Background Properties](#background-properties)

   - [Background Color](#background-color)

   - [Background Image](#background-image)

   - [Background Size](#background-size)

   - [Background Position](#background-position)

   - [Background Attachment](#background-attachment)

   - [Background Shorthand](#background-shorthand)

7. [Box Model](#box-model)

   - [Dimensions](#dimensions)

   - [Borders](#borders)

8. [Display Property](#display-property)

9. [Text Properties](#text-properties)

   - [Text Align](#text-align)

   - [Text Decoration](#text-decoration)

   - [Text Transform](#text-transform)

   - [Line Height](#line-height)

10. [Font Properties](#font-properties)

    - [Font Family](#font-family)

    - [Font Size](#font-size)

    - [Font Style](#font-style)

    - [Font Weight](#font-weight)

11. [Size](#size)

12. [Position Property](#position-property)

13. [z-index Property](#z-index-property)

14. [Float and Clear Properties](#float-and-clear-properties)

15. [Flexbox](#flexbox)

    - [Flex Container Properties](#flex-container-properties)

      - [Flex Direction](#flex-direction)

      - [Flex Wrap](#flex-wrap)

    - [Flex Item Properties](#flex-item-properties)

      - [Order](#order)

      - [Align Self](#align-self)

      - [Flex Grow](#flex-grow)

      - [Flex Shrink](#flex-shrink)

16. [Grid](#grid)

    - [Grid Container Properties](#grid-container-properties)

      - [Grid Template Columns](#grid-template-columns)

      - [Grid Template Rows](#grid-template-rows)

      - [Grid Column Gap](#grid-column-gap)

      - [Grid Row Gap](#grid-row-gap)

      - [Grid Gap](#grid-gap)

      - [Justify Content](#justify-content)

      - [Align Content](#align-content)

    - [Grid Item Properties](#flex-item-properties)

      - [Grid Column](#grid-column)

      - [Grid Row](#grid-row)

17. [Media Queries](#media-queries)

18. [Transform](#transform)

    - [Transform Properties](#transform-properties)

      - [Transform Origin](#transform-origin)

    - [Transform Methods](#transform-methods)

      - [2D Transform Methods](#2d-transform-methods)

      - [3D Transform Methods](#3d-transform-methods)

19. [Transition and its Properties](#transition-and-its-properties)

    - [Transition Property](#transition-property)

    - [Transition Duration](#transition-duration)

    - [Transition Timing Function](#transition-timing-function)

    - [Transition Delay](#transition-delay)

    - [Transition Shorthand](#transiton-shorthand)

20. [Animation and its Properties](#animations-and-its-properties)

    - [Animation Name](#animation-name)

    - [Animation Duration](#animation-duration)

    - [Animation Timing Function](#animation-timing-function)

    - [Animation Delay](#animation-delay)

    - [Animation Iteration Count](#animation-iteration-count)

    - [Animation Direction](#animation-direction)

    - [Animation Shorthand](#animation-shorthand)

21 [References](#references)

---

## Comments

Comments are Piece of Line in the Program that is Ignored by the Compiler or Interpreter.

```css
/* The Comment is CSS is written */
```

## Adding CSS to HTML

There are 3 Ways to Add CSS file to HTML File

1. First Method - Using `<style>` tag

   The `<style>` tag is used inside `<head>` tag.

   ```html
   <style>
     background-color: rgb(59, 202, 202);
   </style>
   ```

2. Second Method - External CSS

   A CSS file can be linked to HTML by using link tag.

   The `<link>` tag is used inside `<head>` tag.

   ```html
   <link rel="stylesheet" href="style.css" />
   ```

   ```css
   /* style.css File */
   body {
     background-color: lightgray;
   }
   ```

3. Third Method - Inline CSS

   In this method, CSS is added as an attibute using style attribute.

   Inline Style has more priority than internal and external Style

   ```html
   <div style="background-color: red;">Hello World</div>
   ```

---

## HTML Class and ID Attributes

Each HTML element can have both `id` and `class`.

ID is unique to each element and serves as Identifier.

2 Elements cannot share a single ID.

ID can be given by using **#**.

```html
<div id="first"></div>
```

Class acts as group.

There can be multiple element under same class or a single element can belong to multiple class.

Class can be given by using **\.**.

```html
<div class="c1 c2 c3"></div>
```

`div` belongs to class c1, c2 and c3.

---

## Selectors

Selectors are used to Select the Element from the HTML.

1. Element Selector

   The Element is accessed using the Element name.

   The code applies to all the particular element in that page.

   ```css
   body {
     background-color: lightblue;
   }

   h1 {
     color: brown;
   }

   div {
     color: darkblue;
   }
   ```

2. ID Selector

   In this, the element is accessed using its ID

   The Element is accessed using **#** followed by ID of the Element.

   This applies to only that particuler Element as the IDs are unique to each element.

   ```css
   #id1 {
     background-color: blueviolet;
     color: antiquewhite;
   }
   ```

3. Class Selector

   In this, the elements are accessed using its Class

   The Elements are accessed using **.** followed Class name.

   A single element can contain multiple classes and also a single class can contain multiple element.

   ```css
   .c1 {
     background-color: darkgrey;
   }
   ```

4. Attribute Selector

   In this, the elements are accessed based on the Attribute Assigned to a Tag

   The Elements are accessed using Attribute followed by **=** and its corresponding Value within **[ ]** .

   ```html
   <h1 data-x="a">Hello World!</h1>
   ```

   ```css
   [data-x="a"] {
     background-color: darkgrey;
   }
   ```

5. Universal Selector

   **( \* )** is used as universal selector i.e it is used to select all the elements:

   ```css
   * {
     margin: 0;
   }
   ```

### Precedence of Selectors

The Precedence of Selectors tells the hierarchy of the Selectors.

Whenever there is a Conflict betwwen poperties within different Selectors, the precedence is Followed.

The Precedency is as Follows:

Inline Style &rarr; ID Selector &rarr; Class and Attribute Selector &rarr; Element Selector &rarr; Universal Selector.

### Important Keyword

The Keyword `!important` is capable of overriding any Property despite the Precedence of Selectors.

_Example:_

```css
.red {
  color: red !important;
}
```

_Note:_

We can Group the Selectors:

```css
h1,
h2,
h3,
#id1,
.c3 {
  color: white;
}
```

We can also use `element.class` and `element#id`:

```css
div.c2 {
  background-color: white;
}
```

If an Element has Multiple Classes and those Classes has similar set of codes, then the changes in last class is applied.

```css
.red {
  color: red;
}
.blue {
  color: blue;
}
```

```html
<img class="red blue" />
```

The Color is Blue

---

## Colors

Types of Colour Values

1. **RGB** -> Specifies colour using the value of Red,Green and Blue

2. **Hex Code** -> Specifies the colour using Hex Codes.

3. **HSL** -> Specifies the colour using Hue,Saturation and Lightness Values.

4. **Colour Name** -> Specifies using Name of Color

_Note:_ **RGBA** and **HSLA** can also be used where A stands for _alpha_ which is used to control Opacity.

```css
.class1 {
  background-color: black;
  height: 100px;
  color: rgb(255, 255, 255);
}
.class2 {
  background-color: #b5b5b5;
  color: hsl(17, 15%, 20%);
}
```

---

## Background Properties

1. ### Background Color

   `background-color` specifies the colour of the background of a tag.

   ```css
   .c1 {
     background-color: lightblue;
   }
   ```

2. ### Background Image

   `background-image` is used to set an Image as a Background.

   The Image is repeated both Horizontally and Vertically.

   We can use Background Repeat Property control the repetations.

   - repeat-x : To repeat only horiontally

   - repeat-y : To repeat only vertically

   - no-repeat : To repeat only once

   - space : To add space between images adn display all images fully.

   ```css
   .c2 {
     background-image: url(bg.jpg);
     background-repeat: repeat;
   }
   ```

3. ### Background Size

   `background-size` edits the Background Size.

   Properties Values are:

   - cover - used to fit the image completely leaving no space.

   - contain - used to fit the image while also maintaining the aspect ratio of the image.

   - auto - displays the original size.

   - height and width - used to set height and width.If one of the value is given,the other is set automatically as per aspect ratio.

   ```css
   .c2 {
     background-image: url(bg.jpg);
     background-size: auto;
   }
   ```

4. ### Background Position

   `background-position` sets the position of image in the element.

   ```css
   .c3 {
     background-image: url("image.png");
     background-position: top left;
   }
   ```

5. ### Background Attachment

   `background-attachment` defines a scrollable/non-scrollable character of a background image.

   - scroll:contents individually or along with the background

   - fixed: only the contents can be scrolled

   - local: scrolls both content and background

   ```css
   .c3 {
     background-image: url("image.png");
     background-attachment: fixed;
   }
   ```

6. ### Background Shorthand

   `background` is the combination of All Background Properties.

   ```css
   .c4 {
     background: red url("waterfall.jpg") no-repeat fixed right top;
   }
   ```

---

## Box Model

### Dimensions

`height` and `width` sets the height and width of the Element.

The Height and width can be set in `pixels`, `cm`, `inches` etc..

Padding,Border and Margin is set on all directions: `top`, `bottom`, `right`, `left` but it can be given individually and also using short hand.

Total Height = Height + Top and Bottom Padding + Top and Bottom Border+Top and Bottom Margin.

```css
.c1 {
  height: 53px;
  width: 568px;
  background-color: red;
  color: white;
  padding: 15px /*top*/ 10px /*right*/ 13px /*bottom*/ 17px /*left*/;
  border-right: 10px solid greenyellow;
  border-left: 10px solid greenyellow;
  border-top: 10px solid blue;
  border-bottom: 10px solid blue;
  margin: 15px /*Top and Bottom*/ 15px /*Right and Left*/;
}
```

### Borders

Border has 3 basic properties- `width`, `style` and `color`.

Different Properties can be set for different sides by using shorthand or by mentioning individually.

`border-radius` is a property through which the border can be made in a circular shape.

```css
.bord {
  border-width: 5px;
  border-style: solid;
  border-color: black red purple hotpink;
  border-top-style: double;
  border-radius: 35px;
}
```

---

## Display Property

`display` Property is used to make an element either block or inline element.

1. inline

   Takes the space required by the element.

   No linebreaks are present before and after the element.

   `width`, `height`, `margin-top`, `padding-top`,`margin-bottom`, `padding-bottom` cannot be set.

   ```css
   .box {
     display: inline;
   }
   ```

2. block

   Takes full width and leaves line before and after the element.

   ```css
   .box {
     display: block;
   }
   ```

3. inline-block

   It is the same as inline but the `width`, `height`,`margin-top`, `padding-top`, `margin-bottom`, `padding-bottom` can be set.

   ```css
   .box {
     display: inline-block;
   }
   ```

4. none

   The element is completely removed from the DOM.

   It shouldnt be mistaken with `visibility: none` where the all the properties are gone but the space remains in the DOM.

   ```css
   .box {
     display: none;
   }
   ```

_Example:_

```css
.box1 {
  display: inline-block;
}
```

## Text Properties

1. ### Text Align

   Aligns the Text in the Element.
   _Example:_ `right`, `left`, `center` etc

   ```css
   .c1 {
     text-align: end;
   }
   ```

2. ### Text Decoration

   Edits the Text in the element

   ```css
   .c1 {
     text-decoration: line-through wavy red;
     /* or */
     text-decoration: underline dotted red;
   }
   ```

3. ### Text Transform

   Used to specify Uppercase and Lowercase in a Text.

   ```css
   .c1 {
     text-transform: capitalize;
   }
   ```

4. ### Line Height

   `line-height` is used to Add Line Spacing to the Text in the Element.

   ```css
   div {
     line-height: normal;
     /* or */
     line-height: 1.6;
     /* or */
     line-height: 80%;
     /* or */
     line-height: 200%;
   }
   ```

---

## Font Properties

1. ### Font Family

   Specifies the Particular Font of the Text

   _Generic Family:_ Sets the Font that the browser has been set to for the Text.

   Single Quote is Required for the name of Font which has space between them.

   Multiple Font is set to make sure the later font can be applied if the former cannot be found.

   ```css
   .c2 {
     font-family: "Segoe UI", Tahoma, Verdana, sans-serif;
   }
   ```

2. ### Font Size

   Specifies the size of Font

   ```css
   .c2 {
     font-size: 19px;
   }
   ```

3. ### Font Style

   Specifies the style of Font.

   ```css
   .c2 {
     font-style: oblique 15deg;
     font-weight: 800;
   }
   ```

4. ### Font Weight

   Specifies the thickness of the Font.

   ```css
   .c2 {
     font-weight: 800;
   }
   ```

---

## Size

There are Several Units for Size:

1. Pixels(`px`)

   The Image is Set in Pixels but it does not make the Website Responsive.

   The Size Remains the Same for every Devices.

2. Em(`em`)

   It returns the font size of Parent Element.

3. Rem(`rem`)

   It returns the Font size of Root Element(HTML Tag).

4. Percentage(`%`)

   It Sets the Height and Width relative to Parent Element

5. View Width(`vw`) and View Height(`vh`)

   It sets the Width and Height based on the Device used to open the Website respectively.

_Example:_

```css
.pixelWidth {
  width: 1000px;
  height: 250px;
  font-size: 34px;
}

/* Child of Above Element */

.percentAndEmWidth {
  width: 50%; /*50%=50% of 1000px*/
  height: 50%; /*50%=50% of 250px*/
  font-size: 0.5em; /*0.5em = 0.5x34 = 17*/
}

.viewWidth {
  background-color: aqua;
  width: 50vw;
  height: 50vh;
}
```

`min-width` and `max-width is the boundry for the Width.

`min-height` and `max-height` is the boundry for the Height.

_Example:_

```css
.min-max-width-height {
  min-width: 25vw;
  max-width: 75vw;
  min-height: 50vh;
  max-width: 100vh;
  width: 50vw; /* Width should be between min-width and max-width */
  height: 75vh; /* Height should be between min-height and max-height */
}
```

---

## Position Property

`position` Property is used to manipulate the location of an element Following are the possible values.

- `static`

  Default Position

- `relative`

  Position is altered from its base initial position to `top`, `bottom`, `left` or `right`.

  ```css
  main {
    position: relative;
  }
  ```

- `absolute`

  Its Position is altered with respect to its previous non static element.

  If there is no previous non static element, it acts as fixed.

  ```css
  main {
    position: absolute;
  }
  ```

- `fixed`

  It is similar to absolute but moves only with respect to page.

  Fixed position is fixed and does not move even if scrolled.

  ```css
  main {
    position: fixed;
  }
  ```

- `sticky`

  The Element is placed based on user's Scrolling Position.

  ```css
  main {
    position: sticky;
  }
  ```

_Example:_

```css
.c2 {
  position: relative;
}

/*If c2 is Static, c2a moves wrt to page that is top of the page.*/

/*If c2 is relative, c2a moves wrt to c2 that is top of the container c2.*/

.c2a {
  height: 200px;
  width: 200px;
  position: absolute;
}
```

---

## z-index Property

`z-index` is used to overlap the required element over other.

Higher z-index element overlaps the lower z-index element.

```css
header {
  z-index: 2;
}
```

---

## Float and Clear Properties

`float` Property is used to move the Element to either left or right.

It is kind of Similar to `display` Property.

`clear` Property is used to make sure there is no other Floating Element to either its left or right.

_Example:_

```css
.c1 {
  float: left;
}

.c2 {
  float: right;
  clear: left;
}
```

---

## Flexbox

Flexbox Provides a better layout to arrange the Contents inside an element.

Flex Container or Flex box is a container which holds the elements within it.

The Elements within flex container is called flex items.

Initializing a Flexbox: `display:flex;`

Flex Containers has 2 axis: Main Axis and cross axis.

The direction of axes depends on Flex Direction.

Main Axis is the axis along which the Flex Items are rendered.

### Flex Container Properties

Flex Properties on Flex Containers:

1. #### Flex Direction

   `flex-direction` defines the direction towards which the Items are Arranged.

   Values can be:

   - `row`

     Arranges the Element from Right to Left.

     This is the Default

   - `row-reverse`

     Arranges the Element from Left to Right.

   - `column`

     Arranges the Element from Top to Bottom.

   - `column-reverse`

     Arranges the Element from Bottom to Top.

2. #### Flex Wrap

   `flex-wrap` defines if the size of flex items should be intact or flexible when the dimensions of the Flex Box is changed.

   Values are:

   - wrap

     Wraps the Element in Multiline

   - nowrap

     Does not Wrap

   - wrap-reverse

     Wraps the Element in Multiline in Opposite manner.

   - justify-content

     Defines Alignment of Flex Items along main axis(Horizontally).

   - align-items

     Defines Alignment of Flex Items along cross axis(Vertically).

   - align-content

     considers all the Flex Items as one Entity and aligns it.

_Example:_

```css
.c1 {
  height: 50vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center; /* Either align-item or align-content is used */
  background-color: lightgrey;
}
```

### Flex Item Properties

Flex Properties for Flex Items:

1. #### Order

   `order` sets the order in which the items appear in the flex container.

   Default Order is 0.

2. #### Align Self

   `align-self` sets the Alignment of that Flex Item

   Overrides the Flex-Box Alignment

3. #### Flex Grow

   `flex-grow` defines the Ability for the Flex item to grow

4. #### Flex Shrink

   `flex-shrink` defines the Ability for the Flex item to shrink as compared to rest of the flex items

   It works when the Flex items Overflows.

_Example:_

```css
.c1a {
  border: 2px solid cyan;
  order: 1;
  flex-grow: 1;
}
.c1b {
  border: 2px solid gold;
  order: 2;
  flex-grow: 3;
}
.c1c {
  border: 2px solid aquamarine;
  align-self: flex-start;
  flex-grow: 1;
}
.c1d {
  border: 2px solid tomato;
  order: -1;
  flex-grow: 1;
}
```

---

## Grid

Grid is one of the values of display similar to Flex.

All Children become the grid items.

### Grid Container Properties

1. #### Grid Template Columns

   `grid-template-columns` is used to set columns width in Grid

   Values: `length`(width of 1st column) `length`(width of 2nd column) and so on.

2. #### Grid Template Rows

   `grid-template-rows` is used to set row height in Grid

   Values: `length`(height of 1st row) `length`(height of 2nd row) and so on

3. #### Grid Column Gap

   `grid-column-gap` is used to give Gaps betwwen Columns

   Values: `length`

4. #### Grid Row Gap

   `grid-row-gap` is used to give Gaps betwwen Rows

   Values: `length`

5. #### Grid Gap

   `grid-gap` is a shorthand Property for `grid-row-gap` and `grid-column-gap` Properties.

   Values: `length`(row gap) `length`(column gap)

   or Values: `length`(row and column gap)

6. #### Justify Content

   `justify-content` is used to Horizontally align the grid items inside Container.

7. #### Align Content

   `align-content` is used to Vertically align the grid items inside Container.

_Example:_

```css
.c1 {
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-template-rows: auto auto;
  justify-content: space-evenly;
  align-content: space-evenly;
  grid-gap: 10px 10px;
  /* or */
  grid-row-gap: 10px;
  grid-column-gap: 15px;
}
```

### Grid Item Properties

1. #### Grid Column

   grid-column is used to set the column size

   The Space between the Grid Items is considered as Lines.

   Value: `number/number`(starting line/ending line)

2. #### Grid Row

   grid-row is used to set the Row Size

   The Space between the Grid Items is considered as Lines.

   Value: `number/number`(starting line/ending line)

_Example:_

```css
.c1a,
.c1b,
.c1c,
.c1d,
.c1e,
.c1f,
.c1g,
.c1h,
.c1i,
.c1j {
  background-color: lightgray;
  border: 2px solid black;
}

.c1a {
  grid-column: 1/5;
  grid-row: 1/2;
}
.c1e {
  grid-column: 1/3;
  grid-row: 3/5;
}
```

---

## Media Queries

Media Queries is used to apply a CSS Property only when the particular condition is met.

```css
.c1 {
  color: black;
  height: 15vh;
}
```

The Below Condition only when the width is below **1000px** and the height is below **500px**.

Logical `and` and Logical `or` can be used with multiple conditions.

Logical `not` can also be used.

```css
@media (max-width: 1000px) and (max-height: 500px) {
  body {
    background-color: black;
  }
  .c1 {
    color: white;
  }
}
```

---

## Transform

Transforms are used to rotate, move, skew or scale elements.

They are used to create a 3-D Effect.

Its Properties are used to add different kinds of 2D and 3D Transforms.

### Transform Properties

1. #### Transform Origin

   `transform-origin` allows to set the Axis of the Element.

   Default `transform-origin` property is set to the centre of the Element.

### Transform Methods

#### 2D Transform Methods

1. `translateX()`

   Arguments -> x-axis position

2. `translateY()`

   Arguments -> y-axis position

3. `translate()`

   Arguments -> x-axis position,y-axis position

4. `rotate()`

   Arguments -> no.-of-turns (or) degree

5. `scaleX()`

   Arguments -> Scale Multiplier

6. `scaleY()`

   Arguments -> Scale Multiplier

7. `scale()`

   Arguments -> Scale Multiplier of X,Scale Multiplier of Y

8. `skewX()`

   Arguments -> Degree

9. `skewY()`

   Arguments -> Degree

10. `skew()`

    Arguments -> Degree of X,Degree of Y

11. `matrix()`

    It is a ShortHand for all above Operation
    Arguments -> (`scaleX()`, `skewY()`, `skewX()`, `scaleY()`, `translateX()`, t`ranslateY()`).

#### 3D Transform Methods

1. `rotateX()`
2. `rotateY()`
3. `rotateZ()`

_Example:_

```css
.c1 {
  transform: scaleX(2);
  transform: scaleY(2);
  /* or */
  transform: scale(0.75, 0.75);
}

.c2 {
  transform: skewX(10deg) skewY(10deg);
  /* or */
  transform: skew(10deg, 10deg);
}

.c3 {
  transform: scaleX(2);
  transform: scaleY(2);
  /* or */
  transform: scale(0.75, 0.75);
}

.c4 {
  transform-origin: 0;
  transform: translate(50vw, 0.5vh) rotate(30deg);
}

.c5 {
  transform: translateY(25vh) rotateZ(45deg);
}

.c6 {
  transform: translateY(45vh) rotateX(60deg);
}
```

---

## Transition and its Properties

Transitions are used to change the Property Values smoothly over a Given Time Period.

1. ### Transition Property

   `transition-property` specifies the Property which is to be transitioned

   Value - Property(height,width)

2. ### Transition Duration

   `transition-duration` sets the total Time of Duration

   Value - time(seconds)

3. ### Transition Timing Function

   `transition-timing-function` determines Speed Curve of Transition.
   Value - function(ease-in,ease-out)

4. ### Transition Delay

   `transition-delay` is the time After which the Transition Should be Initiated.
   Value - time(seconds)

5. ### Transiton Shorthand

   `transition` is a short hand property for all above Transitions.

   Value - (Property) (Duration) (Function) (Delay)
   transition property can be used for multiple properties seperated by comma **( , )**

```css
.c1 {
  height: 30vh;
  width: 30vw;
  transition-property: height width background-color color border;
  transition-duration: 5s;
  transition-timing-function: ease-out;
  transition-delay: 2s;
}

.c1:hover {
  height: 60vh;
  width: 60vw;
  background-color: black;
  color: white;
  border: 2px solid white;
}

#myImage {
  height: 25%;
  width: 25%;
  transition: height 5s cubic-bezier(0.19, 1, 0.22, 1), width 3s cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
```

---

## Animations and its Properties

Animations are used to animate Properites.

`@keyframes` is used to create an Animation.

_Example:_

```css
@keyframes WidthChange {
  from {
    width: 25vw;
  }
  to {
    width: 40vw;
  }
}
```

1. ### Animation Name

   `animation-name` is the name of the Animation to be added.

2. ### Animation Duration

   `animation-duration` is the time for Completion of the Animation

3. ### Animation Timing Function

   `animation-timing-function` determines Speed Curve of Animation.

4. ### Animation Delay

   `animation-delay` is time After which the Animation Should be Initiated.

5. ### Animation Iteration Count

   `animation-iteration-count` is the times of Repeations of the Animation

6. ### Animation Direction

   `animation-direction` decidies the Flow of Animation.

7. ### Animation Shorthand

   animation is a short hand property used for all above properties

   Values - (name) (duration) (timing-function)
   (delay) (iteration-count) (direction)

```css
@keyframes BackgroundChange {
  from {
    background-color: lightblue;
    color: black;
  }
  to {
    color: white;
    background-color: darkblue;
  }
}

.c1 {
  background-color: coral;
  animation-name: BackgroundChange;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-delay: 4s;
  animation-iteration-count: infinite;
  animation-direction: alternate-reverse;
  float: left;
}

#img1 {
  width: 25vw;
  animation: BackgroundChange 7s cubic-bezier(0.19, 1, 0.22, 1) 3s 5 alternate-reverse;
}
```

Changing Animations using Percentage Value

```css
@keyframes rotate {
  25% {
    transform: rotate(0.25turn);
  }
  50% {
    transform: rotate(0.5turn);
  }
  75% {
    transform: rotate(0.75turn);
  }
  100% {
    transform: rotate(1turn);
  }
}

#img2 {
  width: 25vh;
  transform: rotate(0turn);
  transform-origin: 0;
  animation: rotate 2s linear infinite alternate;
}
```

---

## References

1. [_Mozilla CSS Documentation_](https://developer.mozilla.org/en-US/docs/Web/CSS)

---
