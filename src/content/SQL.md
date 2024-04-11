# SQL Reference

## Introduction

Structured query language is a programming language for storing and processing information in a relational database.

The Extention of Python File is **.sql** .

### Contents

1. [Comments](#comments)

2. [CLI Commands](#cli-commands)

3. [CRUD Operations](#crud-operations)

   - [Create Clause](#create-clause)

   - [Insert Clause](#insert-clause)

   - [Alter Clause](#alter-clause)

   - [Select Clause](#select-clause)

   - [Where Clause](#where-clause)

   - [Update Clause](#update-clause)

   - [Delete Clause](#delete-clause)

---

## Comments

Comments are Piece of Line that is Ignored.

```sql
-- is used to Add Comments
```

## CLI Commands

1. To display all the Database

   ```bash
   show databases;
   ```

2. To creates a Database of Name _database_name_

   ```bash
   create database database_name;
   ```

3. To access the Database

   ```bash
   use database_name;
   ```

4. To show all the Tables within the Database

   ```bash
   show tables;
   ```

5. To show Table Characteristics/Schema

   ```bash
   describe table_name;
   ```

---

## CRUD Operations

### Create Clause

To Create a Table of Name table-name with the columns, CREATE Clause is used.

Few Column_datatypes are:

- INT
- VARCHAR(15 - _no. of characters_)
- BOOLEAN

```sql
CREATE TABLE table_name (
	column_name_1 column_datatype,
	column_name_2 column_datatype
	);
```

### Insert Clause

To Insert value to the table to each Column.

```sql
INSERT INTO table_name VALUES (value_1,value_2,...,value_n);
```

### Alter Clause

To Insert an Extra Column to the Existing Table.

```sql
ALTER TABLE table_name ADD new_column_name column_datatype;
```

### Select Clause

To show the Table _table_name_ along with all its Values.

```sql
SELECT * FROM table_name;
```

To show only the Values of Column _column_name_ in Table _table_name_.

```sql
SELECT column_name FROM table_name;
```

To display the Table as per Ascending order of Column column_name.

```sql
SELECT * FROM table_name ORDER BY column_name ASC;
```

### Where Clause

To show the Rows where column `column_name` has the value `column_value`, here **=** is a Relational Operator

```sql
SELECT * FROM table_name WHERE column_name=column_value;
```

Other Relational Operator can also be used like:

- **!=**
- **&lt;=**
- **>=**
- **&lt;**
- **>** etc

Logical Operator like `AND` and `OR` can also be Used.

```sql
SELECT * FROM table_name WHERE column_name_1=column_value_1 OR column_name_2=column_value_2;
```

### Update Clause

To update the value of all the entries of Column _column_name_ from _column_value_1_ to _column_value_2_.

```sql
UPDATE table_name SET column_name=column_value_2 WHERE column_name=column_value_1;
```

### Delete Clause

To delete all the Entries in which the Value of an Entry in Column column_name in column_value.

```sql
DELETE FROM table_name WHERE column_name=column_value;
```

---
