---
title: Thoughts on Normalisation
comments: true
layout: post
date: 2016-07-14
category: 
---

## Introduction

Priya and Danny have recently done Zagakus on Normalisation which I found particularly interesting. I find the topic interesting because a lot of research has been done on it.
When I started learning normalisation, I mistakenly believed that it was a case of changing tables based on what I believed made logical sense.

Normalisation is a technique which is formally based on the relational model. The technique allows to improve the logical design of our database and has a few rules to follow. 

In addition a normalised record set should have the following properties:

- each record in the database has a unique name;
- each attribute in a table has a unique name;
- no duplicated rows - this is the result of each row having a unique identifier (a primary key);

## Why do we normalise data?
We normalise data to ensure that each fact is stored only once in the database. If facts are stored more than once, anomalies might arise when the database is changed. (that could be when data is updated, deleted, or inserted into the database).

## When do we normalised?

That's a question I faced last week while Priya and I were planning our app together. 
We began by trying to predict what models we were going to have. 
It seemed reasonable to have a User model with the following attributes to start with. 

- Id 
- Name
- List of achievements 

An Achievement model will have the following. 

- Id 
- Date 
- Title
- Description 
- User (which it belongs to) 

But something still wasn't quite clear to me.

Does an achievement belong to one or many users? Can an achievement be duplicated, as in having the same title and description? 

The first step at least seemed clear. We needed to clarify with the client. The first clarification we needed was whether an achievement can have multiple users. After asking Danny and Chris we found that this wasn't a requirement, at least for the first iteration.
However, the second issue we had, was whether to have duplicated achievement objects within the database, this was more a technical issue for us so we didn't have to involve the client.

Starting with a one to many relationship made it easier for us to model, rather than a  many to many relationship.
Discussing these problems early, we were able to detect potential problems in the future, thus able to fix them earlier in the design phase.

## What about 'when' to normalise relations? 

That I find a little trickier to answer. We tend to avoid big up front designs, as we may not need some of the aspects of the design.
Normalisation being a form of design,  does that mean we avoid normalising in the beginning because we don't need to? But sometimes normalising earlier can avoid problems later on. 

One approach that I've grown fond of in OO design is the *'napkin design'*.
 This type of design states that you should design as much as you can fit on a small napkin. This has helped me curb my old obsession with doing big up front designs. 

 I'm trying to find the connection between the best practices applied to designing O-O systems ,  e.g minimising duplication, finding right abstractions, etc and the way we design databases. Perhaps I'm not on the right track, perhaps I shouldn't be looking for a relation between the two. 

 However, it It would make it easier to understand for sure. 

 I'm left with a few questions unanswered and a great opportunity to learn more, hopefully things will become clearer as I design more database relational models.

