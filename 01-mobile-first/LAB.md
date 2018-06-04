![CF](https://i.imgur.com/7v5ASc8.png)  Lab 01: Mobile First
=======
[Code of Conduct](https://github.com/codefellows/code-of-conduct)

## Code Wars Challenge

Complete [today's Kata](https://www.codewars.com/kata/abbreviate-a-two-word-name) and follow the submission instructions below.

## Code Wars Challenge Submission Instructions

1. With your assigned partner, pseudocode your solution on the whiteboard. Take a picture of your proposed solution for your repo.
1. Complete the daily Kata(s).
1. Create a new branch for each challenge.
1. Make a new folder in your Code Wars repository on Github. The name of the folder should be the same as the name of the challenge.
1. This folder should contain:
	- A file named "solution.js" which contains the JavaScript solution *after confirming that it passes on Code Wars with green passing tests*
	- A picture of your pseudocoded solution from the whiteboarding exercise
	- A README.md which includes the problem domain from Code Wars and a link to the challenge
1. Make a pull request from your working branch to your master branch.
1. Submit a link to your PR on Canvas.

## Lab 01

Welcome to your first lab assignment for Code 301!!

Today we'll be kicking off our blog app by applying what we learned in lecture to implement a mobile-first design using responsive web design techniques. You'll also need to spend some time getting familiar with the new Git/GitHub & Pair Programming workflow that we'll utilize throughout this course.

*Please take the time to read carefully through each of the READMEs for lab assignments as they have detailed information regarding your assignment, such as: submission instructions, resources, configuration, user stories with feature tasks, and documentation.*

## Lab 01 Submission Instructions
When you are finished with lab, follow these steps to submit your work. Create one pull request (aka: "PR") from your forked repo to the CF repo with your changes, and you'll each submit that same PR link in Canvas.

1. Be sure to remember to do all of your work on non-master branches.
1. Ensure that all your local changes are committed and pushed to your origin repo.
1. Visit the origin repo on github.com, and ensure that all of your completed work has been merged to master via pull requests within your repo.
1. Create a new PR from your fork to the CF repo and ensure the branches look correct.
1. Fill in the template based on the check box prompts:
	- Write a good descriptive summary of your changes
	- Be sure to include how much time you spent on it and who you worked with.
	- Briefly reflect on and summarize your process.
1. When you create the PR, it will have a unique URL. Copy this link, share with your partner, and paste it into the assignment submission form in Canvas. Both the driver and the navigator will submit the same PR link.

---

### Set up your repo

![High-level Overview: Git Workflow](https://codefellows.github.io/common_curriculum/assets/img/gitflow_front.png)

Here is the recommended workflow:

1. Driver: fork the CF lab repository if you haven't done so already.
1. Your **forked repo** on GitHub is your "origin" repo.
1. Clone **your fork** to your local development environment. Follow this directory <span id="directory">structure</span>:

	```
	~/codefellows
	  301/
	    lab-assignments/
	      01-mobile-first/ # this is the cloned repository for today's work
	```

	1. Immediately `git checkout -b <driverName-navigatorName>` (ex: `git checkout -b allie-sam`).
	2. Create a copy of the `starter-code` directory with the copy's name being the driver-navigator (ex: `cp -r starter-code allie-sam`) and navigate into that directory (ex: `cd allie-sam`). *Do not* work directly in the `starter-code` directory; only work in your renamed copy of it.

### Write code together!

1. Driver: In your terminal, ensure that:
   - You are on the branch named after you and your partner.
   - You are currently within the partner pair directory (`01-mobile-first/allie-sam`).

1. Open this directory as a project in your editor.
1. Use the "Find in Project" feature to locate all the `TODO:`, `REVIEW:`, and `COMMENT:` items.
1. Before writing code, do a read-through of the existing code and discuss the `REVIEW` items with your partner.
1. Use `live-server` in your terminal to render the code in the browser. Note that `live-server` will automatically update the browser when code is changed and saved.
1. Work through one or two `TODO` or `COMMENT` items before switching roles (or one hour, whichever arrives first), testing your code as you go.
1. In your terminal type `git status` to view the files that you have changed. You should only see the files that you have worked on.
1. Type `git diff` to see line-item changes with your down arrow key. (Type `q` to exit this mode)
1. Type `git add file1 file2` where file1, file2, etc. are the files that you have changed.
1. Type `git status` to view the files that have been added to your commit. You should only see the files that you worked on.
1. Type `git commit -m "some meaningful message"` where some meaningful message is a message that **thoroughly** explains your commit.
1. Type `git status` to ensure there is nothing left to commit.
1. Type `git push origin <driverName-navigatorName>` to push this branch to your forked repo on GitHub.
1. On GitHub, Add your navigator as a collaborator (go to `Settings` -> `Collaborators & teams`).
1. Once they have been added, `Slack` to your partner your forked repo link for them to clone down.

### Switch roles

The navigator (who will become the new driver):

  - Clone the repo from the link your partner Slacked you into your working directory.
  - Type `git checkout <driverName-navigatorName>` to check out the remote branch. NOTE: do not use -b flag.
   - If remote branch checkout is successful your terminal should show `Branch 'driver-navigator' set up to track remote branch 'driver-navigator' from 'origin'.
Switched to a new branch 'driver-navigator'`
  - Type `ls` from terminal to confirm <driverName-navigatorName> folder exists.
  - If folder does not exist then try `git branch -b <driverName-navigatorName> origin/<driverName-navigatorName>`
  - If *still* not working then ask TA and/or refer to Tracking Branches section of [Git - Remote Branches] (https://git-scm.com/book/en/v2/Git-Branching-Remote-Branches)  
  - Open the code in your editor and resume editing the code.
  - Add, commit, push as you have done before.

---

## Resources  
<!-- a list of links if any are necessary for the assignment-->
- [Video: Mobile Testing Tip for Your Phone](https://www.youtube.com/watch?v=2t4E_tc8TKM)

---

## Configuration
_Your repository must include:_

- `README.md` - with documentation regarding your lab and its current state of development. Check the "documentation" section below for more details on how that should look **AT MINIMUM**
- `.gitignore` - with standard NodeJS configurations
- `.eslintrc.json` - with Code 301 course standards for the linter

```
01-mobile-first
└── starter-code
└── driver-navigator
	├── .eslintrc.json
	├── .gitignore
	├── LICENSE
	├── README.md
	├── index.html
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

---

## User Stories and Feature Tasks

**Note: Today's lab only includes HTML and CSS, no JavaScript or jQuery yet!**

*As a user, I want to have an application that looks good, is easy to use, and is updated often, so that I want to come back and use it frequently.*

- Working from the provided comp images, write CSS such that the browser rendering matches the images as closely as possible.
- Utilize the icon fonts located in `styles/icons.css` for navigation features as shown in the comp images.

*As a developer, I want to use standard industry practices for setting up and organizing the code that handles the styling of my application so that my code is easy to edit and maintain.*

- Utilize a [`normalize.css`](https://github.com/necolas/normalize.css/blob/master/normalize.css) file, which should be placed in a `vendor/styles/` directory, to override default browser settings that affect the way documents render.
- Utilize SMACSS practices to organize CSS into separate files and appropriately order the loading of those files in the `<head>` of the HTML document.

*As a user, I want a familiar experience of the application so that I know how to use it on my smartphone and occasionally my laptop.*

 - Initially design the application to render per the comp images on mobile devices.
 - Set up the viewport and fluid media rules so content renders per the comp images in both mobile and desktop views. Use a breakpoint of 640 pixels.
 - Add a "Hamburger" menu button that reveals the nav links when hovered over.
- Ensure that images are responsive and do not exceed the size of the viewport.

### Stretch Goal
<!-- Include any additional stretch goals for this assignment, which can vary depending on the class and their overall preparedness for additional work. -->
*As a user, I want a familiar experience when accessing the application on my tablet so that I can get the most out of the screen size.*
- Set up an intermediate media query for tablet devices (choose the maximum width at your own discretion).

---

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
