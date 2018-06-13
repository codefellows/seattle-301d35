![CF](https://camo.githubusercontent.com/70edab54bba80edb7493cad3135e9606781cbb6b/687474703a2f2f692e696d6775722e636f6d2f377635415363382e706e67) Lab 07: NodeJS & NPM
===

## Code Wars Challenge

Complete [today's Kata](https://www.codewars.com/kata/disemvowel-trolls) and follow the submission instructions from Lab 01.

## Lab 07 Submission Instructions
Follow the submission instructions from Lab 01.

## Resources  
[Node JS Docs](https://nodejs.org/en/)

[NPM JS Docs](https://docs.npmjs.com/)

[Express JS Docs](http://expressjs.com/en/4x/api.html)

## Configuration
_Your repository must include:_

```
07-nodejs-npm-express
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
  │   ├── data
  │   │   └── hackerIpsum.json
  │   ├── index.html
  │   ├── new.html
  │   ├── scripts
  │   │   ├── article.js
  │   │   └── articleView.js
  │   ├── styles
  │   │   ├── base.css
  │   │   ├── layout.css
  │   │   └── modules.css
  │   └── vendor
  │       ├── scripts
  │       │   └── highlight.pack.js
  │       └── styles
  │           ├── fonts
  │           │   ├── icomoon.eot
  │           │   ├── icomoon.svg
  │           │   ├── icomoon.ttf
  │           │   └── icomoon.woff
  │           ├── default.css
  │           ├── icons.css
  │           ├── normalize.css
  │           └── railscasts.css
  └── server.js
└── PULL_REQUEST_TEMPLATE.md
└── README.md
```

## User Stories and Feature Tasks

*As a user, I want to be able to create new articles and allow guests to retrieve those new articles.*

- Initialize the project with `npm init`, which creates `package.json` and `package-lock.json` files. Don't forget to add `node_modules` to your `.gitignore` file!
-  Use NPM to install ExpressJS and ensure that it's been saved as a dependency in the `package.json` file.

*As a developer, I want to use the ExpressJS framework to set up a server file to handle HTTP requests and deliver responses.*

- Instantiate the ExpressJS framework and configure the `app.use()` middleware to interface with the file system to serve static resources. *Include a comment* to explain why our files are in a "public" directory now and how ExpressJS serves our local files.
- Ensure that the server is listening for incoming requests. Include a message to let you know on which port your server is running.
- Run the server using `node server` and ensure that your app functions correctly. If you'd like to have your code live re-load the way that `live-server` did, install the NPM package `nodemon` and use that to run your server.

*As a user, I want to access the form directly so I can easily add new articles.*

- Create a route and callback that will serve up the new.html page via a separate URI.
- As you write your code, use arrow functions and refactor any existing methods to use arrow functions, where possible.

*As a user, I want feedback if I have made an error so that I can make sure to always access the correct URL.*

- Create a ***404*** route to handle any requests other than index.html or new.html, and deliver a 404 status and a message to those invalid requests.

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
