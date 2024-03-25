# Next.js Reference

## Introduction

Next.js is a React framework that gives you building blocks to create web applications.

### Contents

1. [Structure of Next Project](#structure-of-next-project)

2. [Server and Client side Components](#server-and-client-side-components)

3. [Routing System](#routing-system)

   - [Creating a Route](#creating-a-route)

   - [Nested Routing](#nested-routing)

   - [Dynamic Routing](#dynamic-routing)

4. [Special Next.js Files](#special-nextjs-files)

5. [Data Fetching](#data-fetching)

   - [Server Side Rendering](#server-side-rendering)

   - [Static Site Generation](#static-site-generation)

   - [Incremental Static Regeneration](#incremental-static-regeneration)

6. [Route Handler & API Endpoints](#route-handler--api-endpoints)

7. [HTTP Methods](#http-methods)

8. [SEO & Metadata](#seo--metadata)

   - [Static Metadata](#static-metadata)

   - [Dynamic Metadata](#dynamic-metadata)

9. [References](#references)

---

## Structure of Next Project

**layout.js** defines and Structure to a Page and for all its Children. We can add components that are common betwwen its children.

**page.js** is a the Page that is Rendered after layout.js. It is a Child of layout.js.

---

## Server and Client side Components

Next.js Supports Server Side Rendering by Default
In order to make it a Client side rendering Component, we use **use client** directive

Eg: `"use client"`

We enable Client Side Rendering:

- When the React States and Hooks are Used.
- When the Event Listeners are Used.
- When React Class Components are Used.

---

## Routing System

### Creating a Route

To Create a New Route, we just **_need to create a new Directory_** with the name of the Route. Inside the Directory, we **_create a Javascript file named page.js_** with a React Function Component inside it.

The Following page is Loaded in the Route: localhost:3000/directory-name

### Nested Routing

We can create a Nesed Routes just by Creating a Directory within a Directory with individual page.js file to Each Directory.

_Example:_

```tree
app
└── blogs
    ├── new
    │   └── page.js
    └── page.js
```

- The page.js in blogs Directory is rendered in localhost:3000/blogs

- The page.js in new Directory is rendered in localhost:3000/blog/new

### Dynamic Routing

Dynamic Routing is Rendering same Page Design but for Different Information. Eg: Displaying Employee Info.

This can be Created by **_creating a Directory and naming it within Square Brackets._**

_Example:_

```tree
app
└── blogs
    └── [blogId]
          └── page.js
```

The Same **page.js** is Rendered for All the Blogs but with Different Content in it.

```js
const Blog = ({ params }) => {
  return <div>{params.blogId}</div>;
};
```

The Function accepts a paramter which is the ID of the Page.

---

## Special Next.js Files

- **layout.js** -&gt; It can be created within a Directory as well. It is Mainly used to add Shared Components. It may take a parameter _children_ which is _page.js_

- **loading.js** -&gt; This Page is rendered when the actual page requires time for loading as it might be Fetcing an API etc.

- **error.js** -&gt; This Page is Rendered when the _page.js_ encounters an error and cannot be Rendered.

---

## Data Fetching

NextJS provides 3 methods to Fetch Data

1. Server Side Rendering (SSR)
2. Static Site Generation (SSG)
3. Incremental Static Regeneration (ISR)

### Server Side Rendering

Server Side Rendering is where the page is Rendered on the Web Server rather than the Browser.

This Server prepares an HTML file with User-Specific data and sends it to the User's machine.

The Data is Fetched on each Requests, so the Data is always Upto Date.

_Example:_

```jsx
async function Page({ params }) {
  const res = await fetch(
    // This is Dynamic URL
    `https://url.com/profile/${params.id}`,
    // `cache : no store` implies not to store the data but to Display as is.
    { cache: "no-store" }
  );

  const data = await res.json();

  return (
    <>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </>
  );
}
```

### Static Site Generation

In Static Generation, the page HTML is generated at build time.

This HTML will then be reused on each request. It can be cached by a CDN.

It is Ideal for the Contents that does not Change Frequently.

_Example:_

```jsx
async function Page({ params }) {
  const res = await fetch(`https://url.com/profile/${params.id}`);

  const data = await res.json();

  return (
    <>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </>
  );
}
```

### Incremental Static Regeneration

Incremental Static Regeneration creates or updates static pages after you’ve built your site.

It enables you to use static-generation on a per-page basis, without needing to rebuild the entire site.

It is used for Static sites with Dynamic Contents.

The Dynamic Content is Stored and is also updated after given Interval of Time

_Example:_

```jsx
async function Page({ params }) {
  const res = await fetch(
    `https://url.com/profile/${params.id}`,
    // The Data is Updated after the Given Interval of Time.
    { next: { revalidate: 10 } }
  );

  const data = await res.json();

  return (
    <>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </>
  );
}
```

---

## Route Handler & API Endpoints

Route handlers are the Blocks of Code that handle Logic for your Routes.

The File is named _route.js_

This is a Special File name that handles the backend Routes.

There are 2 Ways to Create a Route Handler:

1. Within _api_ Directory present inside _app_ Directory.

2. within the _app_ Directory

_Note:_ While Creating a Route Handler within _app_ Directory, the _page.js_ and _route.js_ must not co-exist.

```tree
This is Not Possible

app
├── page.js
└── route.js
```

It is preferred to create the Route Handlers within _api_ Directory.

This Seperates the Backend and Frontend.

---

## HTTP Methods

The Following HTTP methods are provided within NextJS:

- **GET** -> Retrieves data or Resources from the Server.
- **POST** -> Retrieves data to the Server to create a new Resource
- **PUT** -> Updates or Replaces an existing Resource on the Server.
- **PATCH** -> Partially Updates an existing Resource on the Server.
- **DELETE** -> Removes a Resource from the Server.
- **HEAD** -> Retreives the Header of a Resource without fetching the Body.
- **OPTIONS** -> Retreives the supported HTTP methods and other Communication options for a Resource.

_Example:_

```js
// app/api/users/route.js

// Handle GET request
export async function GET(request) {
  // Retrieve userss from the Database or any Data source.

  // Send Users as Response
  return new Response(JSON.stringify(users));
}
```

The following API can be accessed in the URL :

localhost:3000/api/users

---

## SEO & Metadata

The Metadata of a Page can also be Exported in the _page.js_ File.

NextJS provides 2 ways to Define Metadata :

1. Static Metadata
2. Dynamic Metadata

### Static Metadata

`metadata` is a special Object that contains the Title and Metadata of a Page

```jsx
export const metadata = {
  title: "Home",
};

export default function Page() {
  return (
    <>
      <h1>Home</h1>
    </>
  );
}
```

The Output is as Follows:

```html
<head>
  <title>Home</title>
</head>
```

### Dynamic Metadata

`generateMetadata()` is a special function that returns the Title and Metadata of a Page

```jsx
export async function generateMetadata({ params, searchParams }) {
  const product = await getProduct(params.id);
  return { title: product.title };
}

export default function Page() {
  return (
    <>
      <h1>Home</h1>
    </>
  );
}
```

The Output is as Follows:

```html
<head>
  <title>{unique_product_name}</title>
</head>
```

---

## References

1. [_Official NextJS Documentation_](https://nextjs.org/docs)

---
