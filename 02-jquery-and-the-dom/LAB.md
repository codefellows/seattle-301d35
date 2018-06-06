![CF](https://camo.githubusercontent.com/70edab54bba80edb7493cad3135e9606781cbb6b/687474703a2f2f692e696d6775722e636f6d2f377635415363382e706e67) Lab 02: jQuery and the DOM
===

## Code Wars Challenge

Complete [today's Kata](https://www.codewars.com/kata/my-head-is-at-the-wrong-end) and follow the submission instructions from Lab 01.

## Lab 02 Submission Instructions
Follow the submission instructions from Lab 01.

## Resources  
[jQuery cheatsheet](https://oscarotero.com/jquery/)

## Configuration
_Your repository must include:_

```
02-jquery-and-the-dom
└── starter-code
└── driver-navigator
  ├── .eslintrc.json
  ├── .gitignore
  ├── LICENSE
  ├── README.md
  ├── index.html
  ├── scripts
  │   ├── article.js
  │   └── blogArticles.js
  ├── styles
  │   ├── base.css
  │   ├── layout.css
  │   └── modules.css
  └── vendor
      └── styles
          ├── fonts
          │   ├── icomoon.eot
          │   ├── icomoon.svg
          │   ├── icomoon.ttf
          │   └── icomoon.woff
          ├── icons.css
          └── normalize.css
  └── PULL_REQUEST_TEMPLATE.md
  └── README.md
```

## User Stories and Feature Tasks

- Continue styling the app using SMACSS practices. Take a few minutes for code review of your partner's CSS and decide how to incorporate it into your paired lab. You can choose one partner's CSS structure, or you can combine them as you see fit. Seek to optimize and organize your CSS as much as possible!

*As a user, I want my site to display my blog articles in a clear, logical way so that I can find the most recent articles first and the blog is easy to read.*

- Complete the `toHtml()` method, which will ultimately be used to render each article instance to the DOM.
- The articles should be sorted by date.

*As a developer, I want to make my code DRY and render articles from a separate data file so that my HTML file is not cluttered with lengthy and repetitive code.*

- Complete the `Article()` constructor and create instances by assigning all of the properties of each data object to properties of `this`.

*As a developer, I want to utilize the jQuery library's functionality so that I can efficiently access, traverse, and manipulate elements on the DOM.*

- Add the necessary script tag to include jQuery in the app.
- Utilize jQuery functionality to modify the display property of DOM elements.
- Utilize jQuery functionality to traverse the DOM and complete the HTML template for the articles.

*As a developer, I want to optimize iteration with JavaScript array methods so that my code is more condensed and maintainable.*

- Refactor all `for` loops using the `.forEach()` method.


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
