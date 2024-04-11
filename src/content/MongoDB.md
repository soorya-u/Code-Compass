# MongoDB Reference

## Introduction

MongoDB is a a NoSQL Document based Database with the scalability and flexibility.

### Contents

1. [Brief](#brief)

2. [Mongo Shell](#mongo-shell)

3. [MongoDB Query Language](#mongodb-query-language)

   1. [CRUD Operations](#crud-operations)

      - [Create Operation](#create-operation)

      - [Read Operation](#read-operation)

      - [Update Operation](#update-operation)

      - [Delete Operation](#delete-operation)

   2. [Other Operations](#other-operations)

      - [Limit Operation](#limit-operation)

      - [Skip Operation](#skip-operation)

      - [Sort Operation](#sort-operation)

   3. [Opertors](#operators)

      - [Comparision Operators](#comparision-operators)

      - [Logical Operators](#logical-operators)

   4. [Aggregation Pipeline](#aggregation-pipeline)

4. [Mongo Scripts](#mongo-scripts)

   - [Using _mongosh_ Command](#using-mongsosh-command)

   - [Using _load()_ Command](#using-load-method)

5. [Reference](#reference)

---

## Brief

MongoDB is a Database with Muliple Collections. These Collections are similar to that of Tables in Relational Database.

Each Collection contains a Document. This is Similar to that of Row in Relational Database and Contains Data Inside it.

Data is a Collection of Key-Value Pair.

The Advantage of MongoDb is that it does not require a _Schema_ which means all the Data do not need to be in Same Structure.

Each Data can have its own set of Key which does not match with that of other Datas under the same Collection.

---

## Mongo Shell

Mongo Shell is a Command-line Interface to work with the Database.

### Commands

`show dbs` &#8594; lists out all the Database.

`db` &#8594; Name of the Database that is currently being used.

`use dtbs` &#8594; switches to the Database _dtbs_.

`show collections` &#8594; lists out all the Collections in that Database.

---

## MongoDB Query Language

MongoDB uses MongoDB Query Language (MQL) which is rich and powerful, and fetches data easily even from documents with nested or complex structure, when queried correctly.

### CRUD Operations

#### Create Operation

- Insert One Document

  `insertOne()` takes an Object as Argument.

  > **Syntax: db.collection_name.insertOne( { '{...}' } )**

  ```js
  db.students.insertOne({ name: "Ruhi", year: 2021 });
  ```

- Insert Array of Documents Document

  `insertMany()` takes an Array of Objects as Argument.

  > **Syntax: db.collection_name.insertMany( [ { '{...}' } , { '{...}' } , ... ] )**

  ```js
  db.students.insertMany([
    {
      name: "Ruhi",
      year: 2021,
      age: 15,
      marks: {
        phy: 99,
        che: 93,
      },
      total: 90,
    },
    {
      name: "Rohith",
      year: 2009,
      age: 12,
      marks: {
        phy: 45,
        che: 85,
      },
      total: 11,
    },
    {
      name: "Ruhan",
      year: 2013,
      age: 20,
      marks: {
        phy: 100,
        che: 15,
      },
      total: 05,
    },
  ]);
  ```

#### Read Operation

- Read Multiple Documents

  `find()` returns an Array of Objects.

  > **Syntax: db.collection_name.find()**

  ```js
  db.students.find(); // Reads all Documents

  db.students.find({ name: "Ruhi" });
  ```

- Read a Single Document

  `findOne()` retuns an Object

  > **Syntax: db.collection_name.findOne( {'{key : "value"}'} )**

  ```js
  db.students.findOne({ name: "Ruhi" });
  ```

#### Update Operation

- Update a Single Document

  `updateOne()` updates an Object

  > **Syntax: db.collection_name.updateOne( { '{key:"value"}' }, { '{$set: { new_key:"new_value" }}' } )**

  ```js
  db.students.updateOne(
    { name: "Ruhi" },
    {
      $set: { "marks.che": 96 },
      $currentDate: { lastModified: true },
    }
  );
  ```

- Updates Multiple Document

  `updateMany()` updates an Array of Objects

  > **Syntax: db.collection_name.updateMany( { '{key:"value"}' }, { '{$set: { new_key:"new_value"}' } } )**

  ```js
  db.students.updateMany(
    { name: "Ruhi" },
    {
      $set: { "marks.che": 96 },
      $currentDate: { lastModified: true },
    }
  );
  ```

- Replaces a Document

  `replace One()` replaces an Object

  > **Syntax: db.collection_name.replaceOne( { '{key:"value"}' }, { '{$set: { // New Document }}' } )**

  ```js
  db.inventory.replaceOne(
    { name: "Rohith" },
    {
      name: "Rohith",
      year: 2025,
      age: 35,
      marks: {
        phy: 89,
        che: 55,
      },
      total: 73,
    }
  );
  ```

#### Delete Operation

- Delete a Single Document

  `deleteOne()` deletes an Object

  > **Syntax: db.collection_name.deleteOne( { '{key:"value"}' } )**

  ```js
  db.students.deleteOne({ name: "Ruhan" });
  ```

- Delete Multiple Documents

  `deleteMany()` deletes an Array of Objects

  > **Syntax: db.collection_name.deleteMany( { '{key:"value"}' } )**

  ```js
  db.students.deleteMany(); // Delete all Documents

  db.students.deleteMany({ name: "Ruhan" });
  ```

### Other Operations

#### Limit Operation

`limit(n)` is a Function which returns _n_ Number of Documents out of the Result.

```js
db.students.find().limit(2);
```

#### Skip Operation

`skip(n)` is a Function which skips First _n_ Number of Documents out of the Result.

```js
db.students.find().skip(2);
```

#### Sort Operation

`sort( {key : value } )` is a Function which sorts Documents in Ascending or Descending Order.

```js
db.students.find().sort({ total: 1 }); // Ascending Order of total Value
db.students.find().sort({ total: -1 }); // Descending Order of total Value
```

### Operators

#### Comparision Operators

- Equal to: `$eq`

  If _total_ is **_Equal to_** 45

  ```js
  db.students.find({ total: { $eq: 45 } });
  ```

- Not Equal to: `$ne`

  If _total_ is **_not Equal to_** 45

  ```js
  db.students.find({ total: { $ne: 45 } });
  ```

- Greater Than: `$gt`

  If _total_ is **_Greater than_** 45

  ```js
  db.students.find({ total: { $gt: 45 } });
  ```

- Less Than: `$lt`

  If _total_ is **_Less than_** 45

  ```js
  db.students.find({ total: { $lt: 45 } });
  ```

- Greater Than or Equal to: `$gte`

  If _total_ is **_Greater than or Equal to_** 45

  ```js
  db.students.find({ total: { $gte: 45 } });
  ```

- Less Than or Equal to: `$lte`

  If _total_ is **_Less than or Equal to_** 45

  ```js
  db.students.find({ total: { $lte: 45 } });
  ```

- In: `$in`

  If _year_ have any of the Value in Given Array

  ```js
  db.students.find({ year: { $in: [2009, 2013] } });
  ```

- Not In: `$nin`

  If _year_ does not have any of the Value in Given Array

  ```js
  db.students.find({ year: { $nin: [2009, 2013] } });
  ```

#### Logical Operators

- AND: `$and`

  If all the Given Condition is True

  ```js
  db.students.find({ $and: { phy: { $gt: 50 }, che: { $gt: 50 } } });
  ```

- OR: `$or`

  If all the Given Condition is True

  ```js
  db.students.find({ $or: { phy: { $gt: 50 }, che: { $gt: 50 } } });
  ```

- NOT: `$not`

  The Opposite of the Given Condition

  ```js
  db.students.find({ $not: { total: { $lt: 50 } } });
  ```

### Aggregation Pipeline

Aggregate Pipeline is used to Perform Multiple Operations and Calculations before Fetching the Document.

_Example:_

```js
db.students.aggregate(
  {
    $match: { total: { $gt: 35 } },
  },

  {
    $group: {
      _id: "$usn",
      result: "Pass",
    },
  }
);
```

In the Above Example, all the Documents are First Matched with the Given condition.

Only the Document that match the Conditions move to the Next Pipeline.

Next Pipeline Groups the Documents and Gives the _\_id_ as _usn_ and _result_ is set to _Pass_

---

## Mongo Scripts

Mongo Scripts can be created and exectuted using JavaScript.

The Scripts are Similar to that of MQL. Although, there is a Connection that should be Made before Operating on Database.

The Coneection can be done as Follows:

```js
db = connect("mongodb://localhost:27017/database_name");
```

### Using _mongsosh_ Command

Any JavaScript File can be executed using `mongosh` Command.

```bash
mongosh --file fileName.js
```

Or

```bash
mongosh -f fileName.js
```

### Using _load()_ Method

Mongo Scripts can also be run using `load()` method within Mongo Shell.

```mbd
test> load('~/home/mongoScripts/fileName.js')
```

The `test()` methods accepts both Absolute path as well as Relative Path.

---

## Reference

1. [_Official MongoDB Manual_](https://www.mongodb.com/docs/manual/)

2. [_The Ultimate MongoDB Cheat Sheet_](https://drive.google.com/file/d/1yR5JyvhMLjAW-N3H71ythrINyUBXble6/view) - **JS Mastery**

---
