# HTML Reference

## Introduction

Hyper Text Markup Language or HTML is the standard markup language for creating Web pages used to describe the structure of a Web page.

The Extension of HTML File is **.html** .

HTML is not case sensitive program.You can use capital letters for the tags too,but are not recommended.

### Contents

1. [Structure of HTML](#structure-of-html)

   - [Primary Tags](#primary-tags)

2. [Comments](#comments)

3. [Tags](#tags)

   - [Heading Tags](#heading-tags)

   - [Paragraph Tag](#paragraph-tag)

   - [Anchor Tag](#anchor-tag)

   - [Bold, Italic and Underline Tags](#bold-italic-and-underline-tags)

   - [Break Tag](#break-tag)

   - [Big and Small Tags](#big-and-small-tags)

   - [Horizontal Tag](#horizontal-tag)

   - [Subscript and Superscript Tags](#subscript-and-superscript-tags)

   - [Preformatted Text Tag](#preformatted-text-tag)

   - [Image Tag](#image-tag)

4. [Attributes](#attributes)

5. [Page Layout](#page-layout)

6. [Block and Inline Elements](#block-and-inline-elements)

   - [Block Elements](#block-elements)

   - [Division Tag](#division-tag)

   - [Inline Element](#inline-elements)

   - [Span Tag](#span-tag)

7. [List Tag](#list-tag)

   - [Ordered List](#ordered-list)

   - [Unordered List](#unordered-list)

8. [Table Tag](#table-tag)

9. [Form Tag](#form-tag)

   - [Input Tag](#input-tag)

     - [Text Attribute](#text-attribute)

     - [Radio Attribute](#radio-attribute)

     - [Checkbox Attribute](#checkbox-attribute)

     - [Other Attributes](#other-attributes)

   - [Text Area Tag](#text-area-tag)

   - [Select Tag](#select-tag)

10. [Video and iFrame Tags](#video-and-iframe-tags)

    - [iFrame Tag](#iframe-tag)

    - [Video Tag](#video-tag)

11. [Search Engine Optimization](#search-enigine-optimization)

    - [HTML SEO](#html-seo)

12. [References](#references)

---

## Structure of HTML

**index.html** is a Special Name because it gets opened first as soon as the directory is given.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Document</title>
  </head>
  <body></body>
</html>
```

### Primary Tags

- `<! DOCTYPE html>` -> Specifies this is a HTML5 Document

- `<html>` -> Root of a HTML Page

- `<head>` -> contains Page Metadata(data of the page).

- `<title>` -> contains Title of the Website.

- `<body>` -> contains Main Body of the Page.

---

## Comments

The comments are the lines which are present in code but are not displayed in website.
_Example:_

```html
<!--  write comment here -->
```

---

## Tags

A Tag is container which either contains contents or other tags.

_Example:_ `<body>`

But there are tags which has no content inside it.

_Example:_ `<br>`

> **element = opening tag + content + end tag**

Most of the Tag are always closed.

_Example:_ `<head> & </head>`.

But there are few exceptions.

### Heading Tags

It is Used to mark headings in HTML.

`<h1></h1>` is used to mark headings`

We have from h1 to h6 in order to arrange from most important heading to the least one.

Headings should not be used to make a text thicker or bold.

```html
<h1>List of Books to Read(heading 1)</h1>
<h2>List of Books to Read(heading 2)</h2>
<h3>List of Books to Read(heading 3)</h3>
<h4>List of Books to Read(heading 4)</h4>
<h5>List of Books to Read(heading 5)</h5>
<h6>List of Books to Read(heading 6)</h6>
```

### Paragraph Tag

It is Used to create a Paragraph.

`<p></p>` is used to create paragraph.

```html
<p>There are a lot of books to Read</p>
```

You can use lorem with the number of words in it in order to create a demo paragraph.

```html
<p>lorem30</p>
```

### Anchor Tag

Used to add links to an existing content in a page.

It is used to redirect the user to another page or another Website.

`<a></a>` is an anchor tag

> Syntax: **\<a href="url" target="\_main">Text\</a>**

`href` contains URL.

The `target` attribute is optional.

`target='_main'` this code opens the url in the new Tab.

There are 2 Types of Links that can be Given:

- Absolute Link

  Example for absolute link(can be used worldwide).

  ```html
  <a href="https://google.com" target="_main">
    Click here to go to Google Website.</a
  >
  ```

- Relative Link

  Example for relative link(can be used only in servers or personal computers)

  ```html
  <a href=".\02_redirect test.html">This will redirect you to another page.</a>
  ```

### Bold, Italic and Underline Tags

It is Used to make a text Bold Italic or Underlined respectively.

`<b></b>` for Bold, `<i></i>` for Italic and `<u></u>` for Underline.

```html
<b>This line is Bold</b>
<i>This line is Italic</i>
<u>This line is Underlined</u>
```

### Break Tag

It is used to create line breaks in HTML Document.

`<br>` lines do not have closing tag.

```html
<br />hello<br />
<br />
how are you <br />
<br />
<br />
Nice to meet you
```

### Big and Small Tags

It is used to make a text a bit larger or smaller respectively.

`<big></big>` for big and `<small></small>` for small.

```html
<big>This is a Big Line</big> <small>This is a small Line</small>
```

### Horizontal Tag

It is used to create a horizontal line.

`<hr>` tags do not have closing tag.

```html
<hr />
<hr />
<hr />
```

### Subscript and Superscript Tags

It is used to add Subscript and Superscript respectively.

`<sub></sub>` for subscript nad `<sup></sup>` for superscript.

```html
<p>CO<sub>2</sub> and x<sup>2</sup></p>
```

### Preformatted Text Tag

Since HTML neglects the extra space and new lines we use pre tag to customise the text we write with extra space and new lines

`<pre></pre>` can be used like this.

```html
<pre>
We        can   give 
    extra spaces    and
    new line    
using pre tag   !
</pre>
```

### Image Tag

Used to add images to an html page.

`<img>` does not have ending tag.

> **Syntax: \<img src="imagename(or url)" alt='Name to display if image cant be loaded '>**

`src` contains url or imagename

`alt` contains a text message to display if the Image does not load.

You can also add `width` and `height` attribute to adjust the size of image.

There are 2 Types of Links that can be Given:

- Absolute Link

  Example for absolute link(can be used worldwide).

  ```html
  <img
    src="https://images.unsplash.com/photo-1639425620091-312639de647d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    alt="Waterfall Image"
    width="200px"
    height="100px"
  />
  ```

- Relative Link

  Example for relative link(can be used only in servers or personal computers)

  ```html
  <img
    src="/02_lighthouse.jpg"
    alt="Image of Lighthouse"
    width="200px"
    height="100px"
  />
  ```

_Note_:

- If you set image's height and width,it might be compatible on pc but not on android.Therefore we set either width or height of the image so that the code sets its dimensions based on its aspect ratio.

- If the Image is not in the same directory as code,then the directory of the image shoud be given accurately.

---

## Attributes

Attributes are used to add more information corresponding to an html tag.

We can use single or double quotes in attribute

_Examples:_

- `href` in the anchor tag
- `src` and `alt` in the img tag
- `target` is used in anchor in order to open the url in new tab

---

## Page Layout

There are tags that are used for Better Indexing by Search Engine and better User Experience. Those Tags are:

- _header_ -> The Header Tag contains a Header
- _main_ -> The Main Tag contains a Main Body
- _footer_ -> The Footer Tag contains a Footer

There are 3 more tags that are used inside main. They are:

- _section_ -> The Section Tag contains a page section
- _article_ -> Article tag contains a self contained context
- _aside_ -> this contains other things aside from content like ads

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Page Layout</title>
  </head>

  <body>
    <header>
      <!-- Header Code -->
    </header>
    <main>
      <!-- Main Code -->
      <section>
        <!-- Section Code -->
      </section>
      <article>
        <!-- Article Code -->
      </article>
      <aside>
        <!-- Aside Code -->
      </aside>
    </main>
    <footer>
      <!-- Footer Code -->
    </footer>
  </body>
</html>
```

---

## Block and Inline Elements

### Block Elements

Block elements are those elements which once established takes all the left and right space or it always takes full width to itself.There cannot be other elements beside the block elements.Some examples are `<div>` and `<p>`.

### Division Tag

div tag is used as a container for other elements.

div basically helps in changing color of background or text and also the font style and size using css of a particular topic.

```html
<div>
  <h1>Why HTML is Important?</h1>
  <p>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, quasi
    fugit magnam deserunt molestiae earum labore a incidunt explicabo ipsa
    tempora iste dolor, possimus quisquam fuga aperiam necessitatibus. Quas
    officiis magnam saepe mollitia, libero praesentium sunt? Ex perspiciatis,
    quisquam dignissimos illo quibusdam illum harum odio ipsum, at nulla quos
    exercitationem?
  </p>
</div>
```

### Inline Elements

The opposite of Block Elements are called Inline Elements.Inline Elements take as much width as necessary.Some of the examples are `<span>`

### Span Tag

span tag is an inline container unlike block.it is an example for inline element

```html
<span>
  i am a span.
  <br />
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum natus ipsum
  eveniet nobis aspernatur doloremque a temporibus ad, tenetur quisquam
  voluptas, dolores ab quibusdam excepturi.
</span>
```

---

## List Tag

List is used to display a content in the form of list.

The Items in the List are give List Item Tag `<li>`

There are 2 types of list:

- Unordered List `<ul>`

- Ordered List`<ol>`

Type attribute in list changes the shape of the bullets of list items.but these are used less because css handles the designing

There are Circle,Disc and Square

### Ordered List

```html
<ol type="1">
  <li>Home</li>
  <li>About</li>
  <li>Social</li>
  <li>Help</li>
</ol>
```

### Unordered List

```html
<ul type="circle">
  <li>Home</li>
  <li>About</li>
  <li>Social</li>
  <li>Help</li>
</ul>
```

---

## Table Tag

This tag isused to create Tables.

```html
<table border="1">
  <thead>
    <caption>
      Student Information
    </caption>
    <tr>
      <th>Sl. No.</th>
      <th>Student Name</th>
      <th>Student Branch</th>
      <th colspan="2">Student Group</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Bob</td>
      <td>EC</td>
      <td>1</td>
      <td>5</td>
    </tr>
    <tr>
      <td>2</td>
      <td>John</td>
      <td>CS</td>
      <td>7</td>
      <td>9</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Johnny</td>
      <td>Civil</td>
      <td>4</td>
      <td>3</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Bobby</td>
      <td>EE</td>
      <td>6</td>
      <td>0</td>
    </tr>
  </tbody>
</table>
```

`border` Attribute is used to create the lines of tables

Table tag has few sub tags: Table row `<tr>`, Table Data `<td>` and Table Headers `<th>`

You can use Caption tag to add caption inside a table.

You can add Table head and Table body to mark it respectively.It can be used for customization in CSS.

`colspan` attribute is used to merge 2 or more Columns

`rowspan` attribute is used to merge 2 or more Row

---

## Form Tag

Form is used to take input from the user.

```html
<form action="form.php">
  <input type="text" placeholder="Enter Your Name" />

  <label for="genderidm">
    <input type="radio" value="Male" name="Gender" id="genderidm" />Male
  </label>
  <label for="genderidf">
    <input type="radio" value="Female" name="Gender" id="genderidf" />Female
  </label>
  <label for="genderido">
    <input type="radio" value="Others" name="Gender" id="genderido" />Others
  </label>
  <br />

  <label for="foodcanteenid">
    <input
      type="checkbox"
      name="food canteen card"
      id="foodcanteenid"
      class="card"
    />Food Canteen Card
  </label>
  <label for="libraryid">
    <input
      type="checkbox"
      name="library card"
      id="libraryid"
      class="card"
    />Library Card
  </label>
  <label for="gymid">
    <input type="checkbox" name="gym card" id="gymid" class="card" />Gym Card
  </label>

  <textarea
    name=""
    id=""
    cols="30"
    rows="10"
    placeholder="Explain why do you want to join?"
  ></textarea>
  <br /><br /><br />
  <select name="car" id="car">
    Select Your Car
    <option value="No car">Select Your Car</option>
    <option value="800">800</option>
    <option value="Alto">Alto</option>
    <option value="Alto 800">Alto 800</option>
    <option value="Swift">Swift</option>
  </select>
</form>
```

`action` attribute takes the Backend we are Using

There are Different form elements. They are:

### Input Tag

Used to accept Text, Checkbox, Radio, Button and Submit. There is a file type too.

`type` attribute provides different option entry for different input.

#### Text Attribute

```html
<input type="text" placeholder="Place Holder" />
```

Here, placeholder attribute takes the suggestion of what the user should enter as a text.

#### Radio Attribute

```html
<label for="genderidm">
  <input type="radio" value="Male" name="Gender" id="genderidm"
/></label>
```

`value` attribute takes type of Value given to radio.

`name` attribute takes the name of radio so that only one of the options can be selected.

`id` takes the id given to that input.

#### Checkbox Attribute

```html
<label for="libraryid">
  <input type="checkbox" name="library card" id="libraryid" class="card"
/></label>
```

`class` attribute takes a name of group to make a group of tags which goes by similar class name. A tag can belong to multiple classes. Multiple class names are added by adding space between each names.

#### Other Attributes

There are other types of input we can use like `date`, `button` etc.

### Text Area Tag

Used to take Multiline input From User.

```html
<textarea
  name=""
  id=""
  cols="30"
  rows="10"
  placeholder="Explain why do you want to join?"
></textarea>
```

### Select Tag

Provides Multiple Options to Choose From

```html
<select name="car" id="car">
  Select Your Car
  <option value="No car">Select Your Car</option>
  <option value="800">800</option>
  <option value="Alto">Alto</option>
  <option value="Alto 800">Alto 800</option>
  <option value="Swift">Swift</option>
</select>
```

---

## Video and iFrame Tags

### iFrame Tag

We use iframe tag to embed a video from another Website.

The Video is imported from Youtube.

```html
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/Nc3XptLacMM"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>
```

### Video Tag

We use video tag to embed a video from our server or PC.

```html
<video src="/09_video.mp4" controls loop width="500"></video>
```

`controls` attribute provides a Seperate Video Player.

`loop` attribute repeats Video once it is Completed.

---

## Search Enigine Optimization

Search Engline Optimization or SEO in short is basically Improving the Website we created so that the Site can be Visible when Searched about the product or information present in our Website.

_Example:_ If we create a website about cooking tutorial, when any user in the internet searches for cooking Tutorial, our website should be visble in the top list.

There are 2 Types of SEO:

- On page SEO

  This can be done by Frontend Developers.

- Off page SEO

  This is done by backend developers.

### HTML SEO

Following Techniques can be implemented to improvise the SEO:

1. Set a very Nice and to the Point **Title**.

2. Set a **Meta Descriptions**: `<meta name="description" content="">`. Meta description is displayed when the user is searching the websites in Search Engine.

3. Set a nice url **Slug**. `www.topimages.com/images/nature-images`. In this case, (nature-images) is a slug.

4. Set a **Meta Keyword** tag. But this is disregarded and read as spam because of the abuse`<meta name="tag" content="">`.

5. Set a **Meta Author** tag. `<meta name="author" content="authorname">`.

6. Set a **Favicon**. Favicon is basically the icon of the Website.

7. Compress Images and other Resources. Remove unnecessary HTML, CSS and JavaScript.

   By Compressing Resource and Code, you can Reduce the Loading Time of Website.

8. Add `alt` **attribute** to Images.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta name="description" content="SEO is like....Read the below info" />
    <meta name="tags" content="seo,seo2022,search engine" />
    <meta name="author" content="Bobby" />
    <link rel="shortcut icon" href="favicon-16x16.ico" type="image/x-icon" />
    <title>SEO in 2022: A Beginners Guide</title>
  </head>
</html>
```

---

## References

1. [_Mozilla HTML Documentation_](https://developer.mozilla.org/en-US/docs/Web/HTML)

---
