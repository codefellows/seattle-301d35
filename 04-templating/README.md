![CF](https://i.imgur.com/7v5ASc8.png)  Class 4: Templating
=======
## Overview
<!-- Provide a general overview of the daily concepts and processes that will be covered in lectures and labs -->

*Templates have advantages over direct DOM manipulation. Leverage those strengths in the blog by adding in a templating library! We use templating to abstract away the tiresome work of DOM rendering, and this practice is applied in many front-end libraries and frameworks.*

## Daily Plan

**Whiteboarding with Kat & Travis!**

**Quick discussion on Career Coaching Assignments**

- Most are due by Sunday June 17, except for...
- "Coffee Meeting" and "Attend a Network Event" which are due Sunday July 1

**Code review: Let's take a deep look at the lab solution**

- Pick apart the jQuery where needed
- Let's talk about order of execution on page load
- Let's talk about order of exectuion in event handlers

  ```10 minute break```

**Code review: Code Wars + Regular Expressions**

- Regex: Friend or foe? *FRIEND*
- Your next Code Wars is regex and you have more coming
- [MDN docs on regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
- [Regex101](https://regex101.com/) is a great online resource
- The string methods `.match()`, `.replace()`, `.search()`, `split()` are commonly used with regular expressions

**ES6 arrow functions**

**Templating (slides)**

- What is an HTML templating system?
- Why use templating? How is a templating system useful?


  ```10 minute break```

**Templating with [Handlebars.js](http://handlebarsjs.com/)**

- How did we do templating on Days 2 & 3? Used jQuery to pull HTML from the DOM that we then repurposed.
- Now by putting the template in the `<head>` means there's no concern with it displaying and no need to manage that any longer.
- Handlebars lets us get rid of a lot of the "[brittle](http://lmgtfy.com/?q=brittle+code)" jQuery.
- Look at the [tryhandlebarsjs.com](http://tryhandlebarsjs.com/) demos!
<!-- - [Code demo](https://github.com/codefellows/301-04-handlebars-demo) for us to hack together! -->

**Lab prep**

- Let's review the lab README!
- The skinny: you're getting rid of the old jQuery templating and replacing it with Handlebars!
- 'Staches FTW = **{{WIN}}**

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

* Identify different approaches to reusable HTML templates

* Effectively use templates to present user-entered (or server-provided) data (methods on the Handlebars object).

* Distinguish between the different Handlebars expression types ( **{{}}** vs **{{{}}}** ).

* Modify and style typographic components (**serif, san-serif fonts, font-size, font-family, color, font-weight**, etc)

## Readings
<!-- List of readings required for this content; readings being completed by the start of this lecture -->

* [Handlebars.js Official Documentation](http://handlebarsjs.com/) (Reference)

* [Learn Handlebars.js in 10 Minutes tutorial](http://tutorialzine.com/2015/01/learn-handlebars-in-10-minutes/) (Essential)
