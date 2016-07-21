---
title: Normal Forms in Normalisation part 2 of 2
comments: true
layout: post
date: 2016-07-20
category: 
---

### 1NF table from previous post.
**Table1** (projectCode(Primary Key), projectDesc, clientNo, clientName)

**Table2** (projectCode(Foreign Key), crafterNo(Primary Key), crafterName, experienceLevel, noOfDays)

The last post we had converted our un-normalised table to 1st Normal form. We will now continue by converting the table to Second Normal Form(2NF).

**Definition:** A table is in 2NF if it is first in 1NF and all nonkey attributes are functionality dependent on the whole key(not part of the key).

Lucky for us, Table1 is already in 2NF because of the non-key attributes depend on the whole key (projectCode).

Table2 requires us to split it into two. Let see how we can approach this.

**Table2** (projectCode(Foreign Key), crafterNo(Primary Key), crafterName, experienceLevel, noOfDays)

First of we want all non-key attributes to be dependent only on the key. In this particular table we have the following non-key attributes that are functionally dependent on the 'crafterNo'.

- crafterName
- experienceLevel

In other words these two attributes are determined by the crafter's number. Thus giving us our new table.

**Table2a** (crafterNo, crafterName, experienceLevel)

Secondly, we look at the  remaining non-key attributes and find their determinants. 'noOfDays' is the only non-key attribute. We can determine that 'noOfDays' is only dependent on the 'projectCode' key, which ispart of the compound key (projectCode & crafterNo).
To make *all* non-key attributes dependent on the key, we spit this into it's own table as well, therefore our final two tables look like this.

**Table2a** (crafterNo, crafterName, experienceLevel)

**Table2b** (projectCode(primary key), crafterNo(foreign key), noOfDays

The projectCode and crafterNo keys make the compound key for table 2b and note that the 'crafterNo' is a foreign key that links Table2a with Table2b, showing a one to many relationship.

## 3rd Normal Form

**Definition:** A table is in third normal form (3NF) if it is in second normal form and there are no transitive dependencies.

### Transitive dependencies

A point to note is that a transitive dependency can only exist if a relation holds 3 or more attributes. Knowing this, looking a table with less than 3, we can no up front it has no transitive dependencies.

#### So what are transitive dependencies? 
If we have attribute 'A'. 'A' functionally determines attribute 'B' and 'B' functionally determines 'C'. Then we can safely say that that functional dependency A -> C is a transitive dependency. 

#### What are the transitive dependencies in our relation?

Transitive dependencies can also be detected by seeing if a tables holds information about more than one entity. Looking at table1, attributes clientNo and clientName could be separated away from projectCode and project description as they're essentially two entities.

by examining a table to see if it holds information about more than one entity, i.e. Table1 holds data about projects and about customers. Conceptually projects and customers are two separate entities and therefore they could be separated.

**Table1** (projectCode(Primary Key), projectDesc, clientNo, clientName)

**Table2a** (crafterNo, crafterName, experienceLevel)

**Table2b** (projectCode(primary key), crafterNo(foreign key), noOfDays

Transitive Dependency for the relation:

projectCode → clientNo   and   clientNo → clientName

Leaving our final tables in 3NF looking like below


**Table1a** projectCode(Primary Key), projectDesc, clientNo(foreginKey)

**Table1b** clientNo(primaryKey), clientName

**Table2a** crafterNo(primaryKey), crafterName, experienceLevel

**Table2b** projectCode(primary key), crafterNo(foreign key), noOfDays

That concludes the first 3 Normal Forms. The normal forms are a logical way to arrange your relational tables lessening the chance of anomalies occurring.
These are just the first 3, there are many more forms (more than 6) however what I've found out in practice is that you usually don't need to go past 3 but your mileage may vary.

In summary, The 3 normal forms can be summed with the following sentence.

Depend on the key (1NF), the whole key (2NF) and nothing but the key (3NF), so help you [Codd](https://en.wikipedia.org/wiki/Edgar_F._Codd).

