# Redis Reference

## Introduction

Redis is an open-source in-memory storage, used as a distributed, in-memory key–value database, cache and message broker, with optional durability.

## Contents

1. [Strings](#strings)

2. [Lists](#lists)

3. [Sets](#sets)

4. [Hashes](#hashes)

5. [Ordered Sets](#ordered-sets)

6. [Streams](#streams)

7. [Geospatial](#geospatial)

8. [Connecting with Node](#connecting-with-node)

   - [String Operations in Node](#string-operations-in-node)

   - [List Operations in Node](#list-operations-in-node)

   - [Implementation of Redis](#implementation-of-redis)

9. [References](#references)

---

## Strings

Redis strings store sequences of bytes, including text, serialized objects, and binary arrays.

Strings are the simplest type of value you can associate with a Redis key.

By default, a single Redis string can be a maximum of 512 MB.

Since Redis keys are strings, when we use the string type as a value too, we are mapping a string to another string.

`SET` and the `GET` commands are the way we set and retrieve a string value.

To set a Key-Value Pair:

```redis
SET pc MSI
```

To get a Key-Value Pair:

```redis
GET pc
```

To delete a Key-Value Pair:

```redis
DEL pc
```

Although the Actual Convention to Add Key value Pair is:

> SET **\<entity>:\<id> value**

```redis
SET pc:1 MSI
SET pc:2 Asus

GET pc:2
```

### Basic Commands of Strings

- NX stores a string value only if the key doesn't already exist.

  ```redis
  SET pc:3 Dell nx
  <or>
  SETNX pc:3 Dell
  ```

- XX stores a string value only if the key already exist.

  ```redis
  SET pc:3 Dell xx
  ```

- `MSET` sets multiple string values in a single operation.

  ```redis
  MSET model:3 Katana model:4 Samurai
  <or>
  MSET model:3 "Katana" model:4 "Samurai"
  ```

- `MGET` retrieves multiple string values in a single operation.

  ```redis
  MGET pc:1 pc:2 model:3 model:4
  ```

- `INCR` and `INCRBY` is used for Incrementing a Value

  ```redis
  SET count 0

  // Increments by 1
  INCR count
  // Increments by 5
  INCRBY count 5
  ```

- `DECR` and `DECRBY` is used for Incrementing a Value

  ```redis
  SET count 0

  // Increments by 1
  DECR count
  // Increments by 5
  DECRBY count 5
  ```

There are Other Operations such as Bitwise Operation, SUBSTR, GETRANGE etc for Strings.

---

## Lists

Redis lists are linked lists of string values.

They are used to implement stacks and queues.

### Basic Commands of Lists

- `LPUSH` adds a new element to the head of a list.

  ```redis
  LPUSH messages hey
  ```

- `RPUSH` adds a new element to the tail of a list.

  ```redis
  RPUSH messages hello
  ```

- `LPOP` removes and returns an element from the head of a list.

  ```redis
  LPOP messages
  ```

- `RPOP` removes and returns an element from the head of a list.

  ```redis
  RPOP messages
  ```

- `LLEN` returns the length of a list.

  ```redis
  LLEN messages
  ```

- `LRANGE` returns the elements in the given range.

  ```redis
  LRANGE messages 0 -1
  ```

### Blocking Commands of Lists

- `BLPOP` removes and returns an element from the head of a list. If the list is empty, the command blocks until an element becomes available or until the specified timeout is reached.

  ```redis
  BLPOP messages 80 // Waits for 80 seconds to pop if there is any
  ```

---

## Sets

A Redis set is an unordered collection of unique strings.

Redis sets can efficiently track unique items, represent relations, perform common set operations such as intersection, unions, and differences.

### Basic Commands of Sets

- `SADD` aads a new member to a set.

  ```redis
  SADD ip 1
  ```

- `SREM` removes the specified member from the set.

  ```redis
  SREM ip 1
  ```

- `SISMEMBER` tests a string for set membership.

  ```redis
  SISMEMBER ip 1
  ```

- `SINTER` returns the set of members that two or more sets have in common

  ```redis
  SINTER ip mac
  ```

---

## Hashes

Redis hashes are record types structured as collections of field-value pairs.

Hashes can be used to represent basic objects and to store groupings of counters, among other things.

### Basic Commands of Hashes

- `HSET` sets the value of one or more fields on a hash.

  ```redis
  HSET bike:1 model Deimos brand Ergonom type 'Enduro bikes' price 4972
  ```

- `HGET` returns the value at a given field.

  ```redis
  HGET bike:1 model
  HGET bike:1 price
  ```

- `HMGET` returns the values at one or more given fields.

  ```redis
  HMGET bike:1 model price brand
  ```

- `HINCRBY` increments the value at a given field by the integer provided.

  ```redis
  HINCRBY bike:1 price 1000
  ```

---

## Ordered Sets

A Redis sorted set is a collection of unique strings ordered by an associated score.

Some use cases for sorted sets include leaderboards and rate limiters

### Basic Commands of Ordered Sets

- `ZADD` adds a new member and associated score to a sorted set. If the member already exists, the score is updated.

  ```redis
  ZADD score 10 Bob
  ```

- `ZRANGE` returns members of a sorted set, sorted within a given range. (Ascending Order)

  ```redis
  ZRANGE score 0 -1
  ```

- `ZREVRANGE` returns members of a sorted set, sorted within a given range. (Descending Order)

  ```redis
  ZREVRANGE score 0 -1
  ```

- `ZRANK` returns the rank of the provided member, assuming the sorted is in ascending order.

  ```redis
  ZRANK score Bob
  ```

- `ZREVRANK` returns the rank of the provided member, assuming the sorted set is in descending order.

  ```redis
  ZREVRANK score Bob
  ```

---

## Streams

Redis stream is a data structure that acts like an append-only log but also implements several operations to overcome some of the limits of a typical append-only log.

Hashes can be used to record and simultaneously syndicate events in real time.

### Basic Commands of Streams

- `XADD` adds a new entry to a stream.

  ```redis
  XADD race * rider Norem speed 28.8 position 3 location_id 1
  ```

- `XRANGE` returns a range of entries between two supplied entry IDs.

  ```redis
  XRANGE race 1703686682080-0 + COUNT 2
  ```

- `XREAD` reads one or more entries, starting at a given position and moving forward in time.

  ```redis
  XREAD COUNT 100 BLOCK 300 STREAMS race $
  ```

---

## Geospatial

Redis geospatial indexes let you store coordinates and search for them. This data structure is useful for finding nearby points within a given radius or bounding box.

### Basic Commands of Geospatial

- `GEOADD` adds a location to a given geospatial index (note that longitude comes before latitude with this command).

  ```redis
   GEOADD bikes -122.27652 37.805186 station:1
  ```

- `GEOSEARCH` returns locations with a given radius or a bounding box.

  ```redis
  GEOSEARCH bikes:rentable FROMLONLAT -122.2612767 37.7936847 BYRADIUS 5 km WITHDIST
  ```

---

## Connecting with Node

To Connect with Redis, a Library is Required:

```bash
npm i ioredis
```

The Boilerplate Code to connect with Redis is:

```js
const { Redis } = require("ioredis");

const client = new Redis();

module.exports = client;
```

### String Operations in Node

```js
const client = require("./client");

async function main() {
  await client.set("msg:1", "NodeJS");
  await client.expire("msg:1", 10); // Expires after 10 seconds
  const result = await client.get("msg:1");
}

main().finally(() => client.disconnect());
```

### List Operations in Node

```js
const client = require("./client");

async function main() {
  await client.lpush("messages", 1);
  await client.rpush("messages", 4);
  const result1 = await client.lpop("messages");
  const result2 = await client.rpop("messages");

  console.log(result1, result2);

  const result3 = await client.blpop("messages", 40);
  console.log(result3);
}

main().finally(() => client.disconnect());
```

## Implementation of Redis

```js
const express = require("express");
const axios = require("axios").default;
const client = require("./client");

const app = express();

app.get("/", async (req, res) => {
  const cacheValue = await client.get("todos");

  if (cacheValue) return res.json(JSON.parse(cacheValue));

  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );

  await client.set("todos", JSON.stringify(data));
  await client.expire("todos", 100);
  return res.json(data);
});

app.listen(9000);
```

---

## References

1. [Redis Documentation](https://redis.io/docs/)

---
