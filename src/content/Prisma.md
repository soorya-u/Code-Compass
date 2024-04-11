# Prisma Reference

## Introduction

Prisma is an open-source ORM that drastically simplifies data modeling, migrations, and data access for SQL databases in Node. js and TypeScript.

### Contents

1. [Initializing Prisma](#initializing-prisma)

2. [Primsa File](#primsa-file)

3. [Model](#model)

   - [Model Fields](#model-fields)

   - [Block Level Attributes](#block-level-attributes)

4. [Relationships](#relationships)

   - [Multiple Relationships](#multiple-relationships)

5. [Enums](#enums)

6. [Prisma Migrations](#prisma-migrations)

7. [Prisma Client](#prisma-client)

8. [Prisma Client Operations](#prisma-client-operations)

   - [Create Operations](#create-operations)

   - [Read Operations](#read-operations)

   - [Update Operations](#update-operations)

   - [Delete Operations](#delete-operations)

---

## Initializing Prisma

Prisma Requires Few Dependency to run.

Also include `tsconfig.json` for Typescript Configurations.

```bash
npm i -D prisma typescript ts-node @types/node
```

Required Database can be selected During the Initialization of Prisma

```bash
npx prisma init --datasource-provider typeOfDatabase
```

## Primsa File

Initializing Prisma creates a `schema.prisma` File.

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

_generator_ :

- This defines what the Prisma Code is Converted into.
- `prisma-client-js` is a default one.
- There can be other provider as well like for GraphQL

_datasource_ :

- It defines tha Datbase Type and the URL for our Database.
- The Database defined in the URL must already exist

---

## Model

Models Represent the Tables within the Database.

Models contains Several Fields and each field consists of 4 Parts:

- name
- datatype
- modifier (Optional)
- attributes (Optional) - Starts with **@**

```prisma
model User {
  id   Int    @id @default(autoincrement())
  name String
  email String?
}
```

### Model Fields

The DataTypes of Fields Available are:

- Int - Integer Value
- BigInt - Large Int Value
- Float - Decimal Values
- Decimal - Accurate Decimal Values
- String - Series of Characters
- Boolean - True or False
- DateTime - Time Stamps
- Json - Objects
- Bytes - Raw Files
- Unsupported("") - Datatypes that are not supported by Prisma

There are only 2 Types of Modifier:

- **?** - The Field is Optional
- **[ ]** - The Field contains Array of the Datatype

There are only Many Types of Attributes:

- _@unique_ - Makes the Field Unique for the Table
- _@id_ - Makes it a Primary Key.
- _@updatedAt_ - Sets the Current Timestamp when Updated.

### Block Level Attributes

These Attributes are Applied to the Table rather than the Fields.

This is given by **@@** Symbol.

- _@@unique_ :

  Makes Sure that the Fields inside it are unique.

  `@@unique([name, age])` - No Fields can have Same _name_ AND _age_.

- _@@index_ :

  `@@index([email])` - Assigns seperate index to the _email_ field.

  This Helps in Sorting.

- _@@id_ :

  `@@index([title, authorId])` - Both _title_ and _authorId_ share same ID.

  This Helps in Sorting.

---

## Relationships

There are 3 Types of Relationships:

1. One to Many Relationship

   ```prisma
   model User {
     id   String @id @default(uuid())
     Post Post[]
   }

   model Post {
     postId String @id @default(uuid())
     author User @relation(fields: [authorId], references: [id])
     authorId String
   }
   ```

   The Above is the Example for One to Many Relationship.

   The _User_ can have Multiple _Posts_.

   Each _Post_ References the _User_ with its ID.

2. Many to Many Relationship

   ```prisma
   model Post {
     id            String     @id @default(uuid())
     categories    Category[]
   }

   model Category {
     id    String @id @default(uuid())
     posts Post[]
   }
   ```

   The Above is the Example for Many to Many Relationship.

   The _Posts_ can have Multiple _Category_ and The _Category_ can have Multiple _Posts_.

3. One to One Relationship

   ```prisma
   model User {
     id             String          @id @default(uuid())
     userPreference userPreference?
   }

   model userPreference {
     id           String  @id @default(uuid())
     emailUpdates Boolean
     user         User    @relation(fields: [userId], references: [id])
     userId       String  @unique
   }
   ```

   The Above is the Example for One to One Relationship.

   The _User_ may have a _userPreference_ and the Relation is Held with the help of `userId`.

### Multiple Relationships

```prisma
model User {
  id           String  @id @default(uuid())
  favoritePost Post[]  @relation("WrittenPosts") // Labels are Used
  writtenPost  Post[]  @relation("FavoritedPosts") // Labels are Used
}

model Post {
  id            String   @id @default(uuid())
  author        User     @relation("WrittenPosts", fields: [authorId], references: [id]) // Assigned Labels
  authorId      String
  favoritedBy   User?     @relation("FavoritedPosts", fields: [favoritedById], references: [id]) // Assigned Labels
  favoritedById String?
}
```

_User_ has Multiple Relationships with _Post_.

These Relationships can be Seperated with the Help of _Labels_ like "WrittenPosts" and "FavoritedPosts".

---

## Enums

Enums are used to Create Set of Known Values.

```prisma
enum Role {
  BASIC
  ADMIN
}

model User {
  id             String          @id @default(uuid())
  role           Role            @default(BASIC)
}
```

---

## Prisma Migrations

To reflect the changes in the Database, we need Migrate the Prisma File.

This can be done with a Command.

```bash
npx prisma migrate dev --name init
```

---

## Prisma Client

Prisma Client helps in interacting with the Database.

Prisma Client can be installed using _npm_.

```bash
npm i @prisma/client
```

The Client is automatically generated during Migration.

Client can also be generated Manually.

```bash
npx prisma generate
```

This generates a Piece of Code that helps us to Interact with the Database.

```js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
```

### Using Prisma Client

Prisma code is asynchronous.

```ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Prisma Queries
  const user = await prisma.user.create({ data: { name: "Alex" } });
  const users = await prisma.user.findMany();
  console.log(users);
}

main()
  .catch((e) => console.log(e.message))
  .finally(async () => {
    await prisma.$disconnect();
  });
```

This is the Basic Code for Prisma.

---

## Prisma Client Operations

Reference File:

```prisma
model User {
  id               String          @id @default(uuid())
  name             String
  age              Int
  email            String          @unique
  role             Role            @default(BASIC)
  favoritePost     Post[]          @relation("WrittenPosts")
  writtenPost      Post[]          @relation("FavoritedPosts")
  userPreference   UserPreference? @relation(fields: [userPreferenceId], references: [id])
  userPreferenceId String?         @unique
}

model UserPreference {
  id           String  @id @default(uuid())
  emailUpdates Boolean
  user         User?
}

model Post {
  id            String     @id @default(uuid())
  title         String
  averageRating Float
  createdAt     DateTime   @default(now())
  updatedAt     DateTime   @updatedAt
  author        User       @relation("WrittenPosts", fields: [authorId], references: [id])
  authorId      String
  favoritedBy   User?      @relation("FavoritedPosts", fields: [favoritedById], references: [id])
  favoritedById String?
  categories    Category[]
}

model Category {
  id    String @id @default(uuid())
  name  String @unique
  posts Post[]
}

enum Role {
  BASIC
  ADMIN
}
```

### Create Operations

`create()` - Create a Single Entry

To Include The Other Table, we use `include` Parameter.

```ts
async function main() {
  const user = await prisma.user.create({
    data: {
      name: "Bob",
      email: "bob@mail.com",
      age: 19,
      userPreference: {
        create: {
          // Creating a User Preference Table
          emailUpdates: true,
        },
      },
    },
    include: {
      // Displaying the Corresponding User Preference Table
      userPreference: true,
    },
  });
  console.log(user);
}
```

To get only The required Field, we use `select` Parameter.

```ts
async function main() {
  const user = await prisma.user.create({
    data: {
      name: "Bob",
      email: "bob@mail.com",
      age: 19,
      userPreference: {
        create: {
          // Creating a User Preference Table
          emailUpdates: true,
        },
      },
    },
    select: {
      // Displaying only name and user preference
      name: true,
      userPreference: {
        select: {
          emailUpdates: true,
        },
      },
    },
  });
  console.log(user);
}
```

`createMany()` - Create a Single Entry

`select` Parameter cannot be used with `createMany()`

```ts
async function main() {
  const users = await prisma.user.create({
    data: [
      {
        name: "Bob",
        email: "bob@mail.com",
        age: 19,
      },
      {
        name: "Alex",
        email: "alex@mail.com",
        age: 21,
      },
    ],
  });
  console.log(users);
}
```

### Read Operations

`findUnique()` - Finds a Value using Unique Fields.

```ts
async function main() {
  const users = await prisma.user.findUnique({
    where: {
      email: "alex@mail.com",
    },
    select: {
      name: true,
    },
  });
  console.log(users);
}
```

`findUnique()` can also find _@@unique_ Attribute as well.

```ts
async function main() {
  const users = await prisma.user.findUnique({
    where: {
      name_age: {
        name: "Alex",
        age: 21,
      },
    },
    select: {
      name: true,
    },
  });
  console.log(users);
}
```

`findFirst()` - Finds a First Matching Value in that Field.

```ts
async function main() {
  const users = await prisma.user.findFirst({
    where: {
      name: "Alex",
    },
    select: {
      name: true,
    },
  });
  console.log(users);
}
```

`findMany()` - Finds all Matching Value in that Field.

```ts
async function main() {
  const users = await prisma.user.findMany({
    where: {
      name: "Alex",
    },
    select: {
      name: true,
    },
  });
  console.log(users);
}
```

`take` Paramter can be Added to get only required Number of Entries

`take` Paramter can be Added to skip the given Entry

```ts
async function main() {
  const users = await prisma.user.findMany({
    where: {
      name: "Alex",
    },
    orderBy: {
        age: "asc" // Arranged in Ascending Order
    }
    take: 2, // Returns only 2 Values
    skip: 1, // Skips the First One
  });
  console.log(users);
}
```

Advanced Filterings

`in` Parameter

```ts
async function main() {
  const users = await prisma.user.findMany({
    where: {
      name: { in: ["Bob", "Alex"] }, // All users with name `Bob` and `Alex` Returned
    },
  });
  console.log(users);
}
```

`notIn` Parameter

```ts
async function main() {
  const users = await prisma.user.findMany({
    where: {
      name: { notIn: ["Bob"] }, // All users with Name other than `Bob` are Returned
    },
  });
  console.log(users);
}
```

`gt`, `lt`, `gte`, `lte` Parameters

```ts
async function main() {
  const users = await prisma.user.findMany({
    where: {
      age: { gt: 17 }, // All users above the age of 17 are Returned
    },
  });
  console.log(users);
}
```

`contains`, `startsWith` and `endsWith` Parameters

```ts
async function main() {
  const users = await prisma.user.findMany({
    where: {
      email: { contains: "@mail.com" }, // All users whose email contains `@mail.com`
    },
  });
  console.log(users);
}
```

`AND`, `OR` and `NOT` Parameters

```ts
async function main() {
  const users = await prisma.user.findMany({
    where: {
      OR: {
        { name: "Bob" },
        { name: "Alex" }
      }
    },
  });
  console.log(users);
}
```

Relationship Filtering

```ts
async function main() {
  const users = await prisma.post.findMany({
    where: {
      author: {
        is: {
          age: 27, // Searching the Post with the help of User Info
        },
        isNot: {
          name: "Bob",
        },
      },
    },
  });
  console.log(users);
}
```

### Update Operations

`update()` - Updates only the Unique Match.

`select` and `include` Parameters can be Used.

It can be done only on Unique Field.

```ts
async function main() {
  const users = await prisma.user.update({
    data: {
      name: "Bobby",
    },
    where: {
      name: "Bob",
    },
  });
  console.log(users);
}
```

`updateMany()` - Updates all the Matches.

`select` and `include` Parameters cannot be Used.

```ts
async function main() {
  const users = await prisma.user.updateMany({
    data: {
      email: "@mail.com",
    },
    where: {
      email: "@gmail.com",
    },
  });
  console.log(users);
}
```

Connecting and Disconnecting Existing Relationship

```ts
async function main() {
  const users = await prisma.user.update({
    data: {
      email: "@mail.com",
      emailPreference: {
        connect: {
          id: "id here", // This will connect the user table to existing userPreference Table
        },
      },
    },
    where: {
      email: "bob@gmail.com",
    },
  });
  console.log(users);
}
```

```ts
async function main() {
  const users = await prisma.user.update({
    data: {
      email: "@mail.com",
      emailPreference: {
        disconnect: true, // This will disconnect the user table to existing userPreference Table (boolean only for one to one)
      },
    },
    where: {
      email: "bob@gmail.com",
    },
  });
  console.log(users);
}
```

### Delete Operations

`delete()` - Deletes only the Unique Match.

```ts
async function main() {
  const users = await prisma.user.delete({
    where: {
      email: "bob@gmail.com",
    },
  });
  console.log(users);
}
```

`deleteMany()` - Deletes all the Matches.

```ts
async function main() {
  const users = await prisma.user.deleteMany({
    where: {
      age: { gt: 17 },
    },
  });
  console.log(users);
}
```

---
