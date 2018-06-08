## Code Skeleton

```js
index.html // unchanged except for initialization via articleView.initIndexPage()
new.html // built out live in class from an existing scaffold

scripts/

	article.js // unchanged; the Markdown stretch goal is in here
		Article()
		Article.prototype.toHtml()
		rawData.sort()
		rawData.forEach()
		articles.forEach()

	articleView.js // new stuff added]
		articleView.populateFilters()
		articleView.handleAuthorFilter()
		articleView.handleCategoryFilter()
		articleView.handleMainNav()
		articleView.setTeasers()
		articleView.initNewArticlePage() // initializes the new article page
		articleView.create() // handler for the form on the new article page
		articleView.initIndexPage() // articles.forEach() from article.js needs to 							be moved in here to prevent all of the 								articles from loading on the new page!
```