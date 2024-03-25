# GraphQL Reference

## Introduction

GraphQL is an open source query language that describes how a client should request information through an API.

### Contents

1. [Apollo Library](#apollo-library)
   
2. [Server Side Setup](#server-side-setup)

   - [Fetching with Parameters](#fetching-with-parameters)

   - [Nested Queries](#nested-queries)

3. [Client Side Setup](#client-side-setup)

---

## Apollo Library

Apollo is a suite of tools for working with GraphQL, which includes the Apollo Server and Apollo Client libraries.

Apollo Server is a server-side JavaScript library that helps you build GraphQL APIs.

Apollo Client is a client-side JavaScript library that allows you to consume those APIs from your front-end application.

---

## Server Side Setup

Apollo Server can be installed with the command:

```bash
npm install @apollo/server graphql
```

**OR**

```bash
yarn add @apollo/server graphql
```

The Boilerplate Code for the Apollo Server:

```js
const express = require("express");

const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");

const app = express();
const server = new ApolloServer({
  typeDefs: ``,
  resolvers: {},
});

await server.start();

app.use("/graphql", expressMiddleware(server));

app.listen(8000, () => console.log(`Server started at PORT 8000`));
```

_expressMiddleware_ is a Middleware used for GUI Representation of GraphQL Queries.

_Apollo Server_ is Used to create an Apollo Server with 2 Configurations which are _typeDefs_ and _resolvers_.

_typeDefs_: A String used to declare all the type and the Query Structure.

**_Type Query_** is a Special type which declares all the type of Query and the Returning Type.

**_ID_** is a Datatype to Represent IDs and **_!_** specifies the Attribute to be Required.

_resolvers_: An Object which declares all the Logic for the Queries.

```js
const server = new ApolloServer({
  typeDefs: `

    type User {
        id: ID!
        name: String!
        username: String!
        email: String!
        phone: String!
        website: String!
    }

    type Todo {
        id: ID!
        title: String!,
        completed: Boolean
    }
    
    type Query {
        getTodos: [Todo]
        getAllUsers: [User]
        getUser(id: ID!): User
    }
    `,
  resolvers: {
    Query: {
      getTodos: async () =>
        (await axios.get("https://jsonplaceholder.typicode.com/todos")).data,

      getAllUsers: async () =>
        (await axios.get("https://jsonplaceholder.typicode.com/users")).data,
    },
  },
});
```

In the GUI, the Queries are given to fetch only the required Data from the Sever.

```js
query GetAllTodos {

  // To Fetch Only the Titles of Todo
  getTodos {
    title
  }

  // To Fetch Only the Name of Users
  getAllUsers {
    name
  }
}
```

### Fetching with Parameters

To Fetch with the help of Parameters, the type and Resolver can be defined as such.

```js
const server = new ApolloServer({
  typeDefs: `
    ...
    type Query {
        ...
        getUser(id: ID!): User
    }
    `,
  resolvers: {
    Query: {
      getUser: async (parent, { id }) =>
        (await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`))
          .data,
    },
  },
});
```

On the GUI side, the Parameters are given as such:

```js
// Operations
query GetAllTodos($getUserId: ID!) {
  getUser(id: $getUserId) {
    username
    name
  }
}
```

```js
// Variables
{
  "getUserId": 3
}
```

### Nested Queries

Nested Queries can be achieved by linking 2 Types and Adding its Resolver.

```js
const server = new ApolloServer({
  typeDefs: `

    type User {
        ...
    }
    type Todo {
        ...
        userId: ID!
        user: User
    }
    ...

    `,
  resolvers: {

    // Same name as Type
    Todo: {
        user: async (todo) => (await axios.get(`https://jsonplaceholder.typicode.com/users/${todo.userId}`)).data
    },

    Query: {
      ...
    },
  }
});
```

On the GUI side, the Nested Query can be given as such:

```js
query GetAllTodos {
  getTodos {
    title
    user {
      name
      username
    }
  }
}
```

---

## Client Side Setup

Apollo Client can be installed with the command:

```bash
npm install @apollo/client graphql
```

**OR**

```bash
yarn add @apollo/client graphql
```

Main React App can be wrapped within an _Apollo Provider_ with client.

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
```

The Queries can be fetched using _useQuery_ Hook and the query can be given with _gql_ Function.

```jsx
import { useQuery, gql } from "@apollo/client";

const query = gql`
  query GetAllTodos {
    getTodos {
      id
      title
      user {
        name
        username
      }
    }
  }
`;

export default function App() {
  const { data, loading, error } = useQuery(query);

  if (loading) return <h1>Loading...</h1>;

  if (error) return <h1>Error!!</h1>;

  return (
    <>
      <table border={2} cellPadding={5} cellSpacing={0}>
        <tbody>
          {data.getTodos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.title}</td>
              <td>{todo.user.name}</td>
              <td>{todo.user.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
```

---
