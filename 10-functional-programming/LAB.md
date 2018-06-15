![CF](https://camo.githubusercontent.com/70edab54bba80edb7493cad3135e9606781cbb6b/687474703a2f2f692e696d6775722e636f6d2f377635415363382e706e67) Lab 10: Functional Programming
===
## Code Wars Challenge

Complete [Kata 1](https://www.codewars.com/kata/use-map-to-double-the-values-in-an-array), [Kata 2](https://www.codewars.com/kata/list-filtering/train/javascript), and [Kata 3](https://www.codewars.com/kata/calculate-average), then follow the submission instructions from Lab 01. Note that the instructions must be followed for *each* of these challenges.

## Lab 10 Submission Instructions
Follow the submission instructions from Lab 01.

## Resources  

[MDN: map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

[MDN: filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

[MDN: reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

## Configuration
_Your repository must include:_

```
10-functional-programming
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
  │   ├── admin.html
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

## User Stories and Feature Tasks

*As a user, I want an admin page so I can easily view the stats of my blog app.*

- Set up a template for each row of the Author Stats section.
- Call the Handlebars `.compile()` method when initializing the admin page. Make sure to assign the result of this method to the same variable name that is used when the author stats are appended to the DOM.
- For both index.html and admin.html, we'll want access to the `Article.all` data, but we'll have different view functions to set up for each of those pages. Complete the `Article.fetchAll()` method so that it invokes a specific callback after all articles are loaded.  

*As a developer, I want to utilize IIFEs so that all of my function calls are executed on page load.*

- Make sure each one of your scripts are properly enclosed. With the exception of `use strict;` and `var app = app || {};`, wrap the contents of article.js and articleView.js in an IIFE and give the IIFE a parameter called 'module'.
- Where the IIFE is invoked, pass in the new 'app' object as an argument to the IIFEs and be sure to remember to export the `Article` and `articleView` objects. Keep in mind that this will change how we refer to those two objects throughout the app.
  - Ensure both the index page and the admin page call `Article.fetchAll()` in a way that properly triggers the appropriate page setup methods.

*As a developer, I want to utilize functional programming so that my code makes sense and follows modern practices.*

- In the `loadAll()` method, refactor the old `forEach()` method to use `.map()` instead, since we are transforming one collection into another. Remember that we can set variables equal to the results of a function. So if we set a variable equal to the result of a `.map()`, it will be our transformed array. There is no need to push to anything.
- Chain together a `.map()` call and a `.reduce()` call to get a rough count of all words in all articles.
- Chain together a `.map()` call and a `.reduce()` call to produce an array of unique author names. You will probably need to use the optional accumulator argument in your reduce call.
- Transform each author string into an object with properties for the author's name, as well as the total number of words across all articles written by the specified author.
  - HINT: This `.map()` call should be set up to return an object literal with two properties. The first property should be pretty straightforward, but you will need to chain some combination of `.filter()`, `.map()`, and `.reduce()` to get the value for the second property.

### Stretch Goal

*As a user, I want additional stats so that I can track the progress of my app.*

- What additional statistical analysis would be of interest to you with this data set? Code it up!

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
