![CF](https://camo.githubusercontent.com/70edab54bba80edb7493cad3135e9606781cbb6b/687474703a2f2f692e696d6775722e636f6d2f377635415363382e706e67) Lab 09: Database Relationships & SQL Joins
===
## Code Wars Challenge

Complete [today's Kata](https://www.codewars.com/kata/reversed-strings) and follow the submission instructions from Lab 01.

## Lab 09 Submission Instructions
Follow the submission instructions from Lab 01.

## Resources  
[SQLBolt](http://sqlbolt.com/) -- Interactive SQL Tutorial

[SQL Cheat Sheet](http://www.cheat-sheets.org/sites/sql.su/)

[Query String Primer](https://en.wikipedia.org/wiki/Query_string)

## Configuration
_Your repository must include:_
```
09-sql-joins-relations
└── starter-code
└── driver-navigator
  ├── .eslintrc.json
  ├── .gitignore
  ├── LICENSE
  ├── README.md
  ├── node_modules
  ├── package-lock.json
  ├── package.json
  ├── public
  │   ├── data
  │   │   └── hackerIpsum.json
  │   ├── index.html
  │   ├── new.html
  │   ├── scripts
  │   │   ├── article.js
  │   │   └── articleView.js
  │   ├── styles
  │   │   ├── base.css
  │   │   ├── layout.css
  │   │   └── modules.css
  │   └── vendor
  │       ├── scripts
  │       │   └── highlight.pack.js
  │       └── styles
  │           ├── fonts
  │           │   ├── icomoon.eot
  │           │   ├── icomoon.svg
  │           │   ├── icomoon.ttf
  │           │   └── icomoon.woff
  │           ├── default.css
  │           ├── icons.css
  │           ├── normalize.css
  │           └── railscasts.css
  └── server.js
└── PULL_REQUEST_TEMPLATE.md
└── README.md
```

## Feature Tasks
***Don't forget to set your conString!***

*As a developer, I want to utilize SQL queries so that I can join data together in the database and access it based on specific criteria.*

- Write a SQL query to join all data from articles and authors tables on the author_id value of each when the articles are retrieved.
- Follow the instructions in the adjacent [09-CRUD-testing.md](09-CRUD-testing.md) doc to verify that everything works.
- Write a SQL query to create a new article.
  - Insert an author and pass the author and author_url as data for the query. On conflict, do nothing.
  - In the second query, add the SQL commands to retrieve a single author from the authors table. Add the author name as data for the query.
  - In the third query, add the SQL commands to insert the new article using the author_id from the second query. Add the data from the new article, including the author_id, as data for the SQL query.
- Follow the instructions in the adjacent [09-CRUD-testing.md](09-CRUD-testing.md) doc to verify that everything works.
- Write a SQL query to update an author record and article record.
  - Remember that the articles now have an author_id property, so we can reference it from the request.body. Add the required values from the request as data for the SQL query to interpolate.
  - After the author has been updated, you will then need to update an article record. Remember that the article records now have an author_id, in addition to title, category, published_on, and body. Add the required values from the request as data for the SQL query to interpolate.
- Follow the instructions in the adjacent [09-CRUD-testing.md](09-CRUD-testing.md) doc to verify that everything works.

## Documentation
_Your README.md must include:_

```md
# Project Name

**Author**: Your Name Goes Here
**Version**: 1.0.0 (increment the patch/fix version number up if you make more commits past your first submission)

## Overview
<!-- Provide a high level overview of what this application is and why you are building it, beyond the fact that it's an assignment for a Code Fellows 301 class. (i.e. What's your problem domain?) -->

## Getting Started
<!-- What are the steps that a user must take in order to build this app on their own machine and get it running? -->

## Architecture
<!-- Provide a detailed description of the application design. What technologies (languages, libraries, etc) you're using, and any other relevant design information. -->

## Change Log
<!-- Use this are to document the iterative changes made to your application as each feature is successfully implemented. Use time stamps. Here's an examples:

01-01-2001 4:59pm - Application now has a fully-functional express server, with GET and POST routes for the book resource.

## Credits and Collaborations
<!-- Give credit (and a link) to other people or resources that helped you build this application. -->
-->
```
