## Code Skeleton

```js
node_modules/
package.json

server.js [lots of stuff added!]   
	app.get('/new-article', responds with new.html)
	app.get('/articles', retrieves all articles from the DB)
	app.post('/articles', puts a new article in DB; used by form on new.html)
	app.put('/articles/:id', allows editing an existing article in the DB)
	app.delete('/articles/:id', removes a single article from the DB)
	app.delete('/articles', truncates the SQL table)
	loadArticles() // database loader
	loadDB() // database loader

public/
	index.html [a TODO requires invoking Article.fetchAll() in a <script> tag]
	new.html

	data/
		hackerIpsum.json

	scripts/

  	article.js
  		Article()
  		Article.all = []
  		Article.prototype.toHtml()
  		Article.loadAll() // sort raw data and run raw data thru Article() to make instances
  		Article.fetchAll() // retreives the raw data from the DB
  		Article.truncateTable // makes AJAX call to a DELETE route to truncate
  		Article.prototype.insertRecord() // AJAX call to the POST route
  		Article.prototype.deleteRecord() // AJAX call to other DELETE route
  		Article.prototype.updateRecord() // AJAX call to the PUT route

  	articleView.js
  		articleView.populateFilters()
  		articleView.handleAuthorFilter()
  		articleView.handleCategoryFilter()
  		articleView.handleMainNav()
  		articleView.setTeasers()
  		articleView.initNewArticlePage()		
  		articleView.create()
  		articleView.submit() // handles the "Submit" button on new.html
  		articleView.initIndexPage()
```
