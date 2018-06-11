![CF](https://i.imgur.com/7v5ASc8.png)  Class 6: AJAX & JSON
=======
## Overview
<!-- Provide a general overview of the daily concepts and processes that will be covered in lectures and labs -->

*Here we go! Onwards, into Week 2 and a study of the* **Model** *layer. Asynchronous connections... and standardized data formats? This all sounds like a serious upgrade to our application logic! Let's see what you can do with the blog app once we apply these concepts!*

*This week, you will construct a model layer in your application that accesses and transforms persisted data, conforming to common WRRC, FP, and CRUD conventions.*

*Starting with an introduction to the WRRC (web request response cycle), we will learn how HTTP works and how to accomplish simple GET requests through the use of AJAX and jQuery.*

## Daily Plan

- How are everyone's Postgres setups? We need those solid by Wednesday. If you had problems during installation/setup, let's address those in lab during the next couple of days.

- Whiteboarding! Who has whiteboarded with Kat? How did it go?

- Code Review/Q&A

`10-minute break`

- Slides: REST
	- REST concepts
	- RESTful routes
	- App state and transition

- Slides: AJAX & JSON
	- The HTTP Party
	- JSON
	- AJAX

**AJAX/JSON demo 1 (console)**

`10-minute break`

**AJAX/JSON demo 2 (code)**

**Lab prep**

---

- Key points of the readings:
	- Duckett JS book, pp.367-408
		- p.370: What is [AJAX](https://en.wikipedia.org/wiki/Ajax_(mythology))?
		- p.371: Why use AJAX?
		- p.372: **How AJAX works**
		- p.373: Handling AJAX requests and responses *("vanilla AJAX")*
		- p.374: Data formats *(All you need to know is that JSON rules)*
		- p.376: JSON
		- p.382: Loading JSON with AJAX
		- p.388: **jQuery & AJAX: requests**
		- p.389: **jQuery & AJAX: responses**
		- p.392: jQuery's AJAX shorthand methods
		- p.408: **Summary of the AJAX & JSON chapter**


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

* Identify when apps need persistence, to improve the UX and isolate the model logic in the code base.

* Explain how the browser uses the request-response (WRRC) cycle to render an HTML file or AJAX call.

* Analyze the localStorage object

## Useful Resources

- [Pokéapi!](https://pokeapi.co/)
- [Star Wars API!](http://swapi.co/)

- Key terms
	- [WRRC](http://celineotter.azurewebsites.net/world-wide-web-http-request-response-cycle/) (Web Request Response Cycle)
	- [URL](https://en.wikipedia.org/wiki/Uniform_Resource_Locator) vs. [URI](https://en.wikipedia.org/wiki/Uniform_Resource_Identifier) (Uniform Resource Locator vs. Uniform Resource Identifier)
	- [IP address](https://en.wikipedia.org/wiki/IP_address)
	- [DNS](https://en.wikipedia.org/wiki/Domain_Name_System) (Domain Name System)
	- REQ/RES (Request/Response)


## Readings
<!-- List of readings required for this content; readings being completed by the start of this lecture -->

* JS & jQ, Ch 8: pp.367-408 (Context: 384-387; Essential: 367-383, 388-399; Reference:400-408)

* [MDN localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API) (Essential)
