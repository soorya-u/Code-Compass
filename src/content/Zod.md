# Zod Reference

## Introduction

Zod is a library of TypeScript-first schema Validation with static type interference.

## Contents

---

## Installation and Usage

Zod can be installed as any other Library from any Package Manager.

```bash
yarn add zod
```

Zod can be Imported as an Object from the library.

```ts
import { z } from "zod";
```

---

## Data Types

Zod has all the required basic types present in the JavaScript like:

1. Number
2. String
3. Boolean
4. Date
5. Object

There are other Datatype of TypeScript as well such as:

1. Undefined
2. Null
3. Any
4. Unknown
5. Never

There are also Custom Datatype such as:

1. Literal

   - Literal is a Custom Dataype of passed Value.

   ```ts
   const Literal = z.literal("t");
   ```

2. Enum

   - Any Values out of the given set.

   ```ts
   const HobbiesSchema1 = z.enum(["Programming", "Guitar", "Boxing"]);

   enum Hobbies = {
    Programming,
    Guitar,
    Boxing
   }

   const HobbiesSchema2 = z.nativeEnum(Hobbies);
   ```

---

## Schema

The Basic Schema can be Defined using Zod Object.

```ts
const UserSchema = z.object({
  username: z.string(),
  age: z.number(),
  birthday: z.date().optional(),
  isProgrammer: z.boolean(),
});
```

The type of a Schema can be extracted using _infer_ Method.

```ts
type User = z.infer<typeof UserSchema>;
```

---

## Parsing

Any Object created with Zod can be parsed to check the validation of the Schema.

```ts
const user = {
  username: "Bob",
  age: 23,
  birthday: new Date(),
  isProgrammer: true,
};
```

The Created Object can be parsed using _parse_ Method. This method returns the Object if sucess or an Error.

```ts
console.log(UserSchema.parse(user));
```

The Other Method is the _safeParse_ method used to parse the object and return true or false based on success.

```ts
console.log(UserSchema.safeParse(user).sucess);
```

---

## Basic Validations

There are few Basic Inbuilt Validations in Zod.

The String has _min_, _max_ and _email_ method to validate the String.

```ts
const NameSchema = z.string().min(5).max(15);

const EmailSchema = z.string().email();
```

The Number has _gt_, _lt_ and other methods to validate the value of the Number.

```ts
const AgeSchema = z.number().gt(0).lt(120);
```

Other Common Validations are _optional_, _nullable_, _nullish_ and _default_

All the Objects within Schema are required by default. The _optional_ Method can be used to do the opposite.

```ts
const AgeSchema = z.number().gt(0).lt(120).optional();
```

The _default_ method passes the default to a value.

```ts
const IsProgrammerSchema = z.boolean().default(false);
```

The _nullable_ method supports Null and _nullish_ method supports both Null and Undefined.

---

## Object Type

Object Type can be defined using _object_ function.

```ts
z.object({});
```

Object Type has Several Properties and Methods.

1. Shape

   - _shape_ is a Property which defines the Schema of the Variable

   ```ts
   console.log(UserSchema.shape);
   ```

2. Partial

   - _partial_ is a method to make all the Field in an Object Optional.

3. Pick

   - _pick_ is a Method used to pick only few properties out of an Object.

   ```ts
   const UserSchema = z
     .object({
       username: z.string(),
       age: z.number(),
       birthday: z.date().optional(),
       isProgrammer: z.boolean(),
     })
     .pick({ username: true });
   ```

4. Omit

   - _omit_ is a Method used to omit only properties within an Object.

   ```ts
   const UserSchema = z
     .object({
       username: z.string(),
       age: z.number(),
       birthday: z.date().optional(),
       isProgrammer: z.boolean(),
     })
     .omit({ isProgrammer: true });
   ```

5. Extend

   - _Extend_ is a Method used to add extra fields to the object.

   ```ts
   const UserSchema = z
     .object({
       username: z.string(),
       age: z.number(),
       birthday: z.date().optional(),
       isProgrammer: z.boolean(),
     })
     .extend({
       fullName: z.string(),
     });
   ```

