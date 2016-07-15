---
title: Normal Forms in Normalisation part 1 of 2
comments: true
layout: post
date: 2016-07-15
category: 
---

## Functional Dependencies

In order to normalise data, it's important to first understand functional dependencies.

Functional dependency is the relationship between two attributes in a relation. If two tuples in a relation have the same values for attributes A1 & A2 etc, then two tuples must also have values for attributes B1 and B2, etc. So a attribute uniquely determines another attribute.

Below is an example of un-normalised table.

**un-normalised Student table**  *(sno, sname, teacherno, teachername)*

Here are its functional dependencies.

- sno determines sname, sname is determined by sno
- sno functionally determines teacherno
- teacherno functionally determines teachername

So in other words, we determine what are the determinants.

## The first three normal forms
The process of normalisation involves a series of refinements to groups of relation items in order to produce tables which conform to specified standards, known as normal forms. We will be covering the first 3 normal forms in the next set of posts.

The aim of normalisation is to:

- eliminate certain update, insertion and deletion anomalies;
- produce a final model that is a good representation of the real world;
- enforce certain integrity rules.
- eliminate redundancy (no duplicate data);

## 1st Normal form

**Un-normalised table**

*(projectCode, projectDesc, clientNo, clientName, crafterNo, crafterName, experienceLevel, no.ofDays)*

**1NF Definition**
 A table is in first normal form (1NF) if it has an identifying key and it contains no repeating groups of data.

 Lets take our un-normalised relation above and convert it 1NF.

**Converted to 1NF:**

- Table1 *(projectCode(Primary Key), projectDesc, clientNo, clientName)*
- Table2 *(projectCode(Foreign Key), crafterNo(Primary Key), crafterName, experienceLevel, noOfDays)*

Table 1's attributes are all functionally dependent on the primary key (project code). In other words, there's one value for projectDesc, one value for clientNo and one value for clientName.

Table2 contains repeating data. For a single value of projectCode, there are many values for clientName, experienceLevel and noOfDays.

The attribute **projectCode** is a reference to table 1 to show the one-to-many relationship between the project and the crafters. Simply the crafter working on the project.

