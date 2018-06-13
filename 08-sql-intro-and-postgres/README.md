# ![CF](https://i.imgur.com/7v5ASc8.png)  Class 8: SQL & Postgres

## Overview
<!-- Provide a general overview of the daily concepts and processes that will be covered in lectures and labs -->

*Databases power web applications everywhere by enabling them to persist, modify, and query datasets to great effect. While there are many types of database options available now, Structured Query Language (SQL) remains the de facto standard for communicating with relational database systems. Let's build some SQL skills!*

*View today's and tomorrow's classes and labs as a big two-part structure. It's all the same basic subject, but way too much for one day, so we've split it. Today we are mainly concerned with just understanding it; tomorrow's lecture and the following lab are a lot more hands-on.*

*Our `server.js` file for Lab 7 had <20 lines of code. The one for Lab 8 has 170+ lines.*

![Well, that escalated quickly.](escalated.jpg)

## Daily Plan

**[Our Week 2 one-on-one meetings are tomorrow and Friday! Follow this link to sign up for a slot!](https://sam-301d35.youcanbook.me/)**

**Code Review**
- Be aware that the setup and initialization challenges with the first run of a Postgres environment are often shared by individuals with the same operating systems. It's a good idea to gather in those tribes and share those details when getting started with lab.

- Let's review and high-level discuss the changes that are ahead for the `server.js` file and our application structure.

`10-minute break`

**Slides on SQL: 41 slides, so there is a lot to cover!**

- A little more about REST to start off...

- CRUD
	- Databases as a resource
	- C = CREATE
	- R = READ
	- U = UPDATE
	- D = DESTROY (or DELETE)

- Relational Databases
	- Discuss differences between document based storage
	- Discuss common DBMS - MySQL, PostgreSQL, SQLite, etc
	- Discuss concepts of relational data

- SQL
	- Syntax
	- Statements
	- Clauses
	- Constraints
	- Expressions
	- Predicates
	- [SQL cheat sheet](http://www.cheat-sheets.org/sites/sql.su/)

- Data types
	- INTEGER
	- NOT NULL
	- PRIMARY KEY
	- CHAR
	- VARCHAR

- [Postgres article on Wikipedia](https://en.wikipedia.org/wiki/PostgreSQL)

`10-minute break`

**Review of the new `server.js` in the lab code**

## Learning Objectives
<!--
ABCD:
  Audience: Program participants
  Behavior: Expected learning/behavior changes/results
  Condition:
    Circumstances that lead to change/result
    When change/result are expected to occur
  Degree: How much change occurs (%) for how many participants (#)
-->

* Understand the basic concepts of databases

* Effectively use basic SQL commands to create, read, update, and delete rows from a table

* Understand the fundamental architecture of full-stack applications and how we can locally emulate them


## Readings
<!-- List of readings required for this content; readings being completed by the start of this lecture -->

* [SQLBolt (Intro, Lessons 1-4, 13-18)](http://sqlbolt.com/)

* [A Primer on SQL](https://leanpub.com/aprimeronsql/read) (Reference)