6. Merge

   - _Merge_ is a Method used to merge another Object.

   ```ts
   const UserSchema = z
     .object({
       username: z.string(),
       age: z.number(),
       birthday: z.date().optional(),
       isProgrammer: z.boolean(),
     })
     .merge(StudentSchema);
   ```

7. Passthrough

   - All the extra fields that is not defined in Schema is automatically removed while parsing.

   - To avoid this behavior, _Passthrough_ Method is used.

   ```ts
   const UserSchema = z
     .object({
       username: z.string(),
     })
     .passthrough();

   const user = {
     username: "bob123",
     name: "Bob",
   };

   UserSchema.parse(user); // name field is retained.
   ```

---

## Array Type

The Array type can be created with _array_ method.

```ts
const UserSchema = z.object({
  username: z.string(),
  friends: z.array(z.string()),
});

const user = {
  username: "bob",
  friends: ["bobby", "alex"],
};
```

Array supports other methods such as _min_, _max_, _length_ and _nonEmpty_ etc.

---

## Tuple Type

The Tuple type can be created with _tuple_ method.

The _rest_ method is to catch other elements of the tuple but should obey the data type within it.

```ts
const UserSchema = z.object({
  username: z.string(),
  coordinates: z
    .tuple([z.number(), z.number(), z.string().max(10)])
    .rest(z.number()),
});

const user = {
  username: "bob",
  coordinates: [1, 2, "3", 0, 0, 0, 0],
};
```

---

## Union Type

Union type is used when a field can have any 2 or more datatypes

The Union type can be created with _union_ method.

```ts
const UserSchema = z.object({
  id: z.union([z.number(), z.string()]),
});
```

Alternatively, the _or_ method can also be used to achieve the same result.

```ts
const UserSchema = z.object({
  id: z.number().or(z.string()),
});
```

There is also a _discriminatedUnion_ which is used where one field is common between different objects.

```ts
const UserSchema = z.object({
  id: z.discriminatedUnion("status", [
    z.object({
      status: z.literal("success"),
      data: z.string(),
    }),
    z.object({
      status: z.literal("error"),
      data: z.instanceof(Error),
    }),
  ]),
});
```

---

## Record Type

Record is a type used to define an object in which the key is unknown.

Record can define the type of key as well as value.

The Record type can be created with _record_ method.

```ts
const UserMap = z.record(z.string(), z.string());

const user = {
  abcd: "asdasd",
  abcde: "aasdasd",
};
```

---

## Map Type

The map type can be created with _map_ method.

```ts
const UserMap = z.map(
  z.string(),
  z.object({
    name: string(),
  })
);

const user: UM = new Map([
  ["id-bob", { name: "Bob" }],
  ["id-alex", { name: "Alex" }],
]);
```

---

## Set Type

The set type can be created with _set_ method.

Sets also supports other methods such as _min_, _max_, _length_ and _nonEmpty_ etc.

```ts
const UserMap = z.set(z.number());

const user: UM = new Set([1, 4, 20]);
```

---

## Promise Type

The Promise type can be created with _promise_ method.

```ts
const PromiseSchema = z.promise(z.string());

const p = Promise.resolve("Resolved");
```

---

## Advance Validation

The _refine_ and _superRefine_ methods can be used for Advance Validations.

```ts
const brandEmail = z
  .string()
  .email()
  .refine((val) => val.endsWith("@gmail.com"), {
    message: "Email must be of Gmail",
  });
```

---

## Error Handling

Custom Error messages can be provided during the definition of Schema to make things easier.

Zod has another Library for Custom Validation Error Messages

```bash
yarn add zod-validation-error
```

```ts
import { z } from "zod";
import { fromZodError } from "zod-validation-error";

const UserSchema = z.object({
  username: z
    .string()
    .min(3, "Minimum Length is 3")
    .max(4, "Maximim Length is 4"),
});

const user = {
  username: "Bobby",
};

const result = UserSchema.safeParse(user);

if (!result.success) {
  console.log(fromZodError(result.error));
}
```

---