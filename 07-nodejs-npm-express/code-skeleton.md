## Code Skeleton for Class/Lab 7

This is a type of application architecture that has both client and server code collected into a single directory. At the root level of the project directory are the server-side files, and a directory that contains the client-side code.

When the server.js file is run using Node, it serves the client-side `public/` directory to the browser on a specified port on `localhost`.

```js
node_modules/ 		// created when installing NPM dependencies
package.json  		// created when initializing a NPM project
package.lock.json // created when initializing a NPM project
server.js     		// today's version is bare-bones; changes significantly for Class 8

public/

	index.html // a TODO requires invoking Article.fetchAll() in a <script> tag
	new.html

	data/
		hackerIpsum.json // New data source for the blog!

	scripts/
	
		article.js
			Article()
			Article.all = []
			Article.prototype.toHtml()
			Article.loadAll()
			Article.fetchAll()
			Article.prototype.insertRecord() [$.post the new article from the form]

		articleView.js [unchanged]
			articleView.populateFilters()
			articleView.handleAuthorFilter()
			articleView.handleCategoryFilter()
			articleView.handleMainNav()
			articleView.setTeasers()
			articleView.initNewArticlePage()		
			articleView.create()
			articleView.initIndexPage()
```