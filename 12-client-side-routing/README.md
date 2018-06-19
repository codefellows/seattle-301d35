![CF](https://i.imgur.com/7v5ASc8.png)  Class 12: Single Page Apps & Client-Side Routing
=======
## Overview
<!-- Provide a general overview of the daily concepts and processes that will be covered in lectures and labs -->

*Today we will explore client-side route-based functionality to create a more performant and modular single page web application. These routes should be simple, with a single callback to render the page to the DOM.*

*We need to be attentive to when a server request is being made versus when the routing is intercepted and handled in the browser. We are finding new ways to blur the separation of concerns, in this case offloading some of the Controller responsibilities into the View layer.*


## Daily Plan

**Big Code Review**

- index.js and setting up the environment
- The plan/timeline going forward
- Environments, revisited
- Wireframes for coming labs

**Slides: Routing & Controllers**

**Single-Page Apps**

- Why single page?
	1. Performance trade-offs
	2. User experience

- jQuery’s role
	1. Event handling for our tabs
	2. Will still be hiding and showing content

- Benefits of adding a ‘route’ to our page
	1. Lets user (and browser) believe they are navigating
	2. Updates History API to allow for ‘forward’ and ‘back’ actions

**Look at a to-do app that uses PageJS**

- History API in the browser
	1. `history` is just an object
	2. It has a length property and some useful methods

- Head to another page & check the history length again

- Now use some methods like ‘go’ ‘forward’ and ‘back’
	1. Length will update based on pushState
	2. It cannot be directly modified!

- Client-side routing
	1. How to use page.js
	2. Look at how `history` is used in page.js
	3. Docs!

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

* Identify useful urls for an app, and be able to implement those routes given the new library presented.

* Recognize other server technologies such as Node, new dependencies

## Readings
<!-- List of readings required for this content; readings being completed by the start of this lecture -->

* JS&jQ: 424-427 (History API) (Essential)

* [A Classic MVC blog post](http://blog.codinghorror.com/understanding-model-view-controller/)

* [Page.js Readme](https://github.com/visionmedia/page.js) (Reference. Read up until "Plugins" section)
